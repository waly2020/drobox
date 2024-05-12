import {createSlice} from "@reduxjs/toolkit";
// import { logDatas } from "../../../utils/functions";

export const userSlice = createSlice({
    name : "user",
    initialState : JSON.parse(window.localStorage.getItem("user")),
    reducers : {
        login : (state,action)=>{
            return action.payload;
        },
        register : (state,action) =>{
            state = action.payload;
            return state;
        },
        logout : () =>{
            return null;
        }
    }
})

export const {login,logout,register} = userSlice.actions;