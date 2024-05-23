export class EstudiantesModel {
    constructor(
        public id: string,
        public name_complete: string,
        public dni: string,
        public email: string,
        public phone: string,
        public address: string,
        public carrera: string,
        public year_study: string,
        public group_class: string,
        public hour_social: number,
        public empresa: string,
        public observation: string
    ) { }
}