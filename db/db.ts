import { Pool, type QueryResult } from "pg";
import { config } from "dotenv";
config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABSE,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
});

function query(
  text: string,
  params: any,
  callback: (err: Error, result: QueryResult<any>) => void,
) {
  return pool.query(text, params, callback);
}
export default { query, pool };
