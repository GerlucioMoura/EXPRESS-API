import express from "express";
import dotenv from "dotenv";
import { logger } from "./middlewares/logger";
import { errorHandler } from "./middlewares/errorHandler";
import filmesRoutes from "./routes/filmes";
import infoRoutes from "./routes/info";
import { login } from "./controllers/autenticacao/authController"; // rota de login pública
import { validarFilme } from "./middlewares/validarFilme";
import { autenticarJWT } from "./middlewares/authMiddleware";
import { cadastrarUsuario } from "./controllers/usuariosController";

dotenv.config();

const app = express();
const porta = process.env.PORTA || "4000";

// Middleware para aceitar JSON
app.use(express.json());

// Middleware global de log
app.use(logger);

// Rotas públicas
app.post("/login", login);
app.post("/usuarios", cadastrarUsuario);
app.use("/filmes", filmesRoutes);
app.use("/info", infoRoutes);
app.use("/login", login);   // rotas publicas de login
app.get("/erro", () => {
  throw new Error("Erro de teste!");
});

// Rotas protegidas
app.use("/filmes", autenticarJWT, filmesRoutes);

// Middleware de tratamento de erros (sempre por último)
app.use(errorHandler);

app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}!`);
});

app.post("/filmes", validarFilme, (req, res) => {
  res.json({ msg: "Filme cadastrado com sucesso!", filme: req.body });
});






