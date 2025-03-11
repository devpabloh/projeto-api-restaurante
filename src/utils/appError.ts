/* 
    O AppError é um erro que vamos criar para nossas funções, ele vai ser usado apenas quando o erro não for devido a um erro do servidor, mas sim devido a um erro do usuário. 
*/

class AppError {
    massage: string
    statusCode: number 

    /* 
        O constructor é um metodo especial que permite criar objetos da classe , nesse constructor estamos recebendo dois parametros, o primeiro é o tipo string , o segundo é o tipo number , e esses dois parametros vamos atribuir a nossas variáveis.
    */

    constructor(message: string, statusCode: number =400){
        this.massage = message
        this.statusCode = statusCode
    }
}

export {AppError}