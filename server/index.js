import express from "express";
import postgres from "postgres";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });
console.log(process.env);
const PORT = process.env.PORT;
const sql = postgres(process.env.DATABASE_URL);
const app = express();

app.use(express.json());

app.get("/api/habits", (req, res) => {
	sql`SELECT * FROM habit`.then((rows) => {
		res.send(rows);
	});
});

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
