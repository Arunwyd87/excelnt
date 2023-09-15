import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./AppSlice";

const Appstore=configureStore({
reducer:{
    List:appReducer
}
});
export default Appstore;