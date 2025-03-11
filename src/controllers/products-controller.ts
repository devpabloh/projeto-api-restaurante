/* 
  No controller ficam as funções para tratar as requisições HTTP. como por exemplo a função de listar todos os produtos, ou a função de criar um produto, ou a função de atualizar um produto, ou a função de deletar um produto. 
*/

import { NextFunction, Request, Response } from "express";

class ProductController{

  async index(request: Request, response: Response, next: NextFunction){
    try{


      return response.json({message: "Ok"})
    }catch(error){
      next(error) // aqui estamos utilizando o next para passar o erro para a função de tratar os erros
    }
  }
}

export {ProductController}