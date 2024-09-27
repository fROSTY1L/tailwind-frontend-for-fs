import { configureStore } from "@reduxjs/toolkit";
import dishTypeReducer from "./dishTypeReducer";
import dishesReducer from "./dishesReducer";

export const store = configureStore({
    reducer: {
        dishTypes: dishTypeReducer,
        dishes: dishesReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;