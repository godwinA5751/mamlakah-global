import mongoose from "mongoose";

const prayerPointSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    phone: {
      type: String,
      required: true,
    },

    prayer: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      default: "New",
      enum: ["New", "Reviewed"],
    },

    isArchived: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("PrayerPoint", prayerPointSchema);