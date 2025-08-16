import shortUrl from "../models/shortUrl.model.js";

export const saveShortUrl = async (shortUrlCode, longUrl, userId) => {
    try {
        const newUrl = new shortUrl({
            full_url: longUrl,
            short_url: shortUrlCode
        });
        if (userId) {
            newUrl.user = userId;
        }

        return await newUrl.save(); // ✅ This line was missing

    } catch (err) {
        if (err.code === 11000) {
            const error = new Error("Short URL already exists");
            error.status = 409;
            throw error;
        }
        throw err;
    }
};

export const getShortUrl = async (shortUrlCode) => {
    return await shortUrl.findOneAndUpdate(
        { short_url: shortUrlCode },
        { $inc: { clicks: 1 } }
    );
};

export const getCustomShortUrl = async (slug) => {
    return await shortUrl.findOne({ short_url: slug });
};
