import { createSlice } from '@reduxjs/toolkit';

export const counterReceipeSlice = createSlice({
  name: 'Receipe',
  initialState: {
    receipe: [],
    receipeDetails : [],
    recipeResultSearch : []
  },
  reducers: {
    addReceipe: (state,action) => {
      state.receipe = action.payload;
    },
    addReceipeDetail : (state,action)=>{
      state.receipeDetails = action.payload
    },
    addRecipeResultSearch : (state,action)=>{
      state.recipeResultSearch = action.payload
    }
  },
});

export const { addReceipe,addReceipeDetail,addRecipeResultSearch } = counterReceipeSlice.actions;
export const selectReceipe = state => state.receipe.receipe;
export const selectReceipeDetails = state => state.receipe.receipeDetails;
export const selectRecipeResultSearch = state=> state.receipe.recipeResultSearch;
export default counterReceipeSlice.reducer;
