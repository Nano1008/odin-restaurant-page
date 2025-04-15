function menu() {
    const contentDiv = document.querySelector('#content');

    // Create a div for the menu page
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu');

    // Create a heading
    const heading = document.createElement('h1');
    heading.textContent = 'Menu';

    // Create a menu items section
    const menuItemsDiv = document.createElement('div');
    menuItemsDiv.classList.add('menu-items');
    const dessertItems = [
        { name: 'Chocolate Cake', description: 'Rich chocolate cake with creamy frosting.', price: '$5.00' },
        { name: 'Vanilla Ice Cream', description: 'Classic vanilla ice cream, perfect for any occasion.', price: '$3.00' },
        { name: 'Strawberry Cheesecake', description: 'Creamy cheesecake topped with fresh strawberries.', price: '$6.00' },
        { name: 'Lemon Tart', description: 'Tangy lemon tart with a buttery crust.', price: '$4.50' },
    ];
    dessertItems.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('menu-item');

        const itemName = document.createElement('h2');
        itemName.textContent = item.name;

        const itemDescription = document.createElement('p');
        itemDescription.textContent = item.description;

        const itemPrice = document.createElement('p');
        itemPrice.textContent = item.price;

        itemDiv.appendChild(itemName);
        itemDiv.appendChild(itemDescription);
        itemDiv.appendChild(itemPrice);
        menuItemsDiv.appendChild(itemDiv);
    });

    // Add heading and menu items to the menuDiv
    menuDiv.appendChild(heading);
    menuDiv.appendChild(menuItemsDiv);

    // Add menuDiv to the contentDiv
    contentDiv.appendChild(menuDiv);
}

export default menu;