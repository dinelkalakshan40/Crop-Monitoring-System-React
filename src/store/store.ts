import {configureStore} from "@reduxjs/toolkit";
import fieldSlice from "../reducers/FieldSlice.ts";


export const store= configureStore({
    reducer:{
        field:fieldSlice,
    }
})
export type RootState =ReturnType<typeof store.getState>;
export type AppDispatch =typeof store.dispatch;

export default store;