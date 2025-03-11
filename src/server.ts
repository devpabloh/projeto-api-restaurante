import express from "express";

import { routes } from "./routes";
import { errorHandling } from "./middlewares/error-handling";

const PORT = 3333; // criando uma variável que vai armazenar a porta que o servidor vai rodar

const app = express(); // criando uma variável que vai armazenar a aplicação express, isso significa que vai rodar a aplicação express 

app.use(express.json()) // utilizado para receber os dados no formato json

app.use(routes)

app.use(errorHandling)

/* 
    app.listen - vai ouvir a porta que foi definida na variável PORT, e vai executar uma função que vai mostrar uma mensagem no console.log quando o servidor for iniciado 
*/
app.listen( PORT, ()=>{
    console.log(`O servidor está rodando na porta ${PORT}`)
})