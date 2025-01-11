import { Router } from "express";
import { VerifyToken } from "../../middleware/verify-token";
import { CatchWrapper } from "../../utils/catch-wrapper";
import {
  createUserController,
  getUsersController,
} from "./template-controller";
const route = Router();

route.post("/", VerifyToken, CatchWrapper(createUserController));
route.get("/", CatchWrapper(getUsersController));

export default route;
