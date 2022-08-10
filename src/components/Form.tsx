import React, { useEffect, createRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setValue1, setValue2, setFetchValues } from "../store/valuesSlice";
import { addToTableArray } from "../store/tableSlice";
import type { RootState } from "../store";

const Form = () => {
	const dispatch = useDispatch();

	const { value1, value2 } = useSelector(
		(state: RootState) => state.values.values
	);
	const fetchValues = useSelector(
		(state: RootState) => state.values.fetchValues
	);

	const inputEl1 = createRef<HTMLInputElement>();
	const inputEl2 = createRef<HTMLInputElement>();

	// event handlers
	const setInitialValue1 = (value: string) => {
		dispatch(setValue1(value));
	};

	const setInitialValue2 = (value: string) => {
		dispatch(setValue2(value));
	};

	const addToTable = () => {
		const tablePayload = { value1, value2 };
		dispatch(addToTableArray(tablePayload));
		inputEl1.current.value = "";
		inputEl2.current.value = "";
		dispatch(setFetchValues(false));
	};

	useEffect(() => {
		if (fetchValues) {
			inputEl1.current.value = value1;
			inputEl2.current.value = value2;
		}
	}, [value1, value2, fetchValues]);

	return (
		<div>
			<div className='mt-5'>
				<div className='flex gap-2 justify-center'>
					<input
						ref={inputEl1}
						type='text'
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setInitialValue1(e.target.value)
						}
						className='border-2 border-yellow-700 outline-none focus:shadow-lg focus:shadow-slate-200'
					/>
					<input
						ref={inputEl2}
						type='text'
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setInitialValue2(e.target.value)
						}
						className='border-2 border-yellow-700 outline-none focus:shadow-lg focus:shadow-slate-200'
					/>
				</div>
				<button
					onClick={addToTable}
					className='px-5 py-2 mt-3 border border-orange-500 rounded-md'
				>
					send
				</button>
			</div>
		</div>
	);
};

export default Form;
