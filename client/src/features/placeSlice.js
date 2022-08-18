import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPlaces = createAsyncThunk('place/fetch', async (_, thunkAPI) => {
    try {
        const res = await fetch('http://localhost:3030/place');
        const data = await res.json();
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.res.data.error)
    }
})

const placeSlice = createSlice({
    name: 'place',
    initialState: {
        loading: false,
        error: null,
        places: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
      .addCase(fetchPlaces.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPlaces.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(fetchPlaces.fulfilled, (state, action) => {
        state.places = action.payload;
        state.loading = false;
        state.error = null;
      })
     }
})

export default placeSlice.reducer