import { NextFunction, type Request, type Response } from "express";
import { MESSAGE_CODE } from "../../utils/error-code";
import { HandleResponse } from "../../utils/handle-response";
import { ErrorApp } from "../../utils/http-error";
import { MESSAGES } from "../../utils/Messages";
import { createUserService, getUsersService } from "./template-service";

export const createUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const body = req.body;

  const user = await createUserService(body);
  if (user instanceof ErrorApp) {
    next(user);
    return;
  }
  HandleResponse(res, 201, MESSAGE_CODE.SUCCESS, MESSAGES.CREATED.ACARA);
};

export const getUsersController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const query = req.query;

  const user = await getUsersService(query);
  if (user instanceof ErrorApp) {
    next(user);
    return;
  }
  HandleResponse(
    res,
    201,
    MESSAGE_CODE.SUCCESS,
    MESSAGES.CREATED.ACARA,
    user.data,
    user.meta
  );
};
