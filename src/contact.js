function contact() {
    const contentDiv = document.querySelector('#content');

    // Create a div for the contact page
    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact');

    // Create a heading
    const heading = document.createElement('h1');
    heading.textContent = 'Contact Us';

    // Create a contact
    const contactInfoDiv = document.createElement('div');
    contactInfoDiv.classList.add('contact-info');
    const contactName = document.createElement('h2');
    contactName.textContent = 'Anh Nguyen';
    const contactEmail = document.createElement('p');
    contactEmail.textContent = "totallyRealEmail@notFake.com";
    const contactPhone = document.createElement('p');
    contactPhone.textContent = '(123) 456-7890';
    contactInfoDiv.appendChild(contactName);
    contactInfoDiv.appendChild(contactEmail);
    contactInfoDiv.appendChild(contactPhone);

    // Add heading and contact info to the contactDiv
    contactDiv.appendChild(heading);
    contactDiv.appendChild(contactInfoDiv);

    // Add contactDiv to the contentDiv
    contentDiv.appendChild(contactDiv);
}

export default contact;