import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import Row from "./Row";

const Table: React.FC = () => {
	const data = useSelector((state: RootState) => state.table);
	const [portalMode, setPortalMode] = useState(false);

	const toggleMode = () => {
		setPortalMode((prev) => !prev);
	};

	return (
		<div>
			<span>Popup mode: {portalMode ? "portal" : "context"}</span>
			<button
				onClick={toggleMode}
				className='px-5 py-2 mt-3 border border-orange-500 rounded-md'
			>
				change popup mode to {portalMode ? "context" : "portal"}
			</button>
			{data.map((item, idx) => (
				<Row
					value1={item.value1}
					value2={item.value2}
					idx={idx + 1}
					key={idx}
					portalMode={portalMode}
				/>
			))}
		</div>
	);
};

export default Table;
