import React, { useState } from "react";

const Thead = () => {
	const [currMonth, setCurrMonth] = useState(new Date().getMonth());
	const [currYear, setCurrYear] = useState(new Date().getFullYear());
	const daysInMonth = new Date(currYear, currMonth + 1, 0).getDate();

	console.log(currMonth, currYear, daysInMonth);

	for (let i = 1; i <= daysInMonth; i++) {}

	return (
		<thead className="ant-table-thead">
			<tr>
				<th
					rowSpan={2}
					className="table-heading ant-table-cell highlight-th  ant-table-cell-fix-left ant-table-cell-fix-left-last"
				>
					Habits
				</th>
				<th className="ant-table-cell  th-day"></th>
				<th className="ant-table-cell  th-day"></th>
				<th className="ant-table-cell  th-day"></th>
				<th className="ant-table-cell  th-day"></th>
				<th className="ant-table-cell  th-day"></th>
				<th className="ant-table-cell  th-day"></th>
				<th className="ant-table-cell  th-day"></th>
				<th className="ant-table-cell  th-day"></th>
				<th className="ant-table-cell  th-day"></th>
				<th className="ant-table-cell  th-day"></th>
				<th className="ant-table-cell  th-day"></th>
				<th className="ant-table-cell  th-day"></th>
				<th className="ant-table-cell  th-day"></th>
				<th className="ant-table-cell  th-day"></th>
				<th className="ant-table-cell  th-day"></th>
				<th className="ant-table-cell  th-day"></th>
				<th className="ant-table-cell  th-day"></th>
				<th className="ant-table-cell  th-day"></th>
				<th className="ant-table-cell  th-day"></th>
				<th className="ant-table-cell  th-day"></th>
				<th className="ant-table-cell  th-day"></th>
				<th className="ant-table-cell  th-day"></th>
				<th className="ant-table-cell  th-day"></th>
				<th className="ant-table-cell  th-day"></th>
				<th className="ant-table-cell  th-day"></th>
				<th className="ant-table-cell  th-day"></th>
				<th className="ant-table-cell  th-day"></th>
				<th className="ant-table-cell  th-day"></th>
				<th className="ant-table-cell  th-day"></th>
				<th className="ant-table-cell  th-day"></th>
				<th rowSpan={2} className="ant-table-cell highlight-th goal ">
					Goal
				</th>
				<th
					rowSpan={2}
					className="ant-table-cell achievement-col highlight-th "
				>
					Achieved
				</th>
			</tr>
			<tr>
				<th className="ant-table-cell">1</th>
				<th className="ant-table-cell">2</th>
				<th className="ant-table-cell">3</th>
				<th className="ant-table-cell">4</th>
				<th className="ant-table-cell">5</th>
				<th className="ant-table-cell">6</th>
				<th className="ant-table-cell">7</th>
				<th className="ant-table-cell">8</th>
				<th className="ant-table-cell">9</th>
				<th className="ant-table-cell">10</th>
				<th className="ant-table-cell">11</th>
				<th className="ant-table-cell">12</th>
				<th className="ant-table-cell">13</th>
				<th className="ant-table-cell">14</th>
				<th className="ant-table-cell">15</th>
				<th className="ant-table-cell">16</th>
				<th className="ant-table-cell">17</th>
				<th className="ant-table-cell">18</th>
				<th className="ant-table-cell">19</th>
				<th className="ant-table-cell">20</th>
				<th className="ant-table-cell">21</th>
				<th className="ant-table-cell">22</th>
				<th className="ant-table-cell">23</th>
				<th className="ant-table-cell">24</th>
				<th className="ant-table-cell">25</th>
				<th className="ant-table-cell">26</th>
				<th className="ant-table-cell">27</th>
				<th className="ant-table-cell">28</th>
				<th className="ant-table-cell">29</th>
				<th className="ant-table-cell">30</th>
			</tr>
		</thead>
	);
};

export default Thead;
