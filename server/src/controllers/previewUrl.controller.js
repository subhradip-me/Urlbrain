import fetch from 'node-fetch';
import * as cheerio from 'cheerio';

export const previewUrlController = async (req, res) => {
  const targetUrl = req.query.url;
  if (!targetUrl) {
    return res.status(400).json({ error: "Missing URL" });
  }

  try {
    const response = await fetch(targetUrl, {
      headers: {
        // Mimic a real browser
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/115.0 Safari/537.36',
        Accept: 'text/html',
      },
      redirect: 'follow',
    });

    if (!response.ok) {
      return res.status(500).json({ error: `Fetch failed with status ${response.status}` });
    }

    const html = await response.text();
    const $ = cheerio.load(html);

    const getMetaTag = (name) =>
      $(`meta[property='${name}']`).attr('content') ||
      $(`meta[name='${name}']`).attr('content');

    const title =
      getMetaTag('og:title') ||
      $('title').text() ||
      getMetaTag('twitter:title');

    const description =
      getMetaTag('og:description') ||
      getMetaTag('description') ||
      getMetaTag('twitter:description');

    const image =
      getMetaTag('og:image') ||
      getMetaTag('twitter:image') ||
      $('img').first().attr('src'); // fallback to first image on page

    res.json({
      title: title || null,
      description: description || null,
      image: image ? new URL(image, targetUrl).href : null, // resolve relative URL
    });

  } catch (err) {
    console.error("Preview Fetch Error:", err.message);
    res.status(500).json({ error: "Preview fetch failed" });
  }
};
