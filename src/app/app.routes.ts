import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'listadoestudiante',
        loadComponent: () => import('./pages/lista-estudiante/estudiante/estudiante.component').then((m) => m.EstudianteComponent)
    },

    {
        path: 'listadoestudiante/agregar', 
        loadComponent: () => import('./pages/lista-estudiante/agregar-estudiante/agregar-estudiante.component').then((m) => m.AgregarEstudianteComponent)
    },

    {
        path: 'listadoestudiante/editar/:dni',
        loadComponent: () => import('./pages/lista-estudiante/agregar-estudiante/agregar-estudiante.component').then((m) => m.AgregarEstudianteComponent)
    },

    {
        path: '',
        redirectTo: 'listadoestudiante',
        pathMatch: 'full',
    },
];
