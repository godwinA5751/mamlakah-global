import mongoose from "mongoose";

const bioDataSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    dob: {
      type: Date,
      required: true,
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

    address: {
      type: String,
      required: true,
    },

    hobbies: {
      type: String,
      required: true,
    },

    occupation: {
      type: String,
      required: true,
    },

    stateOfOrigin: {
      type: String,
      required: true,
    },

    dislikes: {
      type: String,
      required: true,
    },

    talent: {
      type: String,
      required: true,
    },

    passion: {
      type: String,
      required: true,
    },

    nationality: {
      type: String,
      required: true,
    },

    country: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      default: "New",
      enum: ["New", "Reviewed", "Contacted"],
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

export default mongoose.model("BioData", bioDataSchema);