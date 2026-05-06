import express from "express";
import {configDotenv} from "dotenv";
configDotenv();

const app = express();
const porta = process.env.PORTA

// Rota de teste para verificar se o servidor está funcionando  
app.get("/ping", (req, res) => {
    res.json({ message: "pong" });
});

app.listen(porta, () => {
    console.log("Servidor rodando na porta ${porta}!");

});


