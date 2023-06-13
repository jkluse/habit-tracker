import React, { useState } from "react";

const NewHabit = (props) => {
	const { updateGoals } = props;
	const [isFormDisplayed, setIsFormDisplayed] = useState(false);

	function handleClick() {
		setIsFormDisplayed(true);
	}

	function handleSubmit(e) {
		e.preventDefault();
		const habitName = e.target.elements.CreateHabit_name.value;
		const habitGoal = e.target.elements.CreateHabit_goal.value;

		updateGoals({ name: habitName, days: habitGoal });
		setIsFormDisplayed(false);
	}

	function handleCancel() {
		setIsFormDisplayed(false);
	}

	return (
		<div>
			<h5>
				<button type="button" className="btn" onClick={handleClick}>
					+ New Habit
				</button>
			</h5>
			{isFormDisplayed && (
				<form onSubmit={handleSubmit}>
					<h4 className="header-form">Create a New Habit</h4>
					<div>
						<label
							className="header-label"
							htmlFor="CreateHabit_name"
							title="Habit Name"
						>
							Habit Name
						</label>
					</div>
					<input type="text" id="CreateHabit_name" placeholder="Eg. Exercise" />
					<div>
						<label
							className="header-label"
							htmlFor="CreateHabit_goal"
							title="Habit Name"
						>
							Goal
						</label>
					</div>
					<input
						type="text"
						id="CreateHabit_goal"
						placeholder="Number of times to perform habit each month"
					/>
					<button type="submit" className="btn btn-form">
						Save
					</button>
					<button
						type="button"
						className="btn btn-form cancel"
						onClick={handleCancel}
					>
						Cancel
					</button>
				</form>
			)}
		</div>
	);
};

export default NewHabit;
