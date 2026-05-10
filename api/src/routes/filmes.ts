import { Router, Request, Response } from "express";
import { filmes } from "../dados/filmes";
import { Filme } from "../model/filme";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.json(filmes);
});

// outras rotas aqui...

export default router;
