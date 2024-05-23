import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LugaresModel } from '../../../shared/lugares/lugares.model';
import { LugaresService } from '../../../shared/lugares/lugares.service';

@Component({
  selector: 'app-agregar-lugar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './agregar-lugar.component.html',
  styleUrls: ['./agregar-lugar.component.scss']
})
export class AgregarLugarComponent implements OnInit {

  id = '';
  lugar = new LugaresModel("", "", "", "", "", "", 0, "")

  constructor(
    private lugaresService: LugaresService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      console.log("Editar");
      this.lugaresService.obtenerLugar(this.id).subscribe(data => {
        this.lugar = data[0];
      });
    } else {
      console.log("Crear");
    }
  }

  onSubmit() {
    console.log('onSubmit');

    this.lugar.name_lugar = this.lugar.name_lugar || '';
    this.lugar.ubicacion = this.lugar.ubicacion || '';
    this.lugar.trabajo = this.lugar.trabajo || '';
    this.lugar.name_complete = this.lugar.name_complete || '';
    this.lugar.phone = this.lugar.phone || '';
    this.lugar.horas = this.lugar.horas || 0;
    this.lugar.observacion = this.lugar.observacion || '';

    if (this.lugar.id) {
      this.lugaresService.actualizarLugar(this.lugar).subscribe(data => {
        alert(data);
        this.router.navigate(['/lugaresvoluntariado']);
      });
    } else {
      console.log('Crear');
      this.lugaresService.agregarLugar(this.lugar).subscribe(data => {
        alert(data);
        this.router.navigate(['/lugaresvoluntariado']);
      });
    }
  }
}
