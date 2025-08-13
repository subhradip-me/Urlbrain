import mongoose from "mongoose";

const clickSchema = new mongoose.Schema({
  urlId: { type: mongoose.Schema.Types.ObjectId, ref: "ShortUrl", required: true },
  timestamp: { type: Date, default: Date.now },
  // --- Add these new fields ---
  location: { type: String, default: 'Unknown' },
  device: { type: String, default: 'Unknown' },
  referrer: { type: String, default: 'Unknown' }
});

export default mongoose.model("Click", clickSchema);