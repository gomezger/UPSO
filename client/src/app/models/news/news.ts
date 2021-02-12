export class News {
  constructor(
    public id: number,
    public titulo: string,
    public imagen: string,
    public descripcion: string,
    public created_at: Date,
    public update_at: Date
  ){ }
}