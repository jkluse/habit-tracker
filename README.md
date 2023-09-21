# Habit Tracker - Full Stack React Appliation

## Features
- Create habits that you want to track on a monthly basis; set a goal for how many times you complete habit / per month.
- Update Calendar grid on days you complete your habit.
- Habits will turn green when you reach you monthly goal. Enjoy! 
  
## Built With
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Vite](https://vitejs.dev/) - A build tool that is faster than Webpack
- [Node.js](https://nodejs.org/en/) - JavaScript runtime
- [Express.js](https://expressjs.com/) - Web application framework
- [PostgreSQL](https://www.postgresql.org/) - Open source object-relational database system


## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development purposes.

### Prerequisites
- Node.js
- npm
- PostgreSQL

### Installing
1. Fork & Clone the repository:
2. Install server all dependencies from root directory:
npm install

## Development Setup

1. Install dependencies: `npm install`
2. Create your database: `createdb YOUR_DB`
3. Run your migrations: `psql -f server/migration.sql YOUR_DB`
4. Create your `.env` file: `cp .env.template .env`
5. Add your info in `.env`
6. From root directory, run the app: `npm run dev`

## Scripts

**Root**

- `npm run dev` - Runs the API server and hosts your frontend assets.
- `npm run dev:server` - Runs the API server in watch mode.
- `npm run dev:client` - Hosts your frontend assets.

**/client**

- `npm run dev` - Hosts your assets.
- `npm run build` - Builds your assets (mainly used in CI/CD).

**/server**

- `npm run dev` - Runs the server in watch mode.
- `npm run start` - Starts the server (mainly used when deploying).

#Application Images


## Author
- John Kluse
<img width="2032" alt="Screenshot 2023-09-21 at 3 05 23 PM" src="https://github.com/jkluse/habit-tracker/assets/25851301/66d30bdd-0ba7-467d-b6bc-f20e4910d8f7">

<img width="1599" alt="Screenshot 2023-09-21 at 3 07 12 PM" src="https://github.com/jkluse/habit-tracker/assets/25851301/95a51947-8ee9-4ebf-905f-1b46d1e43197">

