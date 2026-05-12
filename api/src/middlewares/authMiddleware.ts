import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const segredoJWT = "minha_chave_secreta"; // ideal usar variável de ambiente

export const autenticarJWT = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // formato: Bearer <token>

  if (!token) {
    return res.status(403).json({ erro: "Token não fornecido" });
  }

  try {
  const decoded = jwt.verify(token, segredoJWT) as any;

  // Log detalhado no terminal
  console.log("Payload JWT:", decoded);
  console.log(`Email: ${decoded.email}`);

  const dataAtual = Math.floor(Date.now() / 1000);
  console.log(`Data atual: ${new Date(dataAtual * 1000).toISOString()}`);
  console.log(`Expira em: ${new Date(decoded.exp * 1000).toISOString()}`);

  (req as any).usuario = decoded;
  next();
} catch (err) {
  return res.status(401).json({ erro: "Token inválido ou expirado" });
}
};