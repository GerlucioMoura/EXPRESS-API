"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const infoController_1 = require("../controllers/infoController");
const router = (0, express_1.Router)();
router.get("/generos", infoController_1.listarGeneros);
router.get("/atores", infoController_1.listarAtores);
router.get("/diretores", infoController_1.listarDiretores);
exports.default = router;
