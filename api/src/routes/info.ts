import { Router, Request, Response } from "express";
import { filmes } from "../dados/filmes";
import { Filme } from "../model/filme";
import { Genero } from "../model/genero";
import { Ator } from "../model/ator";
import { Diretor } from "../model/diretor";

const router = Router();

// Rota de gêneros
router.get("/generos", (req: Request, res: Response) => {
  const dados = new Set(
    filmes.flatMap((filme: Filme) =>
      filme.genero.map((g: Genero) => JSON.stringify(g))
    )
  );
  const arr = Array.from(dados).map((g) => JSON.parse(g as string));
  res.json(arr);
});

// Rota de atores
router.get("/atores", (req: Request, res: Response) => {
  const dados = new Set(
    filmes.flatMap((filme: Filme) =>
      filme.elenco.map((a: Ator) => JSON.stringify(a))
    )
  );
  const arr = Array.from(dados).map((a) => JSON.parse(a as string));
  res.json(arr);
});

// Rota de diretores
router.get("/diretores", (req: Request, res: Response) => {
  const dados = new Set(
    filmes.map((filme: Filme) => JSON.stringify(filme.diretor))
  );
  const arr = Array.from(dados).map((d) => JSON.parse(d as string));
  res.json(arr);
});

export default router;
