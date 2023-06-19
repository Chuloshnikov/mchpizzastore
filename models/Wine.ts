import mongoose from "mongoose";


const WineSchema = new mongoose.Schema ({
    title: {
        type: String, required: true, maxlength: 60
    },
    origin: {
        type: String, required: true, maxlength: 60
    },
    prices: {
        type:[Number],
        required: true,
    },
}, 
{ timestamps: true }
);


export default mongoose.models.Wine || mongoose.model("Wine", WineSchema);