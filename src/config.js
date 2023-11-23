import { config } from "dotenv";
config();
/*
  database: 'plantaexterna',
  username: 'xuial893k03mnqeprx33',
  password: 'pscale_pw_cXT473IxuiQpoJ8Z56cAOToPJYPpcfvfr4OcnWwojb',
  host: 'aws.connect.psdb.cloud',
*/
export const PORT = process.env.PORT || 2553;
export const HOST = process.env.HOST || 'http://localhost';
export const DB_HOST = process.env.DB_HOST || "aws.connect.psdb.cloud";
export const DB_USER = process.env.DB_USER || "xuial893k03mnqeprx33";
export const DB_PASSWORD = process.env.DB_PASSWORD || "pscale_pw_cXT473IxuiQpoJ8Z56cAOToPJYPpcfvfr4OcnWwojb";
export const DB_DATABASE = process.env.DB_DATABASE || "plantaexterna";
export const DB_PORT = process.env.DB_PORT || 3306;
