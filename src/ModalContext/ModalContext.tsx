import { createContext, Dispatch, SetStateAction, useState } from "react";

export interface PopUpContextI {
	setModal?: Dispatch<SetStateAction<JSX.Element | null>>;
}

const ModalContext = createContext<PopUpContextI>({});

interface ContextInterface {
	children: JSX.Element;
}

export const ModalProvider: React.FC<ContextInterface> = ({ children }) => {
	const [modal, setModal] = useState<JSX.Element | null>(null);

	console.log("context");

	return (
		<ModalContext.Provider value={{ setModal }}>
			{modal}
			{children}
		</ModalContext.Provider>
	);
};

export default ModalContext;
