import { Investigator } from '../investigator';

export class Paper {
  constructor(
    public id: number,
    public titulo: string,
    public titulo_url: string,
    public pdf: string,
    public descripcion: string,
    public created_at: string,
    public updated_at: string,
    public investigators: Array<Investigator>
  ) { }
}
