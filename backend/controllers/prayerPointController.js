import PrayerPoint from "../models/PrayerPoint.js";

export const createPrayerPoint = async (req, res) => {
  try {
    const { name, email, phone, prayer } = req.body;

    const newPrayer = await PrayerPoint.create({ name, email, phone, prayer });

    res.status(201).json({
      success: true,
      message: "Prayer Point submitted successfully",
      data: newPrayer,
    });
  } catch (error) {
    console.error(error);
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "Email already exists.",
      });
    }

    return res.status(500).json({
      success: false,
      message: "Something went wrong while submitting your prayer point.",
    });
  }
};

export const getAllPrayerPoint = async (req, res) => {
  try {
    // "New" sorts before "Reviewed" alphabetically, so status:1 groups
    // New requests first, and within each group, newest first.
    const data = await PrayerPoint.find({ isArchived: false }).sort({
      status: 1,
      createdAt: -1,
    });

    res.json({
      success: true,
      count: data.length,
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getPrayerPoint = async (req, res) => {
  try {
    const prayer = await PrayerPoint.findById(req.params.id);

    if (!prayer) {
      return res.status(404).json({
        success: false,
        message: "Record not found",
      });
    }

    res.json({
      success: true,
      data: prayer,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// NEW: lightweight count for the dashboard notification badge
export const getNewPrayerCount = async (req, res) => {
  try {
    const count = await PrayerPoint.countDocuments({
      isArchived: false,
      status: "New",
    });

    res.json({
      success: true,
      count,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// NEW: flips a prayer from "New" to "Reviewed"
export const markPrayerReviewed = async (req, res) => {
  try {
    const prayer = await PrayerPoint.findByIdAndUpdate(
      req.params.id,
      { status: "Reviewed" },
      { new: true }
    );

    if (!prayer) {
      return res.status(404).json({
        success: false,
        message: "Record not found",
      });
    }

    res.json({
      success: true,
      message: "Marked as reviewed",
      data: prayer,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deletePrayerPoint = async (req, res) => {
  try {
    await PrayerPoint.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Record deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};