import { configureStore } from "@reduxjs/toolkit";
import prodactsslice from "./appSlice"


export const store = configureStore({
    reducer:{
        products: prodactsslice,
        
    }
})