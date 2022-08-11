import React from "react";
import ReactDom from "react-dom";
import Modal from "./Modal";

const ModalRenderer: React.FC = ({
	portalModal,
	contextModal,
	index,
	value1,
	value2,
	close,
}) => {
	if (portalModal) {
		return ReactDom.createPortal(
			<Modal index={index} value1={value1} value2={value2} close={close} />,
			document.getElementById("portal")
		);
	}

	if (contextModal) {
	}
};

export default ModalRenderer;
