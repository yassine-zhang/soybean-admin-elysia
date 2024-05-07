import { Elysia, t } from "elysia";
import login from "./modules/login";
import getUserInfo from "./modules/getUserInfo";

import { IAuthPluginParams } from "../types/shared";

export const authPlugin = ({ prefix }: IAuthPluginParams) =>
  new Elysia()
    .post(`${prefix}/login`, login, {
      body: t.Object({
        userName: t.String(),
        password: t.String(),
      }),
    })
    .get(`${prefix}/getUserInfo`, getUserInfo, {
      headers: t.Object({
        authorization: t.String(),
      }),
    });
