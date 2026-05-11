import express from "express";
import dotenv from "dotenv";
import { logger } from "./middlewares/logger";
import { errorHandler } from "./middlewares/errorHandler";
import filmesRoutes from "./routes/filmes";
import infoRoutes from "./routes/info";

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

// Middleware de tratamento de erros (sempre por último)
app.use(errorHandler);

app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}!`);
});
