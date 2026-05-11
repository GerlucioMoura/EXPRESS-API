import { Request, Response, NextFunction } from "express";

export function autenticar(req: Request, res: Response, next: NextFunction) {
  const token = req.headers["authorization"];

  if (token === "secreta123") {
    next(); // autorizado
  } else {
    res.status(401).json({ erro: "Não autorizado" });
  }
}
