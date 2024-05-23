import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { EstudiantesModel } from '../../../shared/estudiantes/estudiantes.model';
import { EstudiantesService } from '../../../shared/estudiantes/estudiantes.service';

@Component({
  selector: 'app-estudiante',
  standalone: true,
  imports: [ RouterLink, CommonModule ],
  templateUrl: './estudiante.component.html',
  styleUrl: './estudiante.component.scss'
})
export class EstudianteComponent implements OnInit{

  estudiantes: Observable<EstudiantesModel[]> | undefined

  constructor(private estudianteservice: EstudiantesService, private router: Router) {}

  ngOnInit(): void {
    this.estudiantes = this.estudianteservice.obtenerEstudiantes();
  }

  agregarEstudiante() {
    this.router.navigate(['/listadoestudiante/agregar'])
  }

  borrarEstudiante(id: string) {
    this.estudianteservice.borrarEstudiante(id).subscribe(data => {
      console.log(data);
    })

    this.estudiantes = this.estudianteservice.obtenerEstudiantes();
  }

  actualizarEstudiante(id: string) {
    this.router.navigate(['/listadoestudiante/editar', id]);
  }

}
