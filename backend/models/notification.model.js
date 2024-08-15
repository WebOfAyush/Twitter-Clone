import mongoose from "mongoose";
const notificationSchema = new mongoose.Schema({
    from: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required: true
    },
    to: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required: true,
    },
    type: {
        type : String,
        required: true,
        enum : ["follow", "like"]
    },
    read:{
        type:Boolean,
        defaut: false
    }
}, {timestamps: true})
const Notification = new mongoose.model("Notification",notificationSchema);
export default Notification;