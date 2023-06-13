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

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
