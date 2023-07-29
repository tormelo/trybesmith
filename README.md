# Trybesmith

The Trybesmith API is a project aimed at learning about CRUD operations, routing in web development, Typescript, implementation of the Models, Service, and Controllers application layers, and authentication. The API is built using Express.js and uses MySQL as its database.

## Table of Contents

* [Technologies Used](#technologies-used)
* [Features](#features)
* [Prerequisites](#prerequisites)
* [Installation and Running the API with docker](#installation-and-running-the-api-with-docker)
* [API Endpoints](#api-endpoints)
* [Authentication](#authentication)
* [Acknowledgments](#acknowledgments)

## Technologies Used
- Typescript: A superset of JavaScript that adds static typing to the language, providing better tooling and improved code quality.
- Express.js: A popular web application framework for Node.js.
- MySQL: A relational database management system used to store the API data.
- Docker: A platform that allows applications to be packaged and run in containers.
- Docker Compose: A tool for defining and running multi-container Docker applications.

## Features
- CRUD Operations for Products and Orders
- User Registration and Authentication

## Prerequisites

Before running the project, make sure you have Docker and Docker Compose installed on your system. If you don't have them installed, follow the instructions below:

- Install Docker: [https://docs.docker.com/get-docker/](https://docs.docker.com/get-docker/)
- Install Docker Compose: [https://docs.docker.com/compose/install/](https://docs.docker.com/compose/install/)

## Installation and Running the API with docker

1. Clone the repository:
    ```bash
    git clone https://github.com/tormelo/trybesmith.git
    ```
2. Navigate to the project folder:
    ```bash
    cd trybesmith
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Start the MySQL and API containers using Docker Compose:
    ```bash
    docker-compose up -d
    ```
5. Access the trybesmith container terminal by running the command:
    ```bash
    docker exec -it trybesmith bash
    ```
6. Inside the container terminal populate the db with mock data:
    ```bash
    npm run restore
    ```
7. Inside the container terminal, start the API:
    ```bash
    npm run dev
    ```
    or
     ```bash
    npm start
    ```
8. The API will be accessible at `http://localhost:3000`.

## API Endpoints

The Trybesmith API provides the following endpoints:

### Login
- **POST /login**: User authentication endpoint. Obtain an authentication token by submitting credentials.

### Users
- **POST /users/register**: Register a user by providing the necessary information.

### Products
- **GET /products**: Retrieve a list of products from the database.
- **POST /products**: Add new products to the database.

### Orders
- **GET /orders**: Retrieve a list of orders from the database.
- **POST /orders**: Create new orders by providing the required information.

## Authentication

The Trybesmith API implements authentication to secure certain routes. Users are required to register and log in to access protected endpoints. Upon successful login, a token is provided, which must be included in the request headers for protected routes.

## Acknowledgments

This project was created as part of the Web Development course at Trybe. Special thanks to all the instructors who contributed to the learning process and helped in the development of this project.