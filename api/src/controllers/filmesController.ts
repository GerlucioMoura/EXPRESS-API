import { Request, Response } from "express";
import { filmes } from "../dados/filmes";
import { Filme } from "../model/filme";

export const listarFilmes = (req: Request, res: Response) => {
  res.json(filmes);
};

export const buscarFilmePorId = (req: Request, res: Response) => {
  const { id } = req.params;
const filme = filmes.find((f: Filme) => f.id.toLowerCase() === id.toLowerCase());

  if (!filme) {
    return res.status(404).json({ erro: "Filme não encontrado" });
  }

  res.json(filme);
};

export const adicionarFilme = (req: Request, res: Response) => {
  const { titulo, ano } = req.body;

  if (!titulo || !ano) {
    return res.status(400).json({ erro: "Título e ano são obrigatórios" });
  }

  const novoFilme: Filme = {
  id: `FIL${(filmes.length + 1).toString().padStart(3, "0")}`,
  titulo,
  ano,
  genero: [],
  diretor: {
    id: `DIR${(filmes.length + 1).toString().padStart(3, "0")}`,
    nome: "Desconhecido",
    nascimento: "1900-01-01",   // agora é string
    nacionalidade: "Desconhecida"
  },
  elenco: [],
  sinopse: "Sem sinopse definida"
};



filmes.push(novoFilme);
res.status(201).json({ msg: "Filme cadastrado com sucesso!", filme: novoFilme });
};

export const atualizarFilme = (req: Request, res: Response) => {
  const { id } = req.params;
  const { titulo, ano } = req.body;

  const index = filmes.findIndex((f: Filme) => f.id.toLowerCase() === id.toLowerCase());

  if (index === -1) {
    return res.status(404).json({ erro: "Filme não encontrado" });
  }

  filmes[index] = { ...filmes[index], titulo, ano };
  res.json({ msg: "Filme atualizado com sucesso!", filme: filmes[index] });
};


export const removerFilme = (req: Request, res: Response) => {
  const { id } = req.params;
const index = filmes.findIndex((f: Filme) => f.id.toLowerCase() === id.toLowerCase());


  if (index === -1) {
    return res.status(404).json({ erro: "Filme não encontrado" });
  }

  const removido = filmes.splice(index, 1);
  res.json({ msg: "Filme removido com sucesso!", filme: removido[0] });
};
