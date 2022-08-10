import { configureStore } from "@reduxjs/toolkit";
import tableSlice from "./tableSlice";
import valuesSlice from "./valuesSlice";

export const store = configureStore({
	reducer: {
		values: valuesSlice,
		table: tableSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
