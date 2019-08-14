
export interface InfoPagina {
  titulo?: string;
  email?: string;
  nombre_corto?: string;
  pagina_autor?: string;
  facebook?: string;
  instagram?: string;
  twitter?: string;
  tumblr?: string;
  equipo_trabajo?: InfoEquipo[];
}

export interface InfoEquipo {
  url?: string;
  nombre?: string;
  frase?: string;
  subtitulo?: string;
}
