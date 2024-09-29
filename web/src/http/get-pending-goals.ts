type PendingGoalsResponse = {
	id: string;
	title: string;
	desiredWeeklyFrequency: number;
	completionCount: number;
}[];

export async function getPendingGoals(): Promise<PendingGoalsResponse> {
	const responde = await fetch("http://localhost:3000/pending-goals");
	const data = await responde.json();
	console.warn(data);

	return data.pendingGoals;
}
