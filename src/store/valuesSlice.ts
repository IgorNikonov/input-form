import { ActionCreatorWithPayload, createSlice } from "@reduxjs/toolkit";

interface IValuesState {
	values: { value1: string; value2: string };
	fetchValues: boolean;
}

const initialState: IValuesState = {
	values: {
		value1: "",
		value2: "",
	},
	fetchValues: false,
};

export const valuesSlice = createSlice({
	name: "values",
	initialState,
	reducers: {
		setValue1(state, action) {
			state.values.value1 = action.payload;
		},
		setValue2(state, action) {
			state.values.value2 = action.payload;
		},
		setFetchValues(state, action) {
			state.fetchValues = action.payload;
		},
	},
});

export const { setValue1, setValue2, setFetchValues } = valuesSlice.actions;
export default valuesSlice.reducer;
