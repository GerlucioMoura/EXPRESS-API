// usuariosController.ts → cadastra novos usuários com senha 
// criptografada usando bcrypt.
import { Request, Response } from "express";
import bcrypt from "bcryptjs";

interface Usuario {
  id: string;
  nome: string;
  email: string;
  senhaHash: string;
}

const usuarios: Usuario[] = [];

export const cadastrarUsuario = (req: Request, res: Response) => {
  const { nome, email, senha } = req.body;

  // Verifica se já existe
  if (usuarios.find(u => u.email === email)) {
    return res.status(400).json({ erro: "Usuário já cadastrado" });
  }

  // Criptografa senha
  const senhaHash = bcrypt.hashSync(senha, 8);

  const novoUsuario: Usuario = {
    id: `USR${(usuarios.length + 1).toString().padStart(3, "0")}`,
    nome,
    email,
    senhaHash
  };

  usuarios.push(novoUsuario);

  res.status(201).json({ msg: "Usuário cadastrado com sucesso!", usuario: novoUsuario });
};
