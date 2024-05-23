import { LugarVoluntariadoComponent } from './pages/lugares-voluntariado/lugar-voluntariado/lugar-voluntariado.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { EstudianteComponent } from './pages/lista-estudiante/estudiante/estudiante.component';
import { EstudiantesService } from './shared/estudiantes/estudiantes.service';
import { LugaresService } from './shared/lugares/lugares.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    EstudianteComponent,
    HttpClientModule,
    FormsModule,
    LugarVoluntariadoComponent
   ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [EstudiantesService, LugaresService]
})
export class AppComponent {
  title = 'estudiantesUni';
}
