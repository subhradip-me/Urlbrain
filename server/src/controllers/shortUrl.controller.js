import { getShortUrl } from '../services/shortUrl.service.js';
import Click from '../models/click.model.js';
import geoip from 'geoip-lite';
import useragent from 'useragent';

export const createShortUrl = async (req, res) => {
  try {
    const data = req.body;
    let urlData;

    if (req.user && req.user.id) {
      urlData = await createShortUrlWithUser(data.url, req.user.id, data.slug);
    } else {
      urlData = await createShortUrlWithoutUser(data.url, data.slug);
    }

    const response = {
      ...urlData._doc,  // full document: _id, full_url, short_url, clicks, etc.
      shortUrl: `${process.env.APP_URL}/${urlData.short_url}`,  // extra computed field
    };

    res.status(200).json(response);
  } catch (err) {
    res.status(err.status || 500).json({ message: err.message || "Server error" });
  }
};


export const createCustomShortUrl = async (req, res) => {
  try {
    const { url, slug } = req.body;
    const userId = req.user?.id || null;

    const urlData = await createShortUrlWithUser(url, userId, slug);

    res.status(200).json({
      ...urlData._doc,
      shortUrl: `${process.env.APP_URL}/${urlData.short_url}`,
    });
  } catch (err) {
    res.status(err.status || 500).json({ message: err.message || "Server error" });
  }
};


export const redirectFromShortUrl = async (req, res) => {
  try {
    const { id } = req.params;
    const url = await getShortUrl(id);
    if (!url) return res.status(404).json({ message: "Short URL not found" });

    // --- Capture Analytics Data ---
    const ip = req.ip;
    const geo = geoip.lookup(ip);
    const agent = useragent.parse(req.headers['user-agent']);

    const clickData = {
      urlId: url._id,
      timestamp: new Date(),
      // 1. Location: City, Country (e.g., "San Francisco, US")
      location: geo ? `${geo.city}, ${geo.country}` : 'Unknown',
      // 2. Device: Browser Family (e.g., "Chrome")
      device: agent.family || 'Unknown',
      // 3. Referrer: The site the user came from (or "Direct")
      referrer: req.headers.referer || 'Direct'
    };

    // Log the click asynchronously (fire and forget)
    Click.create(clickData);

    res.redirect(url.full_url);
  } catch (err) {
    console.error('Redirect error:', err);
    res.status(500).json({ message: "Server error" });
  }
};





