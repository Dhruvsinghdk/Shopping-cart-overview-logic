import { configureStore } from "@reduxjs/toolkit";
import ct from './Slice'

const Store = configureStore({
    reducer:{
        cart : ct
    }
})
export default Store;
