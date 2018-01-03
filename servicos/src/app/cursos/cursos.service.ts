import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

  private cursos: string[] = ['Java', 'Angular', 'Python', 'Android'];

  public getCursos() {
    return this.cursos;
  }

  public addCurso(curso: string) {
    this.cursos.push(curso);
  }
}
