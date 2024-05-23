import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { LugaresModel } from '../../../shared/lugares/lugares.model';
import { LugaresService } from '../../../shared/lugares/lugares.service';

@Component({
  selector: 'app-lugar-voluntariado',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './lugar-voluntariado.component.html',
  styleUrl: './lugar-voluntariado.component.scss'
})
export class LugarVoluntariadoComponent implements OnInit{

  lugares: Observable<LugaresModel[]> | undefined

  constructor(private lugaresservice: LugaresService, private router: Router) {}

  ngOnInit(): void {
    this.lugares = this.lugaresservice.obtenerLugares();
  }

  agregarLugar() {
    this.router.navigate(['/lugaresvoluntariado/agregar'])
  }

  borrarLugar(id: string) {
    this.lugaresservice.borrarLugar(id).subscribe(data => {
      console.log(data)
    })
    this.lugares = this.lugaresservice.obtenerLugares();
  }

}
