import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./constant";

const chatSlice = createSlice({
    name: 'chat',
    initialState:{
       messages: [],
    },
    reducers: {
     addMessage: (state, action) =>{
        state.messages.splice(LIVE_CHAT_COUNT, 1)  //will remove the last message every time a new message is added
        state.messages.unshift(action.payload) // will push the latest message from down to up.
     },   
    },
})

export const {addMessage} = chatSlice.actions;
export default chatSlice.reducer;