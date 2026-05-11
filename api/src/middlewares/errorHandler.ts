import { Request, Response, NextFunction } from "express";

export function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
  console.error("Erro capturado:", err);
  res.status(500).json({ erro: "Erro interno do servidor" });
}
