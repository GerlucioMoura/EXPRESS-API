import { Request, Response, NextFunction } from "express";

export function validarFilme(req: Request, res: Response, next: NextFunction) {
  const { titulo, ano } = req.body;

  if (!titulo || !ano) {
    return res.status(400).json({ erro: "Título e ano são obrigatórios" });
  }

  next();
}
