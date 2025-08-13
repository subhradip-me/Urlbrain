import mongoose from "mongoose";

const saveUrlSchema = new mongoose.Schema({

  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  purpose: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    default: [],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", 
    required: true,
  },
}, {
  timestamps: true
});

export default mongoose.model("SaveUrl", saveUrlSchema);
