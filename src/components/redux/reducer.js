import {createSlice} from "@reduxjs/toolkit";

const initialState = "";
// const getState = () => {
//     return state;
// }

const updateSearchStatus = createSlice({
    name:"search",
    initialState,
    reducers:{
        updateSearch: (state,action)=>{
            console.log(state)
            state = action.payload;
            return state;
        }
    }
})

export const {
    updateSearch,
}=updateSearchStatus.actions;
export const reducer = updateSearchStatus.reducer;