import { NextFunction, type Request, type Response } from "express";
import { MESSAGE_CODE } from "../../utils/ErrorCode";
import { HandleResponse } from "../../utils/HandleResponse";
import { ErrorApp } from "../../utils/HttpError";
import { MESSAGES } from "../../utils/Messages";
import { AcaraBodyDTO } from "./templateDTO";
import { createAcaraService, deleteAcaraService, getAcaraService, getDetailAcaraService, updateAcaraService } from "./templateService";



export const createAcaraController = async (req: Request, res: Response, next: NextFunction) => {

    const body = req.body as AcaraBodyDTO
    const file = req.file

    const acara = await createAcaraService({ ...body, image: file as unknown as string });
    if (acara instanceof ErrorApp) {
        next(acara)
        return
    }
    HandleResponse(res, 201, MESSAGE_CODE.SUCCESS, MESSAGES.CREATED.ACARA)
}

export const getAcaraController = async (req: Request, res: Response, next: NextFunction) => {

    const { search, openAbsen, openRegister, page, perPage } = req.query

    const acara = await getAcaraService({
        search: search as string,
        page: page ? Number(page) : undefined,
        perPage: perPage ? Number(perPage) : undefined,
        openAbsen: openAbsen as string,
        openRegister: openRegister as string
    });

    if (acara instanceof ErrorApp) {
        next(acara)
        return
    }

    HandleResponse(res, 200, MESSAGE_CODE.SUCCESS, MESSAGES.SUCCESS.ACARA.GET, acara.data, acara.meta)

}

export const deleteAcaraController = async (req: Request, res: Response) => {
    const { id } = req.params;

    const acara = await deleteAcaraService({ id });
    if (acara instanceof ErrorApp) {
        return HandleResponse(res, acara.statusCode, acara.code, acara.message)
    }
    HandleResponse(res, 200, MESSAGE_CODE.SUCCESS, MESSAGES.SUCCESS.ACARA.DELETE)
}

export const updateAcaraController = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, description, endTime, isOpenAbsen, isOpenRegister, startTime, } = req.body as AcaraBodyDTO

    const acara = await updateAcaraService({ id, name, description, endTime, isOpenAbsen, isOpenRegister, startTime, image: req.file?.path });
    if (acara instanceof ErrorApp) {
        return HandleResponse(res, acara.statusCode, acara.code, acara.message)
    }
    HandleResponse(res, 200, MESSAGE_CODE.SUCCESS, MESSAGES.SUCCESS.ACARA.UPDATE)
}

export const getDetailAcaraController = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    const { openAbsen } = req.query
    const token = req.headers.authorization?.replace("Bearer ", "")

    const acara = await getDetailAcaraService(id as string, openAbsen ? openAbsen as string : undefined, token)
    if (acara instanceof ErrorApp) {
        next(acara)
        return
    }
    return HandleResponse(res, 200, MESSAGE_CODE.SUCCESS, MESSAGES.SUCCESS.ACARA.GET, acara)
}