import { saveShortUrl, getCustomShortUrl } from "../dao/shortUrl.js";
import { generateNanoId } from "../utils/helper.js";

export const createShortUrlWithUser = async (url, userId, slug = null) => {
    const shortUrlCode = slug || generateNanoId(7);
    if (slug) {
        const exists = await getCustomShortUrl(slug);
        if (exists) {
            const error = new Error("This custom url already exists");
            error.status = 409;
            throw error;
        }
    }
    return await saveShortUrl(shortUrlCode, url, userId);

};

export const createShortUrlWithoutUser = async (url, slug = null) => {
    const shortUrlCode = slug || generateNanoId(7);
    if (slug) {
        const exists = await getCustomShortUrl(slug);
        if (exists) {
            const error = new Error("This custom url already exists");
            error.status = 409;
            throw error;
        }
    }
    return await saveShortUrl(shortUrlCode, url);

};

/**
 * Retrieves a URL by its short code (slug or generated ID).
 * @param {string} shortUrlCode - The short code to look up.
 * @returns {Promise<object|null>} The URL document or null if not found.
 */
export const getShortUrl = async (shortUrlCode) => {
    return await getCustomShortUrl(shortUrlCode);
};