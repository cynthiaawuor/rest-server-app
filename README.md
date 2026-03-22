# rest-server-app

A RESTful API for managing tasks, built with Express and PostgreSQL.

### Tech Stack

- Node.js
- Express.js
- TypeScript
- PostgreSQL (via Docker)

### Getting Started

1. **Clone the repo**

```bash
git clone git@github.com:cynthiaawuor/rest-server-app.git
cd rest-server-app
```

2. **Set up environment variables** — copy the example file and fill in your own values:

```bash
cp .env.example .env
```

Then edit `.env` with your actual credentials. These variables are used by both Docker Compose (to initialize the PostgreSQL database) and the server (to connect to it).

3. **Start the database**

```bash
docker compose up -d
```

4. **Install dependencies**

```bash
npm install
```

5. **Run the server**

```bash
npm start
```

The server will be available at `http://localhost:3000` and API docs at `http://localhost:3000/docs`.
