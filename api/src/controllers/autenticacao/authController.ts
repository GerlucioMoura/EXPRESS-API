import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const usuarioFake = {
  id: "USR001",
  nome: "Gerlúcio Moura",
  email: "gerlucio@example.com",
  senhaHash: bcrypt.hashSync("123456", 8)
};

const segredoJWT = process.env.SEGREDO_JWT || "minha_chave_secreta";

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

  // Decodificar token para logar payload
  const decoded = jwt.decode(token) as any;
  console.log("Token gerado com payload:");
  console.log(`Email: ${decoded.email}`);
  console.log(`Emitido em (iat): ${decoded.iat} → ${new Date(decoded.iat * 1000).toISOString()}`);
  console.log(`Expira em (exp): ${decoded.exp} → ${new Date(decoded.exp * 1000).toISOString()}`);

  res.json({ msg: "Login realizado com sucesso!", token });
};
