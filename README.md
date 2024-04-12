This is the client app which compliments the FE workshop Testing with RTL https://github.com/ITV/fe-workshops/blob/master/testing-with-rtl/

# Getting Started with Animals

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
An Express server serves static images stored in the "images" directory and defines routes for the animals API endpoint, running on port 3000.

## Requirements

- [NodeJS](https://nodejs.org/en/) (`20.11.x` or newer)
- [PNPM](https://pnpm.io) (`8.x`)

## Available Scripts

From the root directory you should run these commands:

### `pnpm install`

Installs all dependencies.

### `pnpm build`

Builds the client app.

### `pnpm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

Note: Express will also be serving the animals API (`/api/random-animal`) needed to render the assets in the client app.

### `pnpm test`

Launches the test runner in the interactive watch mode.
