# Store101 Backend

**Store101 Backend** serves as the backbone of the Store101 e-commerce platform, providing robust and secure APIs for handling product data, user and admin authentication, and other core functionalities. Built with modern technologies, this backend ensures a seamless shopping experience for users and efficient management for admins.

## API Endpoints

Here are some of the key API endpoints available:

### User Endpoints

- **GET /api/v1/user/profile**: Get user details.
- **POST /api/v1/user/register**: Register a new user.
- **POST /api/v1/user/login**: Log in a user and generate a JWT token.

### Admin Endpoints

- **GET /api/v1/admin/profile**: Get admin details.
- **POST /api/v1/admin/register**: Register a admin user.
- **POST /api/v1/admin/login**: Log in an admin and generate a JWT token.

### Product Endpoints

- **GET /api/v1/product/all**: Fetch all products.
- **GET /api/v1/product/get/:id**: Fetch a single product by its ID.
- **POST /api/v1/product/add**: Add a new product.
- **PUT /api/v1/product/update/:id**: Update a product by its ID.
- **DELETE /api/v1/product/delete/:id**: Delete product by its ID.

## Technologies Used

- **Node.js**: A powerful JavaScript runtime environment for server-side programming.
- **Express.js**: A fast and minimalistic web framework for building RESTful APIs.
- **MongoDB**: A scalable NoSQL database for storing product information and user data.
- **Mongoose**: An elegant MongoDB Object Data Modeling (ODM) library for managing database interactions.
- **JWT**: JSON Web Tokens for secure user authentication and session management.
- **Cloudinary**: A cloud-based media management platform for storing, managing, and delivering images and videos.

## Prerequisites

Before setting up the project, ensure you have the following installed:

- **Node.js**: [Download and install Node.js](https://nodejs.org/)
- **Yarn**: [Download and install Yarn](https://classic.yarnpkg.com/en/docs/install) (or use npm if preferred)
- **MongoDB**: Ensure MongoDB is running locally or is accessible via a cloud service.

## Setup and Installation

### 1. Clone the Repository

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/akinyiliz/Store101-backend
```

### 2. Navigate to the Backend Directory

Move into the project directory:

```bash
cd Store101-backend
```

### 3. Install Dependencies

Install the necessary packages using Yarn (or npm):

```bash
yarn install
```

Or, if you prefer npm:

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the root directory of the project and add the following environment variables:

```
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

- `MONGO_URI`: Replace with your MongoDB connection string.
- `JWT_SECRET`: Replace with a strong secret key for JWT token generation.
- `CLOUDINARY_CLOUD_NAME`: Replace with your Cloudinary cloud name.
- `CLOUDINARY_API_KEY`: Replace with your Cloudinary api key.
- `CLOUDINARY_API_SECRET`: Replace with your Cloudinary api secret.

### 5. Start the Server

Kick off the development server:

```bash
yarn dev
```

Or, using npm:

```bash
npm run dev
```

The backend server will start running on `http://localhost:8000` (or your specified port).

## Contributing

We welcome contributions to enhance the Store101 Backend. Feel free to open issues or submit pull requests on GitHub.
