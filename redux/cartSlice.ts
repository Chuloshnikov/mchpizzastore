import { UserInfo } from './../type.d';
import { StoreProduct } from './../type.d';
import { createSlice } from "@reduxjs/toolkit";

interface CartState{
    productData: StoreProduct[],
    userInfo: null | UserInfo
}

const initialState: CartStore = {
    productData:[],
    userInfo: null,
};


export const cartSlice = createSlice({
    name: "shopper",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = state.productData.find((item:StoreProduct) => item._id === action.payload._id);

            if (item) {
                item.quantity += action.payload.quantity
            } else {
                state.productData.push(action.payload);
            }

            
        },
    },
});

export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;