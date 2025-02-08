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
            return console.log('error :',error)
        }
    }
);
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
            .addCase(saveField.rejected, (state,action) => {
                state.status = 'failed';
                state.error = action.payload as string;
            });
    },
});

export const { addField } = fieldSlice.actions;
export default fieldSlice.reducer;