import Click from '../models/click.model.js';
import shortUrlModel from '../models/shortUrl.model.js';

// Helper function to find the most frequent item in a list of clicks
const getTopStat = async (urlIds, field) => {
  const result = await Click.aggregate([
    // Match clicks for the user's URLs
    { $match: { urlId: { $in: urlIds } } },
    // Filter out null, undefined, empty values, and "Unknown" values
    { 
      $match: { 
        [field]: { 
          $ne: null, 
          $ne: "", 
          $ne: "Unknown",
          $exists: true 
        } 
      } 
    },
    // Group by the specified field and count occurrences
    { $group: { _id: `$${field}`, count: { $sum: 1 } } },
    // Sort by count descending to get the top result first
    { $sort: { count: -1 } },
    // Take only the top one (most frequent)
    { $limit: 1 }
  ]);
  
  
  // If no results after filtering, try with "Unknown" included
  if (result.length === 0) {
    const fallbackResult = await Click.aggregate([
      { $match: { urlId: { $in: urlIds } } },
      { $match: { [field]: { $ne: null, $ne: "", $exists: true } } },
      { $group: { _id: `$${field}`, count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 1 }
    ]);

    return fallbackResult.length > 0 ? fallbackResult[0]._id : 'N/A';
  }
  
  // Return the name of the top item, or 'N/A' if no data
  return result.length > 0 ? result[0]._id : 'N/A';
};

export const getTopStats = async (req, res) => {
  try {
    const userId = req.user.id;
    const userUrls = await shortUrlModel.find({ user: userId }).select('_id');
    const urlIds = userUrls.map(u => u._id);

    if (urlIds.length === 0) {
      return res.json({
        location: 'N/A',
        device: 'N/A',
        referrer: 'N/A'
      });
    }

    // Check if clicks exist for these URLs
    const totalClicks = await Click.countDocuments({ urlId: { $in: urlIds } });

    if (totalClicks === 0) {
      return res.json({
        location: 'N/A',
        device: 'N/A',
        referrer: 'N/A'
      });
    }

    // Run aggregations in parallel for better performance
    const [topLocation, topDevice, topReferrer] = await Promise.all([
      getTopStat(urlIds, 'location'),
      getTopStat(urlIds, 'device'),
      getTopStat(urlIds, 'referrer')
    ]);

    res.json({
      location: topLocation,
      device: topDevice,
      referrer: topReferrer
    });

  } catch (err) {

    res.status(500).json({ message: "Server error" });
  }
};
