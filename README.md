# sequelize_sample


# Getting started

To get the Node server running locally:

- Clone this repo
- `npm install` to install all required dependencies
- Change the postgres path in config/config.json and db.js
- `npm start` to start the local server



## Application Structure

- `server.js` - The entry point to our application. This file defines our express server and connects it to postgres using Sequelize.
- `config/` - This folder contains configuration for Sequelize as well as a central location for configuration/environment variables.
- `models/` - This folder contains the schema definitions for our Sequelize models.



## Scripts

- `db:migration:make` - To create a migration in Sequelize.
- `db:migration:run` - To run all migration in Sequelize.
- `db:seed:make` - To create a seed in Sequelize.
- `db:seed:run` - To run all seeds in Sequelize.
