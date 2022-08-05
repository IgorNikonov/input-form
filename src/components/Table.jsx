import React from "react";
import { useSelector } from "react-redux";
import Row from "./Row";

const Table = () => {
	const data = useSelector((state) => state.table);
	return (
		<div>
			{data.map((item, idx) => (
				<Row value1={item.value1} value2={item.value2} idx={idx + 1} />
			))}
		</div>
	);
};

export default Table;
