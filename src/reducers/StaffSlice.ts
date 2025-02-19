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
export const updateStaff = createAsyncThunk(
    'staff/updateStaff',
    async (staffData: Staff) => {
        console.log('updateStaff with data:', staffData);
        try {
            const response = await api.put(`staff/${staffData.id}`, staffData);
            return response.data;
        } catch (error) {
            return console.log('error :', error)
        }
    }
)

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

            //update
            .addCase(updateStaff.pending, () => {
                console.log('✅ updateStaff pending'); // 1️⃣ Log before API call
            })
            .addCase(updateStaff.fulfilled, (state, action: PayloadAction<Staff>) => {
                console.log('✅ updateStaff success:', action.payload); // 2️⃣ Log API response

                const index = state.findIndex((staff) => staff.id === action.payload.id);
                if (index !== -1) {
                    state[index] = action.payload;
                }
            })
            .addCase(updateStaff.rejected, (_state, action) => {
                console.log('❌ updateStaff failed:', action.payload as string); // 3️⃣ Log error if failed
            });
    }
})

export default staffSlice.reducer;