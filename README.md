# Stinkball

---

![Stinkball Logo](/client/assets/images/MainStinkballLogo.png)

## Table of Contents
* [General Info](#general-info)
* [Code Info](#code-info)
* [Setup](#setup)

---
## General Info

Stinkball is a game of Fantasy Football -- but backwards! Instead of drafting the best players, look for the worst. Play against friends and see who wins week-to-week. 

This mobile app is currently in development! 

---
## Code Info

This is a full-stack mobile app created with a React Native front-end design, Node.js + Express.js for the API (with extensive Jest unit-testing), and MySQL + Sequelize for the database. The entire codebase is written in TypeScript, to ensure application type safety and prevent bugs.


---
## Setup
You can run this mobile app in your local environment in a few simple steps: 

### 1. Pre-steps
- Install npm (or yarn), Node.js, and brew (if you're on a Mac). 
- Clone the repository onto your local machine
- Navigate to the `/api` directory and install dependencies: `npm install` OR `yarn install` 
- Navigate to the `/client` directory and install dependencies: `npm install` OR `yarn install` 


### 2. Run the API

- Navigate to the `/api` directory. 
- Install MySQL with brew: `brew install mysql`
    - Check if MySQL is running: `brew services list`
    - If MySQL is not running, start it: `brew services start mysql`

- Install DBeaver, which is a GUI database tool, with brew: `brew install dbeaver-community`
    - Open DBeaver and create a new connection to your MySQL database. Note your port number. 
    - In the Database Navigator window, right click on your local host connection and right click "Databases" to create a new database. Name it "stinkball".

- Create .env file: `.env.development.local` with the following code (`DB_PORT` should be the port number you noted from DBeaver): 
```
PORT=3000
LOG_DIR=./logs
DB_USER=root
DB_PASSWORD=
DB_HOST=localhost
DB_PORT=3306
DB_DATABASE=stinkball
```
- Create a file pointer from the `.env.development.local` to the `.env.test.local`: `$ ln -s .env.development.local .env.test.local`
- Run the API by using: `npm run start` OR `yarn start` (OR `$ yarn dev` to run with nodemon).
- This will start the API on port 3000


### 4. Start up the React Native app

- Navigate to the `/client` directory. 
- Run the React app by using: `npm start` OR `yarn start`



