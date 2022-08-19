import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchCategories = createAsyncThunk('fetch/Category', async (_, thunkAPI) => {
  try {
    const res = await fetch('http://localhost:3030/category');
    const data = await res.json();
    return data
  } catch (error) {

  }
})

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    loading: false,
    error: null,
    category: []
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.places = action.payload;
        state.loading = false;
        state.error = null;
      })
  }
})

export default categorySlice.reducer