// Asynchronous function to fetch and display user data
async function fetchUserData() {
    // API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    
    // Select the data container element
    const dataContainer = document.getElementById('api-data');
    
    try {
        // Fetch data from API
        const response = await fetch(apiUrl);
        
        // Convert response to JSON
        const users = await response.json();
        
        // Clear the "Loading user data..." message
        dataContainer.innerHTML = '';
        
        // Create a <ul> element to hold user list
        const userList = document.createElement('ul');
        
        // Loop through each user and create <li> elements
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });
        
        // Append the user list to the data container
        dataContainer.appendChild(userList);
    } catch (error) {
        // Handle errors (e.g., network issues)
        dataContainer.innerHTML = 'Failed to load user data.';
        console.error('Error fetching user data:', error);
    }
}

// Run fetchUserData after the DOM has loaded
document.addEventListener('DOMContentLoaded', fetchUserData);