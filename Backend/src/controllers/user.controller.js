import feedbackModel from "../models/feedback.model.js";

const submitFeedback = async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    if (!name || !email || !phone || !subject || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const feedback = await feedbackModel.create({
        username : name,
        email, 
        phone,
        subject,
        message,
    })

    return res.status(201).json({
        success : true,
        message : "Feedback submitted successfully..."
    })


  } catch (error) {
    res.status(500).json({
      message: "Error submitting Feedback",
      error: error.message,
    });
  }
};

export {submitFeedback}