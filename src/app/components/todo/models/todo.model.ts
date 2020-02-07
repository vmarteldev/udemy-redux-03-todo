export class Todo {
  public id: number;
  public completado: boolean;
  //public texto: string;
  //   constructor(texto: string) {
  //     this.texto = texto;
  //   }
  constructor(public texto: string) {
    this.texto =
      texto.charAt(0).toUpperCase() + texto.substring(1).toLowerCase();
    this.completado = false;
    this.id = Math.random();
  }
}
