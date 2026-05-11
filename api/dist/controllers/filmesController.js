"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removerFilme = exports.atualizarFilme = exports.adicionarFilme = exports.buscarFilmePorId = exports.listarFilmes = void 0;
const filmes_1 = require("../dados/filmes");
const listarFilmes = (req, res) => {
    res.json(filmes_1.filmes);
};
exports.listarFilmes = listarFilmes;
const buscarFilmePorId = (req, res) => {
    const { id } = req.params;
    const filme = filmes_1.filmes.find((f) => f.id.toUpperCase() === id.toUpperCase());
    if (!filme) {
        return res.status(404).json({ error: "Filme não encontrado" });
    }
    res.json(filme);
};
exports.buscarFilmePorId = buscarFilmePorId;
const adicionarFilme = (req, res) => {
    const novoFilme = req.body;
    if (!novoFilme.id || !novoFilme.titulo) {
        return res.status(400).json({ error: "Filme precisa ter id e título" });
    }
    filmes_1.filmes.push(novoFilme);
    res.status(201).json(novoFilme);
};
exports.adicionarFilme = adicionarFilme;
const atualizarFilme = (req, res) => {
    const { id } = req.params;
    const dadosAtualizados = req.body;
    const index = filmes_1.filmes.findIndex((f) => f.id.toUpperCase() === id.toUpperCase());
    if (index === -1) {
        return res.status(404).json({ error: "Filme não encontrado" });
    }
    filmes_1.filmes[index] = { ...filmes_1.filmes[index], ...dadosAtualizados, id: filmes_1.filmes[index].id };
    res.json({ message: "Filme atualizado com sucesso", filme: filmes_1.filmes[index] });
};
exports.atualizarFilme = atualizarFilme;
const removerFilme = (req, res) => {
    const { id } = req.params;
    const index = filmes_1.filmes.findIndex((f) => f.id.toUpperCase() === id.toUpperCase());
    if (index === -1) {
        return res.status(404).json({ error: "Filme não encontrado" });
    }
    const removido = filmes_1.filmes.splice(index, 1);
    res.json({ message: "Filme removido com sucesso", filme: removido[0] });
};
exports.removerFilme = removerFilme;
