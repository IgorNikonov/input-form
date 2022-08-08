import { createContext, useState } from "react";
import Modal from "../components/Modal";

const PopupContext = createContext();

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
