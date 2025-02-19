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

export const getAllStaff = createAsyncThunk(
    'staff/getAll',
    async () => {
        console.log('✅ Fetching all staff');

        try {
            const response = await api.get('staff/allStaff');
            const staffList = response.data?.data ?? response.data;

            if (!Array.isArray(staffList)) {
                console.error("❌ API error: Expected an array but got", staffList);
                throw new Error("Invalid API response: Expected an array.");
            }

            return staffList;
        } catch {
            throw new Error("Failed to fetch fields");
        }
    }
);
export const deleteStaff = createAsyncThunk(
    "staff/deleteStaff",
    async (staffId: string) => {
        console.log("🗑️ Deleting staff with ID:", staffId);
        try {
            await api.delete(`staff/${staffId}`);
            console.log("✅ Staff deleted successfully:", staffId);
            return staffId; // Return the ID to remove it from the state
        } catch (error) {
            console.error("❌ deleteStaff error:", error);
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

            //update
            .addCase(updateStaff.pending, () => {
                console.log('✅ updateStaff pending');
            })
            .addCase(updateStaff.fulfilled, (state, action: PayloadAction<Staff>) => {
                console.log('✅ updateStaff success:', action.payload);

                const index = state.findIndex((staff) => staff.id === action.payload.id);
                if (index !== -1) {
                    state[index] = action.payload;
                }
            })
            .addCase(updateStaff.rejected, (_state, action) => {
                console.log('❌ updateStaff failed:', action.payload as string);
            })
            //getAll
            .addCase(getAllStaff.pending, () => {
                console.log('✅ getAllStaff pending');
            })
            .addCase(getAllStaff.fulfilled, (state, action) => {
                console.log("✅ getAllStaff success:", action.payload);

                if (!Array.isArray(action.payload)) {
                    console.error("❌ getAllStaff error: Payload is not an array", action.payload);
                    return state;
                }

                return action.payload;
            })

            .addCase(getAllStaff.rejected, (_state, action) => {
                console.log('❌ getAllStaff failed:', action.payload as string);
            })
            //delete Staff
            .addCase(deleteStaff.pending, () => {
                console.log("⏳ deleteStaff pending...");
            })
            .addCase(deleteStaff.fulfilled, (state, action: PayloadAction<string|undefined>) => {
                console.log("✅ deleteStaff success:", action.payload);
                return state.filter((staff) => staff.id !== action.payload); // Remove deleted staff
            })
            .addCase(deleteStaff.rejected, (_state, action) => {
                console.error("❌ deleteStaff failed:", action.payload);
            });


    }
})

export default staffSlice.reducer;