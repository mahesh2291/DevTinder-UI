import { createSlice } from "@reduxjs/toolkit";

const requests= createSlice({
    name:'requests',
    initialState:null,
    reducers:{
        addRequests:(state,action)=>{
           return action.payload
        }
    }
})


export const {addRequests}=requests.actions
export default requests.reducer