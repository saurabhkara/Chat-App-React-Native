import { createSlice } from "@reduxjs/toolkit";

const authSlice=createSlice({
    name:'authSlice',
    initialState:{
        userData:{}
    },
    reducers:{
        saveUserData:(state, action)=>{
            state.userData=action.payload
        }
    }
})


export const {saveUserData} = authSlice.actions;
export default authSlice.reducer;