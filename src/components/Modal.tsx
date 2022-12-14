import React from "react";

interface IModalProps {
	index: number;
	value1: string;
	value2: string;
	close: () => void;
}

const Modal: React.FC<IModalProps> = ({ index, value1, value2, close }) => {
	return (
		<div
			className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-[rgba(0,0,0,0.7)]'
			onClick={close}
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
					onClick={close}
				>
					x
				</span>
			</div>
		</div>
	);
};

export default Modal;
