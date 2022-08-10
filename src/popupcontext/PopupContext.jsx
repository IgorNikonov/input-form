import { createContext, useState } from "react";

const PopupContext = createContext();

export const PopupProvider = ({ children }) => {
	const [modal, setModal] = useState(null);

	return (
		<PopupContext.Provider value={{ modal, setModal }}>
			{modal}
			{children}
		</PopupContext.Provider>
	);
};

export default PopupContext;
