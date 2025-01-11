import { type Response } from 'express'
import { MetaResponse } from '../interface/response-interface'
import { ApiResponse } from './api-response'

export function HandleResponse<Res = unknown>(
    res: Response,
    status: number,
    code: string,
    message: string,
    data?: Res,
    meta?: MetaResponse
) {
    return res.status(status).jsonp(ApiResponse<Res>({ status, message, data, code, meta }))
}