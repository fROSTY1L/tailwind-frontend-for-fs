import { createSlice } from "@reduxjs/toolkit";
import { DishTypes } from "../interfaces/interfaces";


const initialState: DishTypes= {
    obj: {
        dishTypes: []
    }
}

const dishTypesSlice = createSlice({
    name: 'dishTypes',
    initialState,
    reducers: {
        setDishTypes: (state, action) => {
            state.obj = action.payload
        },
    },
})

export const { setDishTypes } = dishTypesSlice.actions
export default dishTypesSlice.reducer