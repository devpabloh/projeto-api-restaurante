/* 
    O middleware de tratar os erros é uma função que vai ser utilizada como middleware em todas as rotas. 
    O middleware de tratar os erros vai ser utilizado quando ocorrer um erro que não foi gerenciado por uma função

*/

import { AppError } from "../utils/appError";
import { Request, Response, NextFunction } from "express";

export function errorHandling(error: any, request: Request, response: Response, next: NextFunction ){
    if(error instanceof AppError ){
        return response.status(error.statusCode).json({message: error.massage})
    }

    return response.status(500).json({message: error.message})
}