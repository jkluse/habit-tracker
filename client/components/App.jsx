import React, { useEffect, useState } from "react";
import Table from "./Table";

const App = () => {
	// const [tasks, setTasks] = useState([]);

	// useEffect(() => {
	// 	fetch("/api/tasks")
	// 		.then((res) => res.json())
	// 		.then((tasks) => {
	// 			setTasks(tasks);
	// 		});
	// }, []);

	return <Table />;
};

export default App;
