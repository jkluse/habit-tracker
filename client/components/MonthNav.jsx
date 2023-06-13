import React from "react";

const MonthNav = (props) => {
	const { currMonth, currYear, setCurrMonth, setCurrYear } = props;
	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	return (
		<div className="date">
			<span>
				<button
					className="btn btn-month"
					type="button"
					onClick={handleClickBack}
				>
					&lt;
				</button>
			</span>
			<span className="currMonth">{months[currMonth]}</span>{" "}
			<span className="currYear">{currYear}</span>
			<span>
				<button
					className="btn btn-month"
					type="button"
					onClick={handleClickFwd}
				>
					&gt;
				</button>
			</span>
		</div>
	);

	function handleClickFwd() {
		if (currMonth < 11) {
			setCurrMonth(currMonth + 1);
		} else {
			setCurrYear(currYear + 1);
			setCurrMonth(0);
		}
	}
	function handleClickBack() {
		if (currMonth >= 1) {
			setCurrMonth(currMonth - 1);
		} else {
			setCurrMonth(11);
			setCurrYear(currYear - 1);
		}
	}
};

export default MonthNav;
