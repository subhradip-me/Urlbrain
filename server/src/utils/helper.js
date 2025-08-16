import { nanoid } from "nanoid";
import jsonwebtoken from "jsonwebtoken";

export const generateNanoId = (length) => {
    return nanoid(length);
};

export const signToken = (payload) => {
    return jsonwebtoken.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });
};

// Rename this function to avoid conflict with middleware
export const verifyJwtToken = (token) => {
    const decoded = jsonwebtoken.verify(token, process.env.JWT_SECRET);
    console.log(decoded.id);
    return decoded.id;
};