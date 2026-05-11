import { Router } from "express";
import { listarFilmes, buscarFilmePorId, adicionarFilme, atualizarFilme, removerFilme } from "../controllers/filmesController";
import { validarFilme } from "../middlewares/validarFilme";

const router = Router();

router.get("/", listarFilmes);
router.get("/:id", buscarFilmePorId);
router.post("/", validarFilme, adicionarFilme); // aqui entra a validação
router.put("/:id", atualizarFilme);
router.delete("/:id", removerFilme);

export interface Filme {
  id: number;
  titulo: string;
  ano: number;
}


export default router;



