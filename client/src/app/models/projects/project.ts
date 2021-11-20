import { Investigator } from './../investigator';
export class Project {
  constructor(
    public id: number,
    public titulo: string,
    public titulo_url: string,
    public subtitulo: string,
    public descripcion: string,
    public created_at: string,
    public updated_at: string,
    public investigators: Array<Investigator>
  ) { }
}
