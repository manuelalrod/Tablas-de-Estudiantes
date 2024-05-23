import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LugaresModel } from './lugares.model';

@Injectable({
  providedIn: 'root'
})
export class LugaresService {

  BASE_URL = 'http://localhost:3000'

  constructor( private http: HttpClient ) { }

  obtenerLugares(){
    return this.http.get<LugaresModel[]>(this.BASE_URL+'/lugaresvoluntariado');
  }

  obtenerLugar(id: string) {
    return this.http.get<LugaresModel[]>(`${this.BASE_URL}/lugaresvoluntariado/${id}`);
  }

  agregarLugar(lugar: LugaresModel){
    return this.http.post<string>(`${this.BASE_URL}/lugaresvoluntariado/agregar`, lugar);
  }

  actualizarLugar(lugar: LugaresModel){
    return this.http.put<string>(`${this.BASE_URL}/lugaresvoluntariado/actualizar/${lugar.id}`, lugar)
  }

  borrarLugar(id: string) {
    return this.http.delete<string>(`${this.BASE_URL}/lugaresvoluntariado/borrar/${id}`)
  }
}
