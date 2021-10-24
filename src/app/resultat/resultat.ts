import { Test } from './../tests/test';
export interface Resultat {
  id: number;
  text: string;
}
export interface CreateResultat {
  text: string;
  test?: Test;
}
