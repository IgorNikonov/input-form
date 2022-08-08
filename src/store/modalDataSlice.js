import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	data: {},
	// isOpen: false,
};

const modalDataSlice = createSlice({
	name: "modalData",
	initialState,
	reducers: {
		setModalData(state, action) {
			state.data = action.payload;
		},
		// toggleIsOpen(state) {
		// 	state.isOpen = !state.isOpen;
		// },
	},
});

export const { setModalData } = modalDataSlice.actions;
export default modalDataSlice.reducer;
