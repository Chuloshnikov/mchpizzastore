import mongoose from "mongoose";



const OrderSchema = new mongoose.Schema ({
    customer: {
        type: String, required: true, maxlength: 60
    },
    address: {
        type: String, required: true, maxlength: 200
    },
    total: {
        type: Number, required: true,
    },
    status: {
        type: Number, default: 0,
    },
    method: {
        type: Number, required: true,
    },
    phone: {
        type: String,
    },
    cartOrder: {
        type:[{
            title: {type:String, required: true},
            price: {type:String, required: true},
            quantity: {type:String, required: true},
            extras: {type: String },
        }]
    }
}, 
{ timestamps: true }
);


export default mongoose.models.Order || mongoose.model("Order", OrderSchema);