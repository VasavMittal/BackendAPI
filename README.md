Sure, I've made some corrections and adjustments to the README file:

```
# BackendAPI

This repository contains a Node.js backend for user authentication, profile management, and admin operations.

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/VasavMittal/BackendAPI.git
   ```
2. Navigate to the project directory:
   ```
   cd BackendAPI
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Usage

To run the application, use the following command:
```
node app.js
```

## User Authentication and Profile Management API Documentation

This document provides details about the API endpoints for user authentication, registration, profile management, and user listing.

### Base URL

The base URL for all endpoints is `http://127.0.0.1:3000/api/users`.

### Authentication

#### Login

- **URL:** `/login`
- **Method:** `POST`
- **Description:** Endpoint for user login.
- **Request Body:**
  ```json
  {
    "email": "user@example.com",
    "password": "password"
  }
  ```
- **Success Response:**
  - **Code:** `200 OK`
  - **Content:**
    ```json
    {
      "token": "generated JWT token"
    }
    ```
- **Error Response:**
  - **Code:** `401 Unauthorized`
  - **Content:**
    ```json
    {
      "message": "Invalid email or password"
    }
    ```

#### Register

- **URL:** `/register`
- **Method:** `POST`
- **Description:** Endpoint for user registration.
- **Request Body:**
  ```json
  {
    "email": "user@example.com",
    "password": "password",
    "username": "username"
  }
  ```
- **Success Response:**
  - **Code:** `201 Created`
  - **Content:**
    ```json
    {
      "token": "generated JWT token"
    }
    ```
- **Error Response:**
  - **Code:** `400 Bad Request`
  - **Content:**
    ```json
    {
      "message": "User already exists"
    }
    ```

#### Logout

- **URL:** `/logout`
- **Method:** `POST`
- **Description:** Endpoint for user logout.
- **Authorization:** `Bearer <token>`
- **Success Response:**
  - **Code:** `200 OK`
  - **Content:**
    ```json
    {
      "message": "Logout successful"
    }
    ```

### Profile Management

#### Get Current User Profile

- **URL:** `/profile`
- **Method:** `GET`
- **Description:** Endpoint to get the current user's profile.
- **Authorization:** `Bearer <token>`
- **Success Response:**
  - **Code:** `200 OK`
  - **Content:** Profile information of the current user.

#### Update User Profile

- **URL:** `/profile`
- **Method:** `PUT`
- **Description:** Endpoint to update the current user's profile.
- **Authorization:** `Bearer <token>`
- **Request Body:** Updated profile information.
- **Success Response:**
  - **Code:** `200 OK`
  - **Content:**
    ```json
    {
      "message": "Profile updated successfully",
      "profile": { /* Updated profile data */ }
    }
    ```

#### Make Profile Private

- **URL:** `/profile/private`
- **Method:** `PUT`
- **Description:** Endpoint to make the current user's profile private.
- **Authorization:** `Bearer <token>`
- **Success Response:**
  - **Code:** `200 OK`
  - **Content:**
    ```json
    {
      "message": "Profile visibility updated to private",
      "profile": { /* Updated profile data */ }
    }
    ```

### Admin Operations

#### Get All Users

- **URL:** `/users`
- **Method:** `GET`
- **Description:** Endpoint to get all users (only for admin).
- **Authorization:** `Bearer <admin-token>`
- **Success Response:**
  - **Code:** `200 OK`
  - **Content:** List of all users with limited information.
```

I've reformatted and organized the content to make it more readable and structured. Let me know if you need further modifications!