import React, {
	createContext,
	Dispatch,
	SetStateAction,
	useState,
} from "react";
import Modal from "../components/Modal";

interface IPopupContextValues {
	isModalOpen?: boolean;
	setIsModalOpen?: Dispatch<SetStateAction<boolean>>;
}

const PopupContext = createContext<IPopupContextValues>({});

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
