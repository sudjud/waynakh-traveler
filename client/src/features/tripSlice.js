import { createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export const fetchTrips = createAsyncThunk('trip/fetchTrips', async (_, thunkAPI) => {
  try {
    const res = await fetch('http://localhost:3030/trip');
    const data = await res.json()
    return data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
});



export const tripSlice = createSlice({
  name: 'trip',
  initialState: {
    loading: false,
    error: null,
    trips: []
  },
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrips.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTrips.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchTrips.fulfilled, (state, action) => {
        state.trips = action.payload;
        state.loading = false;
        state.error = null;
      })
  }
})

export default tripSlice.reducer
