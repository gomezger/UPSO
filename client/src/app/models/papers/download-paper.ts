import { Paper } from './paper';

export class DownloadPaper {
  constructor(
    public id: number,
    public email: string,
    public nombre: string,
    public nacimiento: Date,
    public profesion: string,
    public paper_id: number,
    public paper: Paper,
    public created_at: Date,
    public updated_at: Date
  ) { }
}
