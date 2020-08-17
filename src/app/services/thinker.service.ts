import { Injectable } from "@angular/core";
import { from } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ThinkerSerivce {
  lines: Array<Array<string>> = new Array<Array<string>>();
  blocks: Array<Array<string>> = new Array<Array<string>>();
  columns: Array<Array<string>> = new Array<Array<string>>();
  constructor() {
    this.createArrays();
  }
  private createArrays() {
    for (var x = 0; x < 9; x++) {
      let column: Array<string> = new Array<string>();
      let line: Array<string> = new Array<string>();
      for (var y = 0; y < 9; y++) {
        column.push('x' + (x + 1) + 'y' + (y + 1));
        line.push('x' + (y + 1) + 'y' + (x + 1));
      }
      this.columns.push(column);
      this.lines.push(line);

      


    }






    console.log('lines: ')
    console.log(this.lines);
    console.log('columns: ')
    console.log(this.columns);
  }

  public getBlockOf(coordiante: string): Array<string> {

    return [];
  }

  public getLineOf(coordinate: string): Array<string> {

    return [];
  }

  public getColumnOf(coordinate: string): Array<string> {

    return [];
  }
}
