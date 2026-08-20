import BioData from "../models/BioData.js";

export const createBioData = async (req, res) => {
  try {
    const bio = await BioData.create(req.body);

    res.status(201).json({
      success: true,
      message: "Bio Data submitted successfully",
      data: bio,
    });
  } catch (error) {
    // MongoDB duplicate key error
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "Email already exists.",
      });
    }

    return res.status(500).json({
      success: false,
      message: "Something went wrong while submitting your bio data.",
    });
  }
};

export const getAllBioData = async (req, res) => {
  try {
    const data = await BioData.find({ isArchived: false }).sort({
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

export const getBioData = async (req, res) => {
  try {
    const bio = await BioData.findById(req.params.id);

    if (!bio) {
      return res.status(404).json({
        success: false,
        message: "Record not found",
      });
    }

    res.json({
      success: true,
      data: bio,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteBioData = async (req, res) => {
  try {
    await BioData.findByIdAndDelete(req.params.id);

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