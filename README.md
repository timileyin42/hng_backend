# My API

This is a simple public API developed using TypeScript and Express. The API returns basic information including an email address, the current date and time, and a GitHub URL.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [API Endpoint](#api-endpoint)
- [Response Format](#response-format)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Environment Variables](#environment-variables)

## Features

- Returns the registered email address.
- Provides the current date and time in ISO 8601 format.
- Includes the GitHub URL of the project.

## Technologies Used

- **Node.js**: JavaScript runtime for building the API.
- **Express**: Web framework for Node.js.
- **TypeScript**: Superset of JavaScript that adds static types.
- **CORS**: Middleware for enabling Cross-Origin Resource Sharing.
- **dotenv**: Module for loading environment variables from a `.env` file.

## API Endpoint

- **GET** `/`

## Response Format

The API returns a JSON response in the following format:

```json
{
  "email": "your-email@example.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/yourusername/your-repo"
}

## Setup Instructions

1 *Clone the repository:*

git clone https://github.com/timileyin42/hng_backend.git
cd hng_backend

2 *Install dependencies:*
npm install

3 *Create a .env file in the root directory and add your environment variables:*

EMAIL=your-email@example.com
GITHUB_URL=https://github.com/yourusername/your-repo

4 *Build the project:

npm run build

5 *Start the server:

npm start

6 Access the API: Open your browser and navigate to http://localhost:5000 to see the API response.


## Usage

You can use tools like Postman or curl to test the API:

```curl http://localhost:8000


## Environment Variables

Make sure to set the following environment variables in your .env file:

EMAIL: Your registered email address.
GITHUB_URL: The URL of your GitHub repository.
