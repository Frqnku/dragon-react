import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 value: [],
};

export const dragonsSlice = createSlice({
 name: 'dragons',

  initialState,
 reducers: {
   buyDragon: (state, action) => {
		if (!state.value.some(e => e.name === action.payload.name)) {
			state.value.push(action.payload)
		}
   },
 },
});

export const { buyDragon } = dragonsSlice.actions;
export default dragonsSlice.reducer;