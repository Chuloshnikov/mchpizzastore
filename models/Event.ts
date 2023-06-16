import mongoose from "mongoose";



const EventSchema = new mongoose.Schema ({
    img: {
        type: String, required: true,
    },
    title: {
        type: String, required: true, 
    },
    subtitle: {
        type: String, required: true,
    },
    eventDate: {
        type: String, required: true,
    },
    description: {
        type: String, required: true,
    },
}, 
{ timestamps: true }
);


export default mongoose.models.Event || mongoose.model("Event", EventSchema);