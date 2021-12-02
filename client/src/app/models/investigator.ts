export class Investigator {
  constructor(
    public id: number,
    public nombre: String,
    public titulo: String,
    public descripcion: String,
    public linkedin: String,
    public pagina: String,
    public mail: String,
    public imagen: String,
    public show: boolean = true,
    public cv: string,
    public created_at: Date,
    public updated_at: Date
  ) { }
}
