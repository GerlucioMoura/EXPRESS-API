import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

// Usuário de exemplo (depois você pode buscar em banco de dados)
const usuarioFake = {
  id: "USR001",
  nome: "Gerlúcio Moura",
  email: "gerlucio@example.com",
  senhaHash: bcrypt.hashSync("123456", 8) // senha criptografada
};

// Segredo do JWT (ideal usar variável de ambiente)
const segredoJWT = "minha_chave_secreta";

export const login = (req: Request, res: Response) => {
  const { email, senha } = req.body;

  if (email !== usuarioFake.email) {
    return res.status(401).json({ erro: "Usuário não encontrado" });
  }

  const senhaValida = bcrypt.compareSync(senha, usuarioFake.senhaHash);
  if (!senhaValida) {
    return res.status(401).json({ erro: "Senha inválida" });
  }

  // Gerar token
  const token = jwt.sign(
    { id: usuarioFake.id, email: usuarioFake.email },
    segredoJWT,
    { expiresIn: "1h" }
  );

  res.json({ msg: "Login realizado com sucesso!", token });
};
