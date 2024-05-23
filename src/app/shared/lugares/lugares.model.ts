export class LugaresModel {
    constructor(
       public id: string,
       public name_lugar: string,
       public ubicacion: string,
       public trabajo: string,
       public name_complete: string,
       public phone: string,
       public horas: number,
       public observacion: string 
    ){ }
}