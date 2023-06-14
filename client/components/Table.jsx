import React from "react";

const Table = (props) => {
	const {
		habits,
		daysInCurrMonth,
		currMonthCheckmarks,
		updateCheckmarks,
		removeCheckmarks,
	} = props;
	const colGroupElements = [];
	const headerElements = [];

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
		let habitIndex;
		const cellArr = [];

		//assign an index for curr habit or leave undefined
		for (let i = 0; i < currMonthCheckmarks.length; i++) {
			if (currMonthCheckmarks[i].habit_id === habit.id) habitIndex = i;
		}

		let achieved = currMonthCheckmarks[habitIndex]?.days.length;

		//For every day, if currMonthCheckmarks[habitIndex].habit_id and habit.id are equal and has checkmark
		for (let i = 1; i <= daysInCurrMonth; i++) {
			// create a empty cell or a filled cell depending on checkmark
			const element =
				habit.id === currMonthCheckmarks[habitIndex]?.habit_id &&
				currMonthCheckmarks[habitIndex]?.days.includes(i) ? (
					<td
						key={i}
						onClick={toggleCheck}
						className="col-sm icon"
						data-marks={habitIndex}
						data-day={i}
						data-row={index}
						data-habit-id={habit.id}
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
							data-day={i}
							data-marks={habitIndex}
							data-habit-id={habit.id}
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								className="icon"
								data-marks={habitIndex}
								data-habit-id={habit.id}
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
						data-marks={habitIndex}
						data-day={i}
						data-habit-id={habit.id}
					>
						&nbsp;
					</td>
				);

			cellArr.push(element);
		}

		cellArr.push(<td key={"goal"}>{habit.goal}</td>);
		cellArr.push(
			achieved >= habit.goal ? (
				<td key={"achieved"} className="green">
					{achieved}
				</td>
			) : achieved ? (
				<td key={"achieved"}>{achieved}</td>
			) : (
				<td key={"achieved"}>0</td>
			)
		);

		return cellArr;
	}

	function toggleCheck(e) {
		let day = Number(e.target.getAttribute("data-day"));
		let habit_id = Number(e.target.getAttribute("data-habit-id"));
		let markIndex = e.target.getAttribute("data-marks")
			? Number(e.target.getAttribute("data-marks"))
			: null;

		//remove mark
		if (e.target.classList.contains("icon")) {
			let updatedDays = currMonthCheckmarks[markIndex].days.filter((date) => {
				return date !== day;
			});

			// removeCheckmarks({ days: day }, markIndex);
			updateCheckmarks({ days: updatedDays, habit_id }, markIndex);
			return;
		}

		// add mark
		updateCheckmarks(
			{
				days: currMonthCheckmarks[markIndex]
					? [...currMonthCheckmarks[markIndex].days, day]
					: [day],
				habit_id: habit_id ? habit_id : [],
			},
			markIndex
		);
	}
};

export default Table;
