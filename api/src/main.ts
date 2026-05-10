import express from "express";
import dotenv from "dotenv";
import filmesRoutes from "./routes/filmes";
import infoRoutes from "./routes/info";

dotenv.config();

const app = express();
const porta = process.env.PORTA || "4000";

// Middleware para aceitar JSON
app.use(express.json());

// Rotas
app.use("/filmes", filmesRoutes);
app.use("/info", infoRoutes);

app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}!`);
});
