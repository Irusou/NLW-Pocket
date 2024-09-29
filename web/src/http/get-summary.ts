type SummaryResponse = {
	completed: number;
	total: number;
	goalsPerDay: Record<
		string,
		{
			id: string;
			title: string;
			completedAt: string;
		}[]
	>;
};

export async function getSummary(): Promise<SummaryResponse> {
	const responde = await fetch("http://localhost:3000/summary");
	const data = await responde.json();
	return data.summary;
}
