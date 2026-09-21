import mongoose from "mongoose"

const feedbackSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
    },
    phone : {
        type : String,
        required : true,
    },
    subject : {
        type : String,
        required : true,
    },
    message : {
        type : String,
        required : true,
    }
})

const feedbackModel = mongoose.model("Feedback", feedbackSchema)

export default feedbackModel;