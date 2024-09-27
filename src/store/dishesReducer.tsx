import { createSlice } from "@reduxjs/toolkit";
import { Dishes } from "../interfaces/interfaces";


const initialState: Dishes = {
    obj: {
        dishes: []
    }
}

const dishTypesSlice = createSlice({
    name: 'dishes',
    initialState,
    reducers: {
        setDishes: (state, action) => {
            state.obj = action.payload
        },
    },
})

export const { setDishes } = dishTypesSlice.actions
export default dishTypesSlice.reducer