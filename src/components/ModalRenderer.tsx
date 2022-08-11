import React, { ReactPortal } from "react";
import ReactDom from "react-dom";
import Modal from "./Modal";

interface IModalPortal {
	index: number;
	value1: string;
	value2: string;
	close: () => void;
}

const ModalRenderer: React.FC<IModalPortal> = ({
	index,
	value1,
	value2,
	close,
}) => {
	console.log("portal");

	return ReactDom.createPortal(
		<Modal index={index} value1={value1} value2={value2} close={close} />,
		document.getElementById("portal") as HTMLElement
	);
};

export default ModalRenderer;
