import { Genero } from "./genero";
import { Diretor } from "./diretor";
import { Ator } from "./ator";

export interface Filme {
  id: string;
  titulo: string;
  ano: number;
  genero: Genero[];
  diretor: Diretor;
  elenco: Ator[];
  sinopse: string;
}

