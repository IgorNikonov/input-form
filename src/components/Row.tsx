import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setValue1, setValue2, setFetchValues } from "../store/valuesSlice";
import Modal from "./Modal";

interface IRowProps {
	value1: string;
	value2: string;
	idx: number;
}

const Row: React.FC<IRowProps> = ({ value1, value2, idx }) => {
	const dispatch = useDispatch();
	// const [isModalOpen, setIsModalOpen] = useState(false);
	const [portalModal, setPortalModal] = useState(false);
	const [contextModal, setContextModal] = useState(false);

	const openModalHandler = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		e.stopPropagation();
		// setIsModalOpen(true);
	};

	const closeModalHandler = () => {
		// setIsModalOpen(false);
	};

	const setFormValuesHandler = () => {
		dispatch(setValue1(value1));
		dispatch(setValue2(value2));
		dispatch(setFetchValues(true));
	};

	return (
		<>
			{isModalOpen && (
				<Modal
					index={idx}
					value1={value1}
					value2={value2}
					close={closeModalHandler}
				/>
			)}
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
						onClick={(e) => openModalHandler(e)}
						className='px-3 py-2 border border-orange-500 rounded-md'
					>
						open with portal
					</button>
					<button
						onClick={(e) => openModalHandler(e)}
						className='px-3 py-2 border border-orange-500 rounded-md'
					>
						open with context
					</button>
				</div>
			</div>
		</>
	);
};

export default Row;
