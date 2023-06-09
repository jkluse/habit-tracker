import React from "react";
import Thead from "./Thead";
import Tbody from "./Tbody";

const TableContent = (props) => {
	return (
		<table
			style={{
				width: "calc(700px + 50%)",
				minWidth: "100%",
				tableLayout: "fixed",
			}}
		>
			<colgroup>
				<col style={{ width: 5 }} />
				<col style={{ width: 1 }} />
				<col style={{ width: 1 }} />
				<col style={{ width: 1 }} />
				<col style={{ width: 1 }} />
				<col style={{ width: 1 }} />
				<col style={{ width: 1 }} />
				<col style={{ width: 1 }} />
				<col style={{ width: 1 }} />
				<col style={{ width: 1 }} />
				<col style={{ width: 1 }} />
				<col style={{ width: 1 }} />
				<col style={{ width: 1 }} />
				<col style={{ width: 1 }} />
				<col style={{ width: 1 }} />
				<col style={{ width: 1 }} />
				<col style={{ width: 1 }} />
				<col style={{ width: 1 }} />
				<col style={{ width: 1 }} />
				<col style={{ width: 1 }} />
				<col style={{ width: 1 }} />
				<col style={{ width: 1 }} />
				<col style={{ width: 1 }} />
				<col style={{ width: 1 }} />
				<col style={{ width: 1 }} />
				<col style={{ width: 1 }} />
				<col style={{ width: 1 }} />
				<col style={{ width: 1 }} />
				<col style={{ width: 1 }} />
				<col style={{ width: 1 }} />
				<col style={{ width: 1 }} />
				<col style={{ width: 2 }} />
				<col style={{ width: 3 }} />
			</colgroup>
			<Thead />
			<Tbody habits={props.habits} />
		</table>
	);
};

export default TableContent;
