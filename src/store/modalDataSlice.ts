import { createSlice } from "@reduxjs/toolkit";

interface IModalState {
	data: {
		index?: string;
		value1?: string;
		value2?: string;
	};
}

const initialState: IModalState = {
	data: {},
};

const modalDataSlice = createSlice({
	name: "modalData",
	initialState,
	reducers: {
		setModalData(state, action) {
			state.data = action.payload;
		},
	},
});

export const { setModalData } = modalDataSlice.actions;
export default modalDataSlice.reducer;
