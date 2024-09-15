import dayjs from "dayjs";
import { client, db } from ".";
import { goalCompletions, goals } from "./schema";

async function seed() {
	await db.delete(goalCompletions);
	await db.delete(goals);

	const startOfWeek = dayjs().startOf("week");

	const goalsData = await db
		.insert(goals)
		.values([
			{ title: "Acordar cedo", desiredWeeklyFrequency: 5 },
			{ title: "Codar", desiredWeeklyFrequency: 3 },
			{ title: "Exercitar", desiredWeeklyFrequency: 2 },
		])
		.returning();

	await db.insert(goalCompletions).values([
		{ goalId: goalsData[0].id, createdAt: startOfWeek.toDate() },
		{ goalId: goalsData[1].id, createdAt: startOfWeek.add(1, "day").toDate() },
	]);
}

seed().finally(() => {
	client.end();
});
