import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import PopupContext from "../popupcontext/PopupContext";
import Modal from './Modal';
import { setValue1, setValue2, setFetchValues } from "../store/valuesSlice";

const Row = ({ value1, value2, idx }) => {
	const dispatch = useDispatch();
	const {setModal} = useContext(PopupContext);

	const { setIsModalOpen } = useContext(PopupContext);

	const setModalDataHandler = (e) => {
		e.stopPropagation();
		setModal(<Modal index={idx} value1={value1} value2={value2} />)
	};

	const setFormValuesHandler = () => {
		dispatch(setValue1(value1));
		dispatch(setValue2(value2));
		dispatch(setFetchValues(true));
	};

	return (
		<div
			className='flex justify-center mt-20 cursor-pointer'
			onClick={setFormValuesHandler}
		>
			<div className='p-5 border border-black border-r-0 flex justify-center items-center flex-col'>
				<p>#:</p>
				{idx}
			</div>
			<div className='p-5 border border-black border-r-0 flex justify-center items-center flex-col'>
				<p>value 1:</p>
				{value1}
			</div>
			<div className='p-5 border border-black border-r-0 flex justify-center items-center flex-col'>
				<p>value 2:</p>
				{value2}
			</div>
			<div className='p-5 border border-black'>
				<button
					onClick={(e) => setModalDataHandler(e)}
					className='px-3 py-2 border border-orange-500 rounded-md'
				>
					open
				</button>
			</div>
		</div>
	);
};

export default Row;