import shortUrlModel from "../models/shortUrl.model.js";
import Click from "../models/click.model.js";

// Helper to generate chart data from click logs
function generateChartData(clicks, days) {
  const now = new Date();
  const data = [];

  // Create a map to store clicks per day for quick lookup
  const clicksByDay = new Map();
  clicks.forEach(click => {
    const clickDay = new Date(click.timestamp).toDateString();
    clicksByDay.set(clickDay, (clicksByDay.get(clickDay) || 0) + 1);
  });

  for (let i = days - 1; i >= 0; i--) {
    const day = new Date(now);
    day.setDate(now.getDate() - i);
    const dayString = day.toDateString();

    const label = days === 7
      ? day.toLocaleDateString('en-US', { weekday: 'short' })
      : `Day ${days - i}`;
    
    const dayClicks = clicksByDay.get(dayString) || 0;
    data.push({ name: label, clicks: dayClicks });
  }
  return data;
}

export const getUserAnalytics = async (req, res) => {
  try {
    const userId = req.user.id;
    const userUrls = await shortUrlModel.find({ user: userId }).select('_id');
    const urlIds = userUrls.map(u => u._id);

    // This fetches ALL clicks for the user's URLs, regardless of creation date
    const clicks = await Click.find({ urlId: { $in: urlIds } });

    // Total clicks is the count of all clicks ever
    const totalClicks = clicks.length;

    // These functions organize all clicks into the respective time windows
    const chart7 = generateChartData(clicks, 7);
    const chart30 = generateChartData(clicks, 30);
    const chart90 = generateChartData(clicks, 90);

    // Placeholder for stats. You can add aggregation logic here.
    const topLocation = "Unknown";
    const topDevice = "Unknown";
    const topReferrer = "Unknown";

    res.json({
      stats: {
        clicks: totalClicks,
        location: topLocation,
        device: topDevice,
        referrer: topReferrer,
      },
      chart: {
        "7days": chart7,
        "30days": chart30,
        "90days": chart90,
      }
    });
  } catch (err) {
    console.error("Analytics error:", err);
    res.status(500).json({ message: "Server error" });
  }
};