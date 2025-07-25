export interface Opcion {
  texto: string;
  esCorrecta: boolean;
}

export interface Pregunta {
  id: number;
  texto: string;
  opciones: Opcion[];
}
