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
        path: 'listadoestudiante/editar/:id',
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
    path: 'lugaresvoluntariado/agregar',
    loadComponent: () => import('./pages/lugares-voluntariado/agregar-lugar/agregar-lugar.component').then((m) => m.AgregarLugarComponent)
   },
   {
    path: 'lugaresvoluntariado/editar/:id',
    loadComponent: () => import('./pages/lugares-voluntariado/agregar-lugar/agregar-lugar.component').then((m) => m.AgregarLugarComponent)
   },
   {
    path: 'horasvoluntariado',
    loadComponent: () => import('./pages/horas-voluntariados/horas-voluntariado/horas-voluntariado.component').then((m) => m.HorasVoluntariadoComponent)
    }
];
