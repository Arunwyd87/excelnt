import { createSlice } from "@reduxjs/toolkit";

const appSlice=createSlice({
    name:"List",
    initialState:{items:[]},
    reducers:{
        addItem:(state,action)=>{
state.items.push(action.payload);
console.log("log",state);
        },
        clearitem:(state)=>{
            state.items.length=0;
        }
    }
})
export const {addItem,clearitem} = appSlice.actions;
export default appSlice.reducer;