import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import Staff from "../models/Staff.ts";
import api from "../api/ApiService.ts";

export const initialState: Staff[] = [];


export const saveStaff = createAsyncThunk(
    'staff/saveStaff',
    async (staffData: Staff) => {
        console.log(" saveField with data success:", staffData);
        try {
            const response = await api.post('staff/saveStaff', staffData);
            console.log("Response received:", response.data);
            return response.data;
        } catch (error) {
            return console.log('error :', error)
        }
    }
);

const staffSlice = createSlice({
    name: 'staff',
    initialState,
    reducers: {
        addStaff(state, action: PayloadAction<Staff>) {
            state.push(action.payload)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(saveStaff.fulfilled, (state, action) => {
                state.push(action.payload);
            })
            .addCase(saveStaff.rejected, (_, action) => {
                console.error("Failed to save staff:", action.payload);
            })
            .addCase(saveStaff.pending, () => {
                console.log("Saving staff...");
            })
    }
})

export default staffSlice.reducer;