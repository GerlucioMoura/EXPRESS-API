"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const logger_1 = require("./middlewares/logger");
const errorHandler_1 = require("./middlewares/errorHandler");
const filmes_1 = __importDefault(require("./routes/filmes"));
const info_1 = __importDefault(require("./routes/info"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const porta = process.env.PORTA || "4000";
// Middleware para aceitar JSON
app.use(express_1.default.json());
// Middleware global de log
app.use(logger_1.logger);
// Rotas
app.use("/filmes", filmes_1.default);
app.use("/info", info_1.default);
// Middleware de tratamento de erros (sempre por último)
app.use(errorHandler_1.errorHandler);
app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}!`);
});
