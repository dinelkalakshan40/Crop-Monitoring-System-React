import {Field} from "../models/Field.ts";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import api from "../api/ApiService.ts";


interface FieldState {
    fields: Field[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: FieldState = {
    fields: [],
    status: 'idle',
    error: null,
};

// save field
export const saveField = createAsyncThunk(
    'field/saveField',
    async (fieldData: Field) => {
        console.log("Dispatching saveField with data:", fieldData);
        try {
            const response = await api.post('field/saveField', fieldData);
            console.log("Response received:", response.data);
            return response.data;
        } catch (error) {
            return console.log('error :', error)
        }
    }
);
//update field
export const updateField = createAsyncThunk(
    'field/updateField',
    async (fieldData: Field) => {
        console.log('updateField with data:', fieldData);
        try {
            const response = await api.put(`field/updateField/${fieldData.code}`, fieldData);
            return response.data;
        } catch (error) {
            return console.log('error :', error)
        }
    }
)
//delete Field
export const deleteField=createAsyncThunk(
    'field/deleteField',
    async (fieldCode: string) => {
        console.log('deleteField with ID:', fieldCode);
        try {
            const response = await api.delete(`field/deleteField/${fieldCode}`);
            console.log('Response received:', response.data);
            return fieldCode; // Return the ID of the deleted field to remove from state
        } catch (error) {
            console.log('Error in deleteField:', error);
            throw new Error('Failed to delete field');
        }
    }
)
const fieldSlice = createSlice({
    name: 'field',
    initialState,
    reducers: {
        addField(state, action: PayloadAction<Field>) {
            state.fields.push(action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(saveField.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(saveField.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.fields.push(action.payload);
            })
            .addCase(saveField.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload as string;
            })
            // Update Field
            .addCase(updateField.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(updateField.fulfilled, (state, action) => {
                state.status = 'succeeded';
                const index = state.fields.findIndex((field) => field.code === action.payload.id);
                if (index !== -1) {
                    state.fields[index] = action.payload;  // Replace the updated field
                }
            })
            .addCase(updateField.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Failed to update field';
            })
            //delete Field
            .addCase(deleteField.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(deleteField.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.fields = state.fields.filter((field) => field.code !== action.payload); // field by ID
            })
            .addCase(deleteField.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Failed to delete field';
            });


    },
});

export const {addField} = fieldSlice.actions;
export default fieldSlice.reducer;