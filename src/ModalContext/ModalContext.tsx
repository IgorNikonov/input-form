import { createContext, useState } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
	const [modal, setModal] = useState(null);

	return (
		<ModalContext.Provider value={setModal}>
			{modal}
			{children}
		</ModalContext.Provider>
	);
};

export default ModalContext;
