import React, { useState, useContext } from "react";
import { useDispatch } from "react-redux";
import { setValue1, setValue2, setFetchValues } from "../store/valuesSlice";
import Modal from "./Modal";
import ModalRenderer from "./ModalRenderer";
import ModalContext from "../ModalContext/ModalContext";

interface IRowProps {
	value1: string;
	value2: string;
	idx: number;
	portalMode: boolean;
}

const Row: React.FC<IRowProps> = ({ value1, value2, idx, portalMode }) => {
	const dispatch = useDispatch();

	const { setModal } = useContext(ModalContext);

	const [isOpenModal, setIsOpenModal] = useState(false);

	const openModal = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.stopPropagation();
		portalMode
			? setIsOpenModal(true)
			: setModal &&
			  setModal(
					<Modal
						index={idx}
						value1={value1}
						value2={value2}
						close={closeContextModal}
					/>
			  );
	};

	const closeContextModal = () => {
		setModal && setModal(null);
	};

	const closePortalModal = () => {
		setIsOpenModal(false);
	};

	const setFormValuesHandler = () => {
		dispatch(setValue1(value1));
		dispatch(setValue2(value2));
		dispatch(setFetchValues(true));
	};

	return (
		<>
			{isOpenModal && (
				<ModalRenderer
					index={idx}
					value1={value1}
					value2={value2}
					close={closePortalModal}
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
						onClick={(e) => openModal(e)}
						className='px-3 py-2 border border-orange-500 rounded-md'
					>
						open
					</button>
				</div>
			</div>
		</>
	);
};

export default Row;
