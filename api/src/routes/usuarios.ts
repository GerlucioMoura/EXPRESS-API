// src/routes/usuarios.ts
// Rota para cadastro de usuários
import { Router } from "express";
import { cadastrarUsuario } from "../controllers/usuariosController";

const router = Router();

// rota pública para cadastro de usuário
router.post("/", cadastrarUsuario);

export default router;
