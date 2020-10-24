import { createSlice } from '@reduxjs/toolkit';

export const counterReceipeSlice = createSlice({
  name: 'Receipe',
  initialState: {
    receipe: null,
    receipeDetails : null,
  },
  reducers: {
    addReceipe: (state,action) => {
      state.receipe = action.payload;
    },
    addReceipeDetail : (state,action)=>{
      state.receipeDetails = action.payload
    }
  },
});

export const { addReceipe,addReceipeDetail } = counterReceipeSlice.actions;
export const selectReceipe = state => state.receipe.receipe;
export const selectReceipeDetails = state => state.receipe.receipeDetails;
export default counterReceipeSlice.reducer;
