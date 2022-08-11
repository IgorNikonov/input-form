import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import Row from "./Row";

const Table: React.FC = () => {
	const data = useSelector((state: RootState) => state.table);
	return (
		<div>
			{data.map((item, idx) => (
				<Row value1={item.value1} value2={item.value2} idx={idx + 1} />
			))}
		</div>
	);
};

export default Table;
