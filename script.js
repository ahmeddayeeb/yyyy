// Function to display a greeting based on the time of day
function displayGreeting() {
    const now = new Date();
    const hours = now.getHours();
    let greeting;

    if (hours < 12) {
        greeting = "Good morning";
    } else if (hours < 18) {
        greeting = "Good afternoon";
    } else {
        greeting = "Good evening";
    }

    document.getElementById('greeting').textContent = greeting;
}

// Function to display an alert when the button is clicked
function showAlert() {
    alert("Button clicked!");
}

// Function to expand the bio section when the "Read More" button is clicked
function expandBio() {
    const bioSection = document.getElementById('profile');
    bioSection.classList.toggle('expanded');
}

// Function to validate the form
function validateForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const errorMessage = document.getElementById('errorMessage');

    if (name === '' || email === '') {
        errorMessage.textContent = 'Please fill out all fields.';
    } else if (!validateEmail(email)) {
        errorMessage.textContent = 'Please enter a valid email address.';
    } else {
        errorMessage.textContent = '';
        alert('Form submitted successfully!');
    }
}

// Function to validate email format
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Event listeners
document.addEventListener('DOMContentLoaded', displayGreeting);
document.getElementById('alertButton').addEventListener('click', showAlert);
document.getElementById('readMoreButton').addEventListener('click', expandBio);
document.getElementById('newsletterForm').addEventListener('submit', validateForm);
