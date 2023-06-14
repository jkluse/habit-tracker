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
					updateCheckmarks={updateCheckmarks}
				/>
			)}
			<NewHabit updateGoals={updatehabits} />
		</div>
	);

	function updateCheckmarks(body, markIndex) {
		const { days, habit_id } = body;

		if (markIndex === null) {
			// crete POST checkmarks
			fetch(`api/checkmarks/${currMonth}/${currYear}`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					days: days,
					habit_id: habit_id,
				}),
			})
				.then((res) => res.json())
				.then((data) => {
					fetch(`/api/checkmarks/${currMonth}/${currYear}`)
						.then((res) => res.json())
						.then((checkmarks) => {
							setcurrMonthCheckmarks(checkmarks);
						});
				})
				.catch((err) => console.log(err));
		} else {
			fetch(`api/checkmarks/${currMonth}/${currYear}`, {
				method: "PATCH",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					days: days,
					habit_id: habit_id,
				}),
			})
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
					fetch(`/api/checkmarks/${currMonth}/${currYear}`)
						.then((res) => res.json())
						.then((checkmarks) => {
							setcurrMonthCheckmarks(checkmarks);
						});
				})
				.catch((err) => console.log(err));
		}
	}

	function updatehabits(habit) {
		fetch(`api/habits/`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name: habit.name,
				goal: habit.days,
			}),
		})
			.then((response) => response.json())
			.then((data) => {
				setHabits([...habits, data]);
			})
			.catch((err) => console.log(err));
	}
};
export default Tracker;
