import { Component, OnInit } from '@angular/core';
import { EstudiantesModel } from '../../../shared/estudiantes/estudiantes.model';
import { EstudiantesService } from '../../../shared/estudiantes/estudiantes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agregar-estudiante',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './agregar-estudiante.component.html',
  styleUrl: './agregar-estudiante.component.scss'
})
export class AgregarEstudianteComponent implements OnInit{

  id = '';
  estudiante = new EstudiantesModel("","", "", "", "", "", "", "", "", 0, "", ""); 

  constructor(
    private estudianteservice : EstudiantesService, 
    private route: ActivatedRoute, 
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if(this.id) {
      console.log("Editar");
      this.estudianteservice.obtenerEstudiante(this.id).subscribe(data => {
        this.estudiante = data[0]
      })
    } else{
      console.log("Crear");
    }
  }

  onSubmit() {
    console.log('onSubmit');

    if(this.estudiante.id) {
      this.estudianteservice.actualizarEstudiante(this.estudiante).subscribe(data => {
        alert(data)
        this.router.navigate(['/listadoestudiante'])
      })
    } else {
      console.log('crear');
      this.estudianteservice.agregarEstudiante(this.estudiante).subscribe(data => {
        alert(data);
        this.router.navigate(['/listadoestudiante'])
      })
    }
  }

}
