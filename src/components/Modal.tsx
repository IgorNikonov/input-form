import React, { useContext } from "react";
import PopupContext from "../popupcontext/PopupContext";
import { useSelector } from "react-redux";
import ReactDom from "react-dom";
import { RootState } from "../store";

const Modal = () => {
	const { index, value1, value2 } = useSelector(
		(state: RootState) => state.modalData.data
	);

	const { setIsModalOpen } = useContext(PopupContext);

	const closeModalHandler = () => {
		setIsModalOpen && setIsModalOpen(false);
	};

	return ReactDom.createPortal(
		<div
			className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-[rgba(0,0,0,0.7)]'
			onClick={closeModalHandler}
		>
			<div
				className='relative w-[45%] h-[45%] bg-orange-600 rounded-md p-20'
				onClick={(e) => e.stopPropagation()}
			>
				<p>index: {index}</p>
				<p>value1: {value1}</p>
				<p>value2: {value2}</p>
				<span
					className='absolute top-2 right-3 cursor-pointer py-2 px-3 rounded-sm hover:bg-orange-300'
					onClick={closeModalHandler}
				>
					x
				</span>
			</div>
		</div>,
		document.getElementById("portal")
	);
};

export default Modal;
