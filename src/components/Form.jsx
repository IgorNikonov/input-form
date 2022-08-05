import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setValue1, setValue2 } from "../store/valuesSlice";
import { addToTableArray } from "../store/tableSlice";

const Form = () => {
	const dispatch = useDispatch();
	const { value1, value2 } = useSelector((state) => state.values);
	const inputEl1 = useRef(null);
	const inputEl2 = useRef(null);

	// event handlers
	const setInitialValue1 = (value) => {
		dispatch(setValue1(value));
	};

	const setInitialValue2 = (value) => {
		dispatch(setValue2(value));
	};

	const addToTable = () => {
		const tablePayload = { value1, value2 };
		dispatch(addToTableArray(tablePayload));
		inputEl1.current.value = "";
		inputEl2.current.value = "";
	};

	useEffect(() => {
		inputEl1.current.value = value1;
		inputEl2.current.value = value2;
	}, [value1, value2]);

	return (
		<div>
			<div className='mt-5'>
				<div className='flex gap-2 justify-center'>
					<input
						ref={inputEl1}
						type='text'
						onChange={(e) => setInitialValue1(e.target.value)}
						className='border-2 border-yellow-700 outline-none'
					/>
					<input
						ref={inputEl2}
						type='text'
						onChange={(e) => setInitialValue2(e.target.value)}
						className='border-2 border-yellow-700 outline-none'
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
