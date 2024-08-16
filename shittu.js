
/* Q. 5. Write a function that fetches data from the JSON Placeholder API. You can choose any endpoint except the ones we used in class. After fetching the data, display the responses on a webpage.
Example: Suppose you choose the endpoint that provides a list of comments. Your function should fetch the comments and display them on the webpage.
Hint: You can use fetch or async/await to handle the API request. Function to fetch and display English football club data
*/

async function fetchFootballClubData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();

        const clubDataContainer = document.getElementById('club-data');

        // Iterate over the data and create HTML elements to display it
        data.forEach(club => {
            const clubElement = document.createElement('div');
            clubElement.classList.add('club');

            const nameElement = document.createElement('h2');
            nameElement.innerText = club.name;

            const emailElement = document.createElement('p');
            emailElement.innerText = `Email: ${club.email}`;

            const cityElement = document.createElement('p');
            cityElement.innerText = `City: ${club.address.city}`;

            clubElement.appendChild(nameElement);
            clubElement.appendChild(emailElement);
            clubElement.appendChild(cityElement);

            clubDataContainer.appendChild(clubElement);
        });
    } catch (error) {
        console.error('Error fetching football club data:', error);
    }
}

// Call the function to fetch and display the data
fetchFootballClubData();