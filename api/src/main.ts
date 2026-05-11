import express from "express";
import dotenv from "dotenv";
import { logger } from "./middlewares/logger";
import { errorHandler } from "./middlewares/errorHandler";
import filmesRoutes from "./routes/filmes";
import infoRoutes from "./routes/info";
import { validarFilme } from "./middlewares/validarFilme";

dotenv.config();

const app = express();
const porta = process.env.PORTA || "4000";

// Middleware para aceitar JSON
app.use(express.json());

// Middleware global de log
app.use(logger);

// Rotas
app.use("/filmes", filmesRoutes);
app.use("/info", infoRoutes);

app.get("/erro", () => {
  throw new Error("Erro de teste!");
});

// Middleware de tratamento de erros (sempre por último)
app.use(errorHandler);

app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}!`);
});

app.post("/filmes", validarFilme, (req, res) => {
  res.json({ msg: "Filme cadastrado com sucesso!", filme: req.body });
});






