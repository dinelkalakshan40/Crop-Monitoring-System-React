import {configureStore} from "@reduxjs/toolkit";
import fieldSlice from "../reducers/FieldSlice.ts";
import staffSlice from "../reducers/StaffSlice.ts";


export const store= configureStore({
    reducer:{
        field:fieldSlice,
        staff:staffSlice
    }
})
export type RootState =ReturnType<typeof store.getState>;
export type AppDispatch =typeof store.dispatch;

export default store;