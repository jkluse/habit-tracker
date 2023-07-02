# Habit Tracker - Full Stack React Appliation

## Features
- Watch videos from YouTube
- View video details like title, description, likes, and views
- Comment on individual videos, comments stored in Postgres
  
## Built With
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Vite](https://vitejs.dev/) - A build tool that is faster than Webpack
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [Node.js](https://nodejs.org/en/) - JavaScript runtime
- [Express.js](https://expressjs.com/) - Web application framework
- [PostgreSQL](https://www.postgresql.org/) - Open source object-relational database system
- [YouTube API](https://developers.google.com/youtube) - Provides access to YouTube data like videos, playlists, etc.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development purposes.

### Prerequisites
- Node.js
- npm
- PostgreSQL

### Installing
1. Clone the repository:
git clone https://github.com/GroupProject123456/youtubeclone.git
2. Install server all dependencies from root directory:
npm install

## Development Setup

1. Install dependencies: `npm install`
1. Create your database: `createdb YOUR_DB`
1. Run your migrations: `psql -f server/migration.sql YOUR_DB`
1. Create your `.env` file: `cp .env.template .env`
1. Add your info in `.env`
1. Run the app: `npm run dev`

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



## Author
- John Kluse

