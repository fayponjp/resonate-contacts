export async function getUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error(response.status);
        }

        const data = await response.json();

        return data;
    } catch (error) {
        console.error("Error retrieving data: ", error.message);
    }
}