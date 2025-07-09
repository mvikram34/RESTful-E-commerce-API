# RESTful E-commerce API

## Project Overview

This project implements a robust and secure RESTful API designed to power a modern e-commerce platform. It provides comprehensive backend functionalities for managing product listings, handling user shopping carts, facilitating order creation, and ensuring secure access through JWT-based authentication.

## Key Features

* **Product Management:**
    * View a list of available products.
    * **Admin-only:** Add, update, and delete products.
* **Cart Management:**
    * Add items to the shopping cart.
    * Update item quantities in the cart.
    * Remove items from the cart.
* **Order Creation:**
    * Create new orders from the contents of the shopping cart.
* **User Authentication & Authorization:**
    * Secure API routes using JSON Web Tokens (JWT).
    * **Customer Role:** Can view products, manage cart, and place orders.
    * **Admin Role:** Full customer capabilities plus product management (add, update, delete).

## Technologies Used

* **Backend:** Node.js, Express.js
* **Database:**  MongoDB
* **Authentication:** JWT (JSON Web Tokens)
* **Other Libraries:** [List any other significant npm packages used, e.g., Mongoose for MongoDB, Multer for file uploads, Dotenv for environment variables, etc.]

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

* Node.js (v18.x.x or higher)
* npm (Node Package Manager)
* MongoDB Community Serve

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/mvikram34/RESTful-E-commerce-API.git](https://github.com/mvikram34/RESTful-E-commerce-API.git)
    ```
2.  **Navigate into the project directory:**
    ```bash
    cd RESTful-E-commerce-API
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```

### Environment Variables

Create a `.env` file in the root of your project directory. This file will store sensitive information and configurations.

```env
PORT=[Your desired port, e.g., 5000]
MONGO_URI=[Your MongoDB connection string, e.g., mongodb://localhost:27017/ecommerceapi]
JWT_SECRET=[A long, random, and strong secret key for JWT]
JWT_EXPIRE=[JWT expiration time, e.g., 30d for 30 days, 1h for 1 hour]
# Add any other environment variables your API uses (e.g., API keys for external services, email service credentials, etc.)
