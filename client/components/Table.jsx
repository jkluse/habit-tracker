import React from "react";

const Table = (props) => {
	const { habits, daysInCurrMonth, currMonthCheckmarks } = props;
	const colGroupElements = [];
	const headerElements = [];

	console.log(currMonthCheckmarks);

	//colGroup loop
	for (let i = 1; i <= daysInCurrMonth; i++) {
		colGroupElements.push(<col key={i} className="col-sm" />);
	}

	// headerElements loop
	for (let i = 1; i <= daysInCurrMonth; i++) {
		headerElements.push(<th key={i}>{i}</th>);
	}

	//tdElements loop
	const cells = habits.map((habit, i) => {
		return (
			<tr key={i}>
				<td>{habit.name}</td>
				{createCells(habit, i)}
				<td>{habit.goal}</td>
				<td>{habit.goal}</td>
			</tr>
		);
	});

	return (
		<table>
			<colgroup>
				<col key="one" className="col-lg" />
				{colGroupElements}
				<col key="two" className="col-md" />
				<col key="three" className="col-md" />
			</colgroup>
			<thead>
				<tr>
					<th>Habits</th>
					{headerElements}
					<th>Goal</th>
					<th>Achieved</th>
				</tr>
			</thead>
			<tbody>{cells}</tbody>
		</table>
	);

	function createCells(habit, index) {
		const cellArr = [];
		for (let i = 1; i <= daysInCurrMonth; i++) {
			const element = currMonthCheckmarks[index]?.days.includes(i) ? (
				<td
					key={i}
					onClick={toggleCheck}
					className="col-sm"
					data-day={i}
					data-row={index}
					data-row-color={
						index === 0 || index % 3 === 0
							? "yellow"
							: index % 2 === 0
							? "blue"
							: "green"
					}
				>
					<svg
						className="icon"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M9.00002 16.2001L4.80002 12.0001L3.40002 13.4001L9.00002 19.0001L21 7.0001L19.6 5.6001L9.00002 16.2001Z"
							fill="#4F4F4F"
						></path>
					</svg>
				</td>
			) : (
				<td
					key={i}
					onClick={toggleCheck}
					className="col-sm"
					data-day={i}
					data-row={index}
				>
					&nbsp;
				</td>
			);

			cellArr.push(element);
		}
		return cellArr;
	}

	function toggleCheck(e) {
		if (e.target.classList.contains("checked")) {
			//remove check locall and on DB
			e.target.classList.toggle("checked");
		}

		let colors = ["#FDF2D0", "#C0CCDA", "#BFDFCE"];
		let row = e.target.getAttribute("data-row");
		e.target.classList.add("checked");
		e.target.style.background =
			row === 0 || row % 3 === 0
				? colors[0]
				: row % 2 === 0
				? colors[1]
				: colors[2];

		e.target.innerHTML = `<svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.00002 16.2001L4.80002 12.0001L3.40002 13.4001L9.00002 19.0001L21 7.0001L19.6 5.6001L9.00002 16.2001Z" fill="#4F4F4F"></path></svg>`;
	}
};

export default Table;
