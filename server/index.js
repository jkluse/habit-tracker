import express from "express";
import postgres from "postgres";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });
const PORT = process.env.PORT;
const sql = postgres(process.env.DATABASE_URL);
const app = express();

app.use(express.json());

app.get("/api/habits", (req, res) => {
	sql`SELECT * FROM habit`.then((rows) => {
		res.send(rows);
	});
});

app.get("/api/checkmarks/:month/:year", (req, res) => {
	const month = req.params.month;
	const year = req.params.year;

	sql`SELECT * FROM checkmark WHERE month = ${month} AND year = ${year} `.then(
		(rows) => {
			res.send(rows);
		}
	);
});

app.post("/api/checkmarks/:month/:year", (req, res) => {
	const month = Number(req.params.month);
	const year = Number(req.params.year);
	const habit_id = req.body.habit_id;
	const days = req.body.days;

	console.log(typeof month, typeof year);

	// Guard clauses
	if (!Array.isArray(days))
		return res
			.status(400)
			.send({ message: "Bad request, checkmarks should be an array." });

	if (
		!Number.isInteger(month) ||
		!Number.isInteger(year) ||
		!Number.isInteger(habit_id)
	)
		return res.status(400).send({
			message: "Bad request, month/year/habit_id should be an integer.",
		});

	sql`INSERT INTO checkmark (days, month, year, habit_id) VALUES (${days}, ${month}, ${year}, ${habit_id}) RETURNING *`.then(
		(rows) => {
			res.status(201).send(rows);
		}
	);
});

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
