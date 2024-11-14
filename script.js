// Selectors
const lostForm = document.getElementById('lostForm');
const searchInput = document.getElementById('search');
const resultsContainer = document.getElementById('results');

// Sample data for "found" items (for demo purposes)
const foundItems = [
    { itemName: "Water Bottle", color: "Blue", location: "Library", description: "Left on a table near the entrance" },
    { itemName: "Notebook", color: "Red", location: "Cafeteria", description: "Math notes inside" },
    { itemName: "Jacket", color: "Black", location: "Gym", description: "Warm and slightly torn at the sleeve" }
];

// Function to submit the lost item form
if (lostForm) {
    lostForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get form data
        const itemName = document.getElementById('itemName').value;
        const color = document.getElementById('color').value;
        const location = document.getElementById('location').value;
        const description = document.getElementById('description').value || "No description provided.";

        // Display success message
        alert(`Lost item reported successfully!\n\nItem: ${itemName}\nColor: ${color}\nLocation: ${location}\nDescription: ${description}`);

        // Clear form fields
        lostForm.reset();

        // Automatically draft and send an email
        sendEmail(itemName, color, location, description);
    });
}

// Function to send an email (simulation)
function sendEmail(itemName, color, location, description) {
    // Simulate an email send
    console.log(`Email sent: New Lost Item - ${itemName}`);
    console.log(`Details:\nItem: ${itemName}\nColor: ${color}\nLocation: ${location}\nDescription: ${description}`);

    // In a real application, you would send this data to a backend to handle the email.
    alert(`Notification email has been sent to the campus!`);
}

// Function to search found items
if (searchInput) {
    searchInput.addEventListener('input', function () {
        const query = searchInput.value.toLowerCase();
        displayResults(query);
    });
}

// Function to display search results
function displayResults(query) {
    resultsContainer.innerHTML = "";  // Clear previous results

    const filteredItems = foundItems.filter(item =>
        item.itemName.toLowerCase().includes(query) ||
        item.color.toLowerCase().includes(query) ||
        item.location.toLowerCase().includes(query)
    );

    if (filteredItems.length === 0) {
        resultsContainer.innerHTML = "<p>No items found matching your search.</p>";
        return;
    }

    // Create cards for each matched item
    filteredItems.forEach(item => {
        const itemCard = document.createElement('div');
        itemCard.classList.add('item-card');
        itemCard.innerHTML = `
            <h3>${item.itemName}</h3>
            <p><strong>Color:</strong> ${item.color}</p>
            <p><strong>Location:</strong> ${item.location}</p>
            <p><strong>Description:</strong> ${item.description}</p>
            <button onclick="connectUser('${item.itemName}')">Connect with Finder</button>
        `;
        resultsContainer.appendChild(itemCard);
    });
}

// Function to simulate connecting with the finder
function connectUser(itemName) {
    alert(`Connecting you with the finder of "${itemName}". You can now chat anonymously to exchange details.`);
}