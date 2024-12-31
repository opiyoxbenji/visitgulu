export async function getData() {
	const response = await fetch('/app/api/data');
	return response.json();
}
