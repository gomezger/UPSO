import { Paper } from './paper';
export class PaperComment {

  constructor(
    public id: number,
    public paper_id: number,
    public nombre: string,
    public email: string,
    public descripcion: string,
    public profesion: string,
    public paper: Paper,
    public aprobado: boolean,
    public created_at: Date,
    public updated_at: Date
  ) { }
}
