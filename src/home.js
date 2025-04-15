function Home() {
    const contentDiv = document.querySelector('#content');

    // Create a div for the home page
    const homeDiv = document.createElement('div');
    homeDiv.classList.add('home');

    // Create a heading
    const heading = document.createElement('h1');
    heading.textContent = 'Sweet Nook';

    // Create a description section
    const descriptionDiv = document.createElement('div');
    descriptionDiv.classList.add('description');
    const description = document.createElement('p');
    description.textContent = 'Welcome to Sweet Nook, your go-to place for the best desserts in town!';
    descriptionDiv.appendChild(description);

    // Create a hours section
    const hoursDiv = document.createElement('div');
    hoursDiv.classList.add('hours');
    const hoursHeading = document.createElement('h2');
    hoursHeading.textContent = 'Opening Hours';
    const hoursList = document.createElement('ul');
    const weekdays = document.createElement('li');
    weekdays.textContent = 'Monday - Friday: 9 AM - 9 PM';
    const weekend = document.createElement('li');
    weekend.textContent = 'Saturday - Sunday: 10 AM - 10 PM';
    hoursList.appendChild(weekdays);
    hoursList.appendChild(weekend);
    hoursDiv.appendChild(hoursHeading);
    hoursDiv.appendChild(hoursList);

    // Create a location section
    const locationDiv = document.createElement('div');
    locationDiv.classList.add('location');
    const locationHeading = document.createElement('h2');
    locationHeading.textContent = 'Location';
    const locationText = document.createElement('p');
    locationText.textContent = '123 Dessert Lane, Sweet City, SC 12345';
    locationDiv.appendChild(locationHeading);
    locationDiv.appendChild(locationText);

    // Add description, hours, and location to the homeDiv
    homeDiv.appendChild(heading);
    homeDiv.appendChild(descriptionDiv);
    homeDiv.appendChild(hoursDiv);
    homeDiv.appendChild(locationDiv);

    // Add homeDiv to the contentDiv
    contentDiv.appendChild(homeDiv);
}

// Export the pageLoad function
export default Home;