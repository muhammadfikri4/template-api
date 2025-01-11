import { NextFunction, type Request, type Response } from "express";
import { TokenExpiredError, decode, verify } from "jsonwebtoken";
import { config } from "../libs";
import { MESSAGE_CODE } from "../utils/error-code";
import { HandleResponse } from "../utils/handle-response";
import { MESSAGES } from "../utils/Messages";
import { TokenDecodeInterface } from "../interface/token-decode";

export const VerifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.headers.authorization) {
    return HandleResponse(
      res,
      401,
      MESSAGE_CODE.UNAUTHORIZED,
      MESSAGES.ERROR.UNAUTHORIZED.FORBIDDEN
    );
  }
  const token = req.headers.authorization.replace("Bearer ", "");
  verify(token, config.JWT_SECRET as string, (err) => {
    if (err) {
      if (err instanceof TokenExpiredError) {
        return HandleResponse(
          res,
          401,
          MESSAGE_CODE.UNAUTHORIZED,
          MESSAGES.ERROR.UNAUTHORIZED.EXPIRED
        );
      }
      const decodeToken = decode(token);
      if (!(decodeToken as TokenDecodeInterface)?.id) {
        return HandleResponse(
          res,
          401,
          MESSAGE_CODE.UNAUTHORIZED,
          MESSAGES.ERROR.UNAUTHORIZED.RECOGNIZED
        );
      }
      return HandleResponse(
        res,
        401,
        MESSAGE_CODE.UNAUTHORIZED,
        MESSAGES.ERROR.INVALID.AUTH
      );
    }
    next();
  });
};
