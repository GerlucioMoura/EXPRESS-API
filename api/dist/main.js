"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const filmes_js_1 = require("./dados/filmes.js");
dotenv_1.default.config();
const app = (0, express_1.default)();
const porta = process.env.PORTA || "4000";
// Middleware para aceitar JSON
app.use(express_1.default.json());
// 🟢 READ - listar todos
app.get("/filmes", (req, res) => {
    res.json(filmes_js_1.filmes);
});
// 🟢 READ - buscar por ID
app.get("/filmes/:id", (req, res) => {
    const { id } = req.params;
    const filme = filmes_js_1.filmes.find((f) => f.id.toUpperCase() === id.toUpperCase());
    if (!filme) {
        return res.status(404).json({ error: "Filme não encontrado" });
    }
    res.json(filme);
});
// 🟡 CREATE - adicionar novo
app.post("/filmes", (req, res) => {
    const novoFilme = req.body;
    if (!novoFilme.id || !novoFilme.titulo) {
        return res.status(400).json({ error: "Filme precisa ter id e título" });
    }
    filmes_js_1.filmes.push(novoFilme);
    res.status(201).json(novoFilme);
});
// ✏️ UPDATE - atualizar existente
app.put("/filmes/:id", (req, res) => {
    const { id } = req.params;
    const dadosAtualizados = req.body;
    const index = filmes_js_1.filmes.findIndex((f) => f.id.toUpperCase() === id.toUpperCase());
    if (index === -1) {
        return res.status(404).json({ error: "Filme não encontrado" });
    }
    filmes_js_1.filmes[index] = { ...filmes_js_1.filmes[index], ...dadosAtualizados, id: filmes_js_1.filmes[index].id };
    res.json({ message: "Filme atualizado com sucesso", filme: filmes_js_1.filmes[index] });
});
// 🔴 DELETE - remover existente
app.delete("/filmes/:id", (req, res) => {
    const { id } = req.params;
    const index = filmes_js_1.filmes.findIndex((f) => f.id.toUpperCase() === id.toUpperCase());
    if (index === -1) {
        return res.status(404).json({ error: "Filme não encontrado" });
    }
    const removido = filmes_js_1.filmes.splice(index, 1);
    res.json({ message: "Filme removido com sucesso", filme: removido[0] });
});
app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}!`);
});
