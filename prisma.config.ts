import { definePrismaConfig } from "prisma/config";
import { defineConfig as ormConfig } from "@prisma/orm-postgres/config";


export default definePrismaConfig({
  orm: ormConfig({
    contract: "./src/dal/schema.prisma",
    output: "./src/dal/generated",
    db: {
      connection: process.env.DATABASE_URL!,

    },
    migrations: {
      dir: "./src/dal/migrations",
    },
  }),
});
