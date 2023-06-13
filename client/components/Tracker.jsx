import React, { useState, useEffect } from "react";
import Table from "./Table";
import Nav from "./Nav";
import MonthNav from "./MonthNav";
import NewHabit from "./NewHabit";

const Tracker = () => {
	const [habits, setHabits] = useState([]);
	const [currMonth, setCurrMonth] = useState(new Date().getMonth());
	const [currYear, setCurrYear] = useState(new Date().getFullYear());
	const [currMonthCheckmarks, setcurrMonthCheckmarks] = useState(null);
	const daysInCurrMonth = new Date(currYear, currMonth + 1, 0).getDate();

	useEffect(() => {
		fetch("/api/habits")
			.then((res) => res.json())
			.then((habits) => {
				setHabits(habits);
			});
	}, []);

	useEffect(() => {
		fetch(`/api/checkmarks/${currMonth}/${currYear}`)
			.then((res) => res.json())
			.then((checkmarks) => {
				setcurrMonthCheckmarks(checkmarks);
			});
	}, [currMonth]);

	console.log(currMonthCheckmarks);
	// function updateCheckmarksRow(row){
	// 	fetch(`api/checkmarks/${row}, {
	// 		method: "POST",
	// 		headers: {Content-Type": "application/json"}
	// 	}`)
	// }

	function updatehabits(habit) {
		console.log(habit);
		setHabits((prevhabits) => {
			return [...prevhabits, habit];
		});
	}

	return (
		<div>
			<MonthNav
				currMonth={currMonth}
				currYear={currYear}
				setCurrMonth={setCurrMonth}
				setCurrYear={setCurrYear}
			/>
			{habits && currMonthCheckmarks && (
				<Table
					habits={habits}
					daysInCurrMonth={daysInCurrMonth}
					currMonthCheckmarks={currMonthCheckmarks}
				/>
			)}
			<NewHabit updateGoals={updatehabits} />
		</div>
	);
};
export default Tracker;
