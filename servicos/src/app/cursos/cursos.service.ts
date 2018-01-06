import { LogService } from './../shared/log.service';
import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {
  private cursos: string[] = ['Java', 'Angular', 'Python', 'Android'];

  constructor(private logService: LogService) {}

  public getCursos() {
    this.logService.consoleLog('Obtendo lista de cursos');
    return this.cursos;
  }

  public addCurso(curso: string) {
    this.logService.consoleLog(`Adicionando mais um curso ${curso}`);
    this.cursos.push(curso);
  }
}
