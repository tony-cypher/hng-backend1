# Number Classification API

## Overview

The **Number Classification API** is a Node.js-based RESTful service built with Express. It takes an integer as input and returns interesting mathematical properties about the number along with a fun fact retrieved from the [Numbers API](http://numbersapi.com/#42).

## Features

- **Prime Check:** Determines if the given number is prime.
- **Perfect Number Check:** Determines if the number is perfect.
- **Armstrong Number Check:** Determines if the number is an Armstrong number.
- **Parity Detection:** Returns whether the number is odd or even.
- **Digit Sum:** Calculates the sum of the digits in the number.
- **Fun Fact Retrieval:** Retrieves a fun mathematical fact about the number from the Numbers API.
- **CORS Enabled:** Supports Cross-Origin Resource Sharing for web-based clients.

## Technology Stack

- **Node.js**
- **Express.js**
- **CORS Middleware**
- **axios** (for HTTP requests to the Numbers API)

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v12 or higher)
- npm (comes with Node.js)

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/tony-cypher/hng-backend1.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd hng-backend1
   ```

3. **Install the dependencies:**

   ```bash
   npm install
   ```

## Usage

### Starting the Server

To start the server, run:

```bash
node index.js
```

By default, the server listens on port `5000`. You can change the port by setting the `PORT` environment variable.

### API Endpoint

#### GET `/api/classify-number`

**Description:**  
This endpoint accepts a query parameter named `number` and returns its mathematical properties along with a fun fact.

**Query Parameters:**

- `number` (required): An integer to be classified.

**Example Request:**

```
GET http://localhost:5000/api/classify-number?number=371
```

**Success Response (HTTP 200 OK):**

```json
{
  "number": 371,
  "is_prime": false,
  "is_perfect": false,
  "properties": ["armstrong", "odd"],
  "digit_sum": 11,
  "fun_fact": "371 is a narcissistic number."
}
```

**Error Response (HTTP 400 Bad Request):**

```json
{
  "number": "alphabet",
  "error": true
}
```

## Code Structure

- **index.js:**  
  The main server file that sets up Express, configures CORS, implements the API endpoint, and contains utility functions to compute various mathematical properties.

- **Utility Functions:**
  - **isPrime:** Checks if a number is prime.
  - **isPerfect:** Checks if a number is perfect.
  - **isArmstrong:** Checks if a number is an Armstrong number.
  - **digitSum:** Calculates the sum of the digits of the number.

## External Services

- **Numbers API:**  
  Used to fetch a fun mathematical fact based on the provided number. For more details, visit [Numbers API Documentation](http://numbersapi.com/#42).

## Contributing

Contributions are welcome! Feel free to fork this repository and submit pull requests for improvements or bug fixes.

## Contact

For any questions or further information, please contact:

- **Cypher** – [tonycypher0@gmail.com](mailto:tonycypher0@gmail.com)
