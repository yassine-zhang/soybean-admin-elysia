import { Elysia } from "elysia";
import { jwt } from "@elysiajs/jwt";
import { cors } from "@elysiajs/cors";

import { authPlugin } from "../handler/auth";

const jwtSecret = Bun.env.JWT_SECRET || "";

new Elysia()
  .use(cors())
  .use(
    jwt({
      name: "jwt",
      secret: jwtSecret,
    }),
  )
  .use(authPlugin({ prefix: "/auth" }))
  .listen(9094);
