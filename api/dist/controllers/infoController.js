"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listarDiretores = exports.listarAtores = exports.listarGeneros = void 0;
const filmes_1 = require("../dados/filmes");
const listarGeneros = (req, res) => {
    const dados = new Set(filmes_1.filmes.flatMap((filme) => filme.genero.map((g) => JSON.stringify(g))));
    const arr = Array.from(dados).map((g) => JSON.parse(g));
    res.json(arr);
};
exports.listarGeneros = listarGeneros;
const listarAtores = (req, res) => {
    const dados = new Set(filmes_1.filmes.flatMap((filme) => filme.elenco.map((a) => JSON.stringify(a))));
    const arr = Array.from(dados).map((a) => JSON.parse(a));
    res.json(arr);
};
exports.listarAtores = listarAtores;
const listarDiretores = (req, res) => {
    const dados = new Set(filmes_1.filmes.map((filme) => JSON.stringify(filme.diretor)));
    const arr = Array.from(dados).map((d) => JSON.parse(d));
    res.json(arr);
};
exports.listarDiretores = listarDiretores;
