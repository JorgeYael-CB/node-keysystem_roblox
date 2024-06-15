import 'dotenv/config';
import { get } from "env-var";

export const envs = {

  PORT:get('PORT').required().asPortNumber(),
  MONGO_DB_URI:get('MONGO_DB_URI').required().asString(),
  JWT_SEED:get('JWT_SEED').required().asString(),

}