import Click from "../models/click.model.js";
import shortUrlModel from "../models/shortUrl.model.js";

export const getClickHeatmap = async (req, res) => {
  try {
    const userId = req.user.id; // Assuming authentication middleware

    // 1. Get all URL IDs for the logged-in user
    const userUrls = await shortUrlModel.find({ user: userId }).select('_id');
    if (!userUrls.length) {
      // If user has no URLs, return an empty heatmap
      const emptyHeatmap = Array.from({ length: 7 }, () => Array(24).fill(0));
      return res.json({ heatmap: emptyHeatmap });
    }
    const urlIds = userUrls.map(u => u._id);

    // 2. Get all clicks for those URLs from the last 7 days
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    const clicks = await Click.find({
      urlId: { $in: urlIds },
      timestamp: { $gte: sevenDaysAgo }
    });

    // 3. Initialize a 7x24 grid (rows are Sun-Sat, cols are 0-23h)
    const heatmap = Array.from({ length: 7 }, () => Array(24).fill(0));

    // 4. Populate the heatmap with accurate day and hour
    clicks.forEach(click => {
      const date = new Date(click.timestamp);
      const dayOfWeek = date.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
      const hour = date.getHours();
      
      // Increment the count for the correct day and hour
      heatmap[dayOfWeek][hour]++;
    });

    res.json({ heatmap });
  } catch (err) {
    console.error("Heatmap Error:", err);
    res.status(500).json({ message: err.message || "Server error" });
  }
};