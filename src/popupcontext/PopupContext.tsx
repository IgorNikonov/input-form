import React, { createContext, SetStateAction, useState } from "react";
import Modal from "../components/Modal";

interface IPopupContextValues {
	isModalOpen: boolean;
	setIsModalOpen: SetStateAction<boolean>;
}

const PopupContext = createContext<IPopupContextValues | {}>({});

export const PopupProvider = ({ children }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<PopupContext.Provider value={{ isModalOpen, setIsModalOpen }}>
			{isModalOpen && <Modal />}
			{children}
		</PopupContext.Provider>
	);
};

export default PopupContext;
