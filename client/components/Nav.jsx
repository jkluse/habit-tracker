import React from "react";

const Nav = () => {
	return (
		<nav>
			<div className="nav-wrapper">
				<a href=".">
					<img src="./habit-icon.svg" alt="" />
				</a>
				<a href="." className="home">
					HABIT TRACKER
				</a>
			</div>
		</nav>
	);
};

export default Nav;
