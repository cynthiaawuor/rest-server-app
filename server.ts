import { config } from "dotenv";
config();

import express from "express";
import type Task from "./types/task.js";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import db from "./db/db.js";

const app = express();
const spec = YAML.load("./openapi.yaml");
app.use(express.json());
app.use("/docs", swaggerUi.serve, swaggerUi.setup(spec));

app.get("/openapi.json", (_req, res) => res.json(spec));

app.get("/tasks", async (_req, res) => {
  const tasks = await db.pool.query<Task>("SELECT * FROM tasks");
  res.type("json").send(tasks.rows);
});
app.get("/tasks/:id", async (req, res) => {
  const id = req.params.id;
  const tasks = await db.pool.query<Task>(`SELECT * FROM tasks WHERE id=$1`, [
    id,
  ]);

  if (tasks.rows.length === 0) {
    res.type("text").status(404).send("Task not found");
  } else {
    res.json(tasks.rows[0]);
  }
});

app.post("/tasks", async (req, res) => {
  const task = req.body as Task;
  if (!task.summary) {
    res.type("json").status(422).send("Summary is required");
    return;
  }
  if (task.completed === null || task.completed === undefined) {
    task.completed = false;
  }
  if (!task.details) {
    task.details = null;
  }
  const createdTaskResult = await db.pool.query(
    `INSERT INTO tasks(summary,details,completed) VALUES($1,$2, $3) RETURNING *`,
    [task.summary, task.details, task.completed],
  );
  res.type("json").status(201).send(createdTaskResult.rows[0]);
});

app.patch("/tasks/:id", async (req, res) => {
  const id = req.params.id;
  const tasks = await db.pool.query<Task>(`SELECT * FROM tasks WHERE id=$1`, [
    id,
  ]);

  if (tasks.rowCount === 0) {
    res.type("text").status(404).send("Task not found");
  } else {
    const payload = req.body;
    const task = tasks.rows[0]!;
    if (payload.summary) {
      task.summary = payload.summary;
    }
    if (task.completed !== payload.completed) {
      task.completed = payload.completed;
    }
    if (payload.details) {
      task.details = payload.details;
    }

    const updatedTaskResult = await db.pool.query(
      `UPDATE tasks SET summary=$1, details=$2,completed=$3 WHERE id=$4 RETURNING *`,
      [task.summary, task.details, task.completed, task.id],
    );

    res.type("application/json").status(202).send(updatedTaskResult.rows[0]);
  }
});

app.delete("/tasks/:id", async (req, res) => {
  const id = req.params.id;
  const tasks = await db.pool.query<Task>(`SELECT * FROM tasks WHERE id=$1`, [
    id,
  ]);

  if (tasks.rowCount === 0) {
    res.type("text").status(404).send("Task not found");
  } else {
    await db.pool.query(`DELETE FROM tasks WHERE id=$1`, [id]);
    res.status(204).end();
  }
});

const PORT = Number(process.env.PORT ?? 3000);

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
