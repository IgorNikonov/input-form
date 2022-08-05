import { configureStore } from "@reduxjs/toolkit";
import tableSlice from "./tableSlice";
import valuesSlice from "./valuesSlice";
import modalDataSlice from "./modalDataSlice";

export const store = configureStore({
	reducer: {
		values: valuesSlice,
		table: tableSlice,
		modalData: modalDataSlice,
	},
});
