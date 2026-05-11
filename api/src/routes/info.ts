
import { Router } from "express";
import { listarGeneros, listarAtores, listarDiretores } from "../controllers/infoController";

const router = Router();

router.get("/", (req, res) => {
  res.json({ msg: "Bem-vindo à API de informações!" });
});

router.get("/generos", listarGeneros);
router.get("/atores", listarAtores);
router.get("/diretores", listarDiretores);

export default router;



//import { Router } from "express";
//import { listarGeneros, listarAtores, listarDiretores } from "../controllers/infoController";

//const router = Router();

//router.get("/generos", listarGeneros);
//router.get("/atores", listarAtores);
//router.get("/diretores", listarDiretores);

//export default router;
