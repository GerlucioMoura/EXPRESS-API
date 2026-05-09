import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { filmes } from "./dados/filmes.js";
import { Filme } from "./model/filme.js";

dotenv.config();

const app = express();
const porta = process.env.PORTA || "4000";

// Middleware para aceitar JSON
app.use(express.json());

// 🟢 READ - listar todos
app.get("/filmes", (req: Request, res: Response) => {
  res.json(filmes);
});

// 🟢 READ - buscar por ID
app.get("/filmes/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const filme = filmes.find((f: Filme) => f.id.toUpperCase() === id.toUpperCase());

  if (!filme) {
    return res.status(404).json({ error: "Filme não encontrado" });
  }

  res.json(filme);
});

// 🟡 CREATE - adicionar novo
app.post("/filmes", (req: Request, res: Response) => {
  const novoFilme: Filme = req.body;

  if (!novoFilme.id || !novoFilme.titulo) {
    return res.status(400).json({ error: "Filme precisa ter id e título" });
  }

  filmes.push(novoFilme);
  res.status(201).json(novoFilme);
});

// ✏️ UPDATE - atualizar existente
app.put("/filmes/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const dadosAtualizados: Filme = req.body;

  const index = filmes.findIndex((f: Filme) => f.id.toUpperCase() === id.toUpperCase());

  if (index === -1) {
    return res.status(404).json({ error: "Filme não encontrado" });
  }

  filmes[index] = { ...filmes[index], ...dadosAtualizados, id: filmes[index].id };

  res.json({ message: "Filme atualizado com sucesso", filme: filmes[index] });
});

// 🔴 DELETE - remover existente
app.delete("/filmes/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const index = filmes.findIndex((f: Filme) => f.id.toUpperCase() === id.toUpperCase());

  if (index === -1) {
    return res.status(404).json({ error: "Filme não encontrado" });
  }

  const removido = filmes.splice(index, 1);
  res.json({ message: "Filme removido com sucesso", filme: removido[0] });
});

app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}!`);
});
