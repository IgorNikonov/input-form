import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value1: null,
	value2: null,
};

export const valuesSlice = createSlice({
	name: "values",
	initialState,
	reducers: {
		setValue1(state, action) {
			state.value1 = action.payload;
		},
		setValue2(state, action) {
			state.value2 = action.payload;
		},
	},
});

export const { setValue1, setValue2 } = valuesSlice.actions;
export default valuesSlice.reducer;
