import { Paper } from './paper';

export class PaperDownload {
  constructor(
    public id: number,
    public email: string,
    public nombre: string,
    public nacimiento: Date,
    public profesion: string,
    public download: boolean,
    public paper_id: number,
    public paper: Paper,
    public created_at: Date,
    public updated_at: Date
  ) { }
}
