import saveUrlModel from "../models/saveUrl.model.js";
import UserModel from "../models/user.model.js";
import shortUrlModel from "../models/shortUrl.model.js";

export const saveUrl = async (req, res) => {
  try {
    const { title, url, purpose, tags } = req.body;

    const formattedTags = Array.isArray(tags)
  ? tags
  : typeof tags === 'string'
    ? tags.split(',').map(tag => tag.trim())
    : [];

    if (!title || !url) {
      return res.status(400).json({ message: 'Title and URL are required' });
    }

    const newUrl = new saveUrlModel({
      title,
      url,
      purpose,
      tags: formattedTags,
      user: req.user.id,
    });

    console.log('Saving urls', { title, url, purpose, tags, userId: req.user.id});

    await newUrl.save();

    res.status(201).json(newUrl);
  } catch (error) {
    console.error('Error saving URL:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const getUserUrls = async (req, res) => {
  try {
    const urls = await saveUrlModel.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.json(urls);
  } catch (error) {
    console.error('Error fetching user URLs:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const getUsersShortUrls = async (req, res) => {
  try {
    const urls = await shortUrlModel.find({ user: req.user.id }).sort({ createdAt: -1 });

    const formattedUrls = urls.map(url => ({
      ...url._doc,
      shortUrl: `${process.env.APP_URL}/${url.short_url}` // Full short URL
    }));

    res.json(formattedUrls);
  } catch (error) {
    console.error('Error fetching URLs:', error.message);
    res.status(500).json({ message: 'Error fetching URLs' });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await UserModel.findById(req.user.id).select('name email');
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
