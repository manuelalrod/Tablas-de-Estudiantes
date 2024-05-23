import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EstudiantesModel } from './estudiantes.model';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {

  BASE_URL = 'http://localhost:3000'

  constructor( private http: HttpClient) { }

  obtenerEstudiantes() {
    return this.http.get<EstudiantesModel[]>(this.BASE_URL+'/listadoestudiante');
  }

  obtenerEstudiante(id: string) {
    return this.http.get<EstudiantesModel[]>(`${this.BASE_URL}/listadoestudiante/${id}`);
  }

  agregarEstudiante(estudiante: EstudiantesModel) {
    return this.http.post<string>(`${this.BASE_URL}/listadoestudiante/agregar`, estudiante);
  }

  actualizarEstudiante(estudiante: EstudiantesModel) {
    return this.http.put<string>(`${this.BASE_URL}/listadoestudiante/actualizar/${estudiante.id}`, estudiante);
  }

  borrarEstudiante(id: string) {
    return this.http.delete<string>(`${this.BASE_URL}/listadoestudiante/borrar/${id}`);
  }  

}
