import { Genero } from "./genero.js";
import { Diretor } from "./diretor.js";
import { Ator } from "./ator.js";

export interface Filme {
  id: string;
  titulo: string;
  ano: number;
  genero: Genero[];
  diretor: Diretor;
  elenco: Ator[];
  sinopse: string;
}

