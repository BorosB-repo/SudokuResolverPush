import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ThinkerSerivce } from '../services/thinker.service';
import { Observer, from } from 'rxjs';
import { SolutionType, StarterInfo } from '../models/interfaces';

@Component({
  selector: 'solver-page',
  templateUrl: './solver-page.component.html',
  styleUrls: ['./solver-page.component.scss']
})
export class SolverPageComponent implements OnInit {
  solution: FormGroup;



  lastValue: SolutionType = {};
  currentState: Array<Array<StarterInfo>>;


  constructor(private readonly fb: FormBuilder,
    private readonly thinker: ThinkerSerivce
  ) {

  }

  ngOnInit() {
    this.createEmptyGroup();
    this.createTrueOrFalseArray();
    this.solution.valueChanges.subscribe(x => {
      Object.keys(x).forEach(key => {
        if (x[key] != '')
          this.lastValue[key] = x[key]
      });
    });
  }

  private createEmptyGroup() {
    this.solution = this.fb.group({});
    for (var y = 0; y < 9; y++) {
      for (var x = 0; x < 9; x++) {
        this.solution.addControl('x' + (y + 1) + 'y' + (x + 1), this.fb.control(''));
      }
    }
    console.log(this.solution);
  }

  private createTrueOrFalseArray() {
    this.currentState = new Array<Array<StarterInfo>>();
    for (var i = 0; i < 9; i++) {
      const newArray: Array<StarterInfo> = new Array<StarterInfo>();
      Object.keys(this.solution.value).forEach(key => {
        const newStarterInfo: StarterInfo = {
          canBe: true,
          coordinates: key
        }
        newArray.push(newStarterInfo);
      })
      this.currentState.push(newArray);
    }
    console.log(this.currentState);
  }
}

