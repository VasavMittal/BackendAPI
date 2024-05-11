# BackendAPI


Certainly! Below is a basic template for a README file tailored for a Node.js project:

Node.js Project Name
A brief description of your project goes here.

Table of Contents
Installation
Usage
Features
Contributing
License


Installation

1 Clone the repository:
git clone https://github.com/VasavMittal/BackendAPI.git

2 Navigate to the project directory:
cd BackendAPI

3 Install dependencies:
npm install

Usage

node app.js


User Authentication and Profile Management API Documentation

This document provides details about the API endpoints for user authentication, registration, profile management, and user listing.

Base URL
The base URL for all endpoints is http://127.0.0.1:3000/api/users

Authentication

Login
    URL: /login
    Method: POST
    Description: Endpoint for user login.
    Request Body:
    {
    "email": "user@example.com",
    "password": "password"
    }

    Success Response:
        Code: 200 OK
        Content:
        {
        "token": "generated JWT token"
        }

    Error Response:
        Code: 401 Unauthorized
        Content:
        {
        "message": "Invalid email or password"
        }

Register
    URL: /register
    Method: POST
    Description: Endpoint for user registration.
    Request Body:
    {
    "email": "user@example.com",
    "password": "password",
    "username": "username"
    }
    Success Response:
        Code: 201 Created
        Content:
        {
        "token": "generated JWT token"
        }
    Error Response:
        Code: 400 Bad Request
        Content:
        {
        "message": "User already exists"
        }
Logout
    URL: /logout
    Method: POST
    Description: Endpoint for user logout.
    Authorization: Bearer <token>
    Success Response:
        Code: 200 OK
        Content:
        {
        "message": "Logout successful"
        }

Profile Management

Get Current User Profile

    URL: /profile
    Method: GET
    Description: Endpoint to get the current user's profile.
    Authorization: Bearer <token>
    Success Response:
        Code: 200 OK
        Content: Profile information of the current user.

Update User Profile
    URL: /profile
    Method: PUT
    Description: Endpoint to update the current user's profile.
    Authorization: Bearer <token>
    Request Body: Updated profile information.
    Success Response:
        Code: 200 OK
        Content:
        {
        "message": "Profile updated successfully",
        "profile": { /* Updated profile data */ }
        }

Make Profile Private
    URL: /profile/private
    Method: PUT
    Description: Endpoint to make the current user's profile private.
    Authorization: Bearer <token>
    Success Response:
        Code: 200 OK
        Content:
        {
        "message": "Profile visibility updated to private",
        "profile": { /* Updated profile data */ }
        }

Admin Operations

Get All Users

    URL: /users
    Method: GET
    Description: Endpoint to get all users (only for admin).
    Authorization: Bearer <admin-token>
    Success Response:
        Code: 200 OK
        Content: List of all users with limited information.

