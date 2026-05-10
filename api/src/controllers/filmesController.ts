import { Request, Response } from "express";
import { filmes } from "../dados/filmes";
import { Filme } from "../model/filme";

export const listarFilmes = (req: Request, res: Response) => {
  res.json(filmes);
};

export const buscarFilmePorId = (req: Request, res: Response) => {
  const { id } = req.params;
  const filme = filmes.find((f: Filme) => f.id.toUpperCase() === id.toUpperCase());

  if (!filme) {
    return res.status(404).json({ error: "Filme não encontrado" });
  }

  res.json(filme);
};

export const adicionarFilme = (req: Request, res: Response) => {
  const novoFilme: Filme = req.body;

  if (!novoFilme.id || !novoFilme.titulo) {
    return res.status(400).json({ error: "Filme precisa ter id e título" });
  }

  filmes.push(novoFilme);
  res.status(201).json(novoFilme);
};

export const atualizarFilme = (req: Request, res: Response) => {
  const { id } = req.params;
  const dadosAtualizados: Filme = req.body;

  const index = filmes.findIndex((f: Filme) => f.id.toUpperCase() === id.toUpperCase());

  if (index === -1) {
    return res.status(404).json({ error: "Filme não encontrado" });
  }

  filmes[index] = { ...filmes[index], ...dadosAtualizados, id: filmes[index].id };

  res.json({ message: "Filme atualizado com sucesso", filme: filmes[index] });
};

export const removerFilme = (req: Request, res: Response) => {
  const { id } = req.params;
  const index = filmes.findIndex((f: Filme) => f.id.toUpperCase() === id.toUpperCase());

  if (index === -1) {
    return res.status(404).json({ error: "Filme não encontrado" });
  }

  const removido = filmes.splice(index, 1);
  res.json({ message: "Filme removido com sucesso", filme: removido[0] });
};
