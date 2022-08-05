import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const tableSlice = createSlice({
	name: "table",
	initialState,
	reducers: {
		addToTableArray(state, action) {
			state.push(action.payload);
		},
	},
});

export const { addToTableArray } = tableSlice.actions;
export default tableSlice.reducer;
