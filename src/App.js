import React from "react";
import Form from "./components/Form";
import Modal from "./components/Modal";
import Table from "./components/Table";
import { useSelector } from "react-redux";

function App() {
	const { isOpen } = useSelector((state) => state.modalData);

	return (
		<div className='text-center'>
			<Form />
			<Table />
			{isOpen && <Modal />}
		</div>
	);
}

export default App;
