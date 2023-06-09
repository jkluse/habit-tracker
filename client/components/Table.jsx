import React, { useState } from "react";
import TableContent from "./TableContent";
import Nav from "./Nav";
import MonthNav from "./MonthNav";
import NewHabit from "./NewHabit";

const Table = () => {
	const [habits, setHabits] = useState([]);

	function updatehabits(habit) {
		console.log(habit);
		setHabits((prevhabits) => {
			return [...prevhabits, habit];
		});
	}

	return (
		<div>
			<h1>Track Habits</h1>
			<Nav />
			<MonthNav />
			<TableContent habits={habits} />
			<NewHabit updateGoals={updatehabits} />
		</div>
	);
};
export default Table;
