import { createSlice } from "@reduxjs/toolkit";

const requests= createSlice({
    name:'requests',
    initialState:null,
    reducers:{
        addRequests:(state,action)=>{
           return action.payload
        },
         removeRequest:(state,action)=> {
            const newFeed=state.filter(user=>user._id!==action.payload)
            return newFeed
        }
    }
})


export const {addRequests,removeRequest}=requests.actions
export default requests.reducer