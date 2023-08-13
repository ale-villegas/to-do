import { configureStore } from "@reduxjs/toolkit";
import sliceTasks from "./sliceTasks";


const persistanceMiddlewareLocalStorage = (store) => (next) => (action) => {
    next(action)

    localStorage.setItem("TO_DO_REDUX", JSON.stringify(store.getState()))
}

export const store = configureStore({
    reducer: {
        tasks: sliceTasks
    },
    middleware:[persistanceMiddlewareLocalStorage]
})