DROP TABLE IF EXISTS checkmark;
DROP TABLE IF EXISTS habit;

CREATE TABLE habit (
	ID SERIAL PRIMARY KEY,
	name TEXT NOT NULL,
	goal INT NOT NULL
);

CREATE TABLE checkmark (
	id SERIAL PRIMARY KEY,
	days INT [],
	month INT,
	year INT,
	habit_id INT REFERENCES habit(id)
);

INSERT INTO habit (name, goal) VALUES ('run', 10), ('reading', 20), ('brush teeth', 31), ('Leetcode', 15);

INSERT INTO checkmark (days, month, year, habit_id) VALUES (ARRAY[1, 7, 8, 10, 15, 22], 5, 2023, 1), 
(ARRAY[5,6, 18], 5, 2023, 2), (ARRAY[15,16,17], 5, 2023, 3), 
(ARRAY[8], 5, 2023, 4);