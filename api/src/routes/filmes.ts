import { Router } from "express";
import { listarFilmes, buscarFilmePorId, adicionarFilme, atualizarFilme, removerFilme } from "../controllers/filmesController";

const router = Router();

router.get("/", listarFilmes);
router.get("/:id", buscarFilmePorId);
router.post("/", adicionarFilme);
router.put("/:id", atualizarFilme);
router.delete("/:id", removerFilme);

export default router;

