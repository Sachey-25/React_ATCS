import { createSlice } from "@reduxjs/toolkit"; 

const initialState={ name:"", age:0, email: ""};

//let's create a reducer/slicer
export const userSlice=createSlice({
    name:"user",
    initialState: { value : { name:"", age:0, email: ""}},
    //We need to capture the event -- event handling -- reducer
    reducers:{
        login:(state, action) =>{
            state.value=action.payload;
        },
        logout:(state, action) => {
            state.value=initialState;
        }
    }
})

export const {login, logout} = userSlice.actions

export default userSlice.reducer;