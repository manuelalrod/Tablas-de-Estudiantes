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

    {
        path: 'lugaresvoluntariado',
        loadComponent: () => import('./pages/lugares-voluntariado/lugar-voluntariado/lugar-voluntariado.component').then((m) => m.LugarVoluntariadoComponent)
    },

    {
        path: 'horasvoluntariado',
        loadComponent: () => import('./pages/horas-voluntariados/horas-voluntariado/horas-voluntariado.component').then((m) => m.HorasVoluntariadoComponent)
    },
];
