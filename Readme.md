# Marmeto Cart

This is a dynamic e-commerce cart page built with HTML, CSS, and JavaScript. It allows users to view and manage items in their shopping cart, including adding/removing items, adjusting quantities, and checking out. The cart data is saved in the browser's `localStorage` to persist the cart state even after the page is reloaded.

## Features

- **Responsive Design**: The cart page is fully responsive across various devices (desktop, tablet, and mobile).
- **Cart Management**: View product details, change product quantities, and remove items from the cart.
- **Cart Totals**: Displays subtotal and total price for the cart.
- **Persistent Cart Data**: Cart data is stored in `localStorage`, so the cart persists even after the page is reloaded or the browser is closed.
- **Dynamically Loaded Data**: Product data is fetched from an external API and displayed in the cart.


## Installation

To run this project locally, follow the steps below:

1. Clone the repository or download the files:

    ```bash
    git clone https://github.com/TechSubrat-netizen/MarmetoAssignment.git
    
    ```

2. Open `index.html` in your browser to see the cart page in action.

## Technologies Used

- **HTML5**: For structuring the content of the page.
- **CSS3**: For styling and creating a responsive design using media queries.
- **JavaScript**: For dynamic cart functionality, including managing the cart state and handling user interactions like updating quantities, deleting items, and calculating totals.

## Features Breakdown

### Cart Management
- **Add/Remove Items**: Items are dynamically added to the cart by fetching data from a remote JSON file and can be removed via the trash icon.
- **Quantity Adjustments**: Users can increase or decrease the quantity of products in the cart.

### Cart Totals
- **Subtotal**: Automatically calculated based on the product quantity and price.
- **Total**: Same as the subtotal, as no additional fees (like taxes or shipping) are added in this version.

### Persistent Cart Data
- **localStorage**: Cart data is saved to the browser's `localStorage`. This means that the items in the cart and their quantities will persist even after refreshing the page or reopening the browser.
  - If no cart data is present in `localStorage`, product information is fetched from a remote JSON API.
  - The cart's state (items and their quantities) is updated in `localStorage` whenever changes are made (such as quantity adjustments or item removal).

## Responsive Design

The cart page is designed to be responsive:

- **Desktop View**: Displays the cart items and totals side by side.
- **Tablet View**: Stacks the cart items and totals vertically.
- **Mobile View**: The cart items are scrollable horizontally for smaller screens, and all elements stack vertically for easier navigation.

## Usage

1. When the page loads, product data is fetched from a remote API and displayed in the cart table.
2. The user can:
    - Increase or decrease the quantity of an item.
    - Remove an item by clicking the trash icon.
    - The cart totals update automatically based on the items in the cart.
3. The cart data is saved in the browser's `localStorage`, ensuring that the cart persists across page reloads or browser restarts.
4. Users can check out by clicking the "Check Out" button, although no actual checkout functionality is implemented in this project.

## Code Overview

### `index.html`
Contains the structure of the page, including the header, breadcrumb section, cart details table, and footer.

### `index.css`
Defines the styles for the page, including layout, colors, fonts, and responsiveness across devices.

### `index.js`
Manages the dynamic aspects of the cart:
- Fetches product data and saves it to `localStorage`.
- Displays the cart items dynamically.
- Handles quantity adjustments and item removal.
- Updates the cart totals and saves changes to `localStorage`.
# Visit Site
- click on https://myassgn.netlify.app/






