import PrayerPoint from "../models/PrayerPoint.js";

export const createPrayerPoint = async (req, res) => {
  try {
    const { name, email, phone, prayer } = req.body;
    const prayerRequest = await PrayerPoint.create({ name, email, phone, prayer });

    res.status(201).json({
      success: true,
      message: "Prayer Point submitted successfully",
      data: prayerRequest,
    });
  } catch (error) {
    console.error(error)
    // MongoDB duplicate key error
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "Email already exists.",
      });
    }

    if (error.name === "ValidationError") {
      return res.status(400).json({ 
        success: false, 
        message: error.message 
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
    const data = await PrayerPoint.find({ isArchived: false }).sort({
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