import { createSlice } from "@reduxjs/toolkit";

interface ITableState {
	idx: number;
	value1: string;
	value2: string;
}

const initialState: ITableState[] = [];

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
