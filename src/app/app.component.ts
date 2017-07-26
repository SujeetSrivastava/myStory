import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
  group
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('divState1', [
      state('normal', style({
        'background-color': 'lightgray',
        transform: 'translateX(0px)',
        display:'none'
      })),
      state('highlighted', style({
        'background-color': '#f2f2f2',
        transform: 'translateX(100px)',
        display:'block'
      })),
      transition('normal <=> highlighted', animate(300)),
      // transition('highlighted => normal', animate(800))
    ]),
    trigger('divState2', [
      state('normal', style({
        'background-color': 'lightgray',
        transform: 'translateX(0)',
        display:'none'
      })),
      state('highlighted', style({
        'background-color': '#f2f2f2',
        transform: 'translateX(100px)',
        display:'block'
      })),
      transition('normal <=> highlighted', animate(300)),
      // transition('highlighted => normal', animate(800))
    ]),
    trigger('divState3', [
      state('normal', style({
        'background-color': 'lightgray',
        transform: 'translateX(0)',
        display:'none'
      })),
      state('highlighted', style({
        'background-color': '#f2f2f2',
        transform: 'translateX(100px)',
        display:'block'
      })),
      transition('normal <=> highlighted', animate(300)),
      // transition('highlighted => normal', animate(800))
    ]),
    trigger('wildState', [
      state('normal', style({
        'background-color': 'gary',
        transform: 'translateX(0) scale(1)'
      })),
      state('highlighted', style({
        'background-color': '#f2f2f2',
        transform: 'translateX(100px) scale(1)'
      })),
      state('shrunken', style({
        'background-color': 'green',
        transform: 'translateX(0) scale(0.1)'
      })),
      transition('normal => highlighted', animate(300)),
      transition('highlighted => normal', animate(800)),
      transition('shrunken <=> *', [
        style({
          'background-color': 'orange'
        }),
        animate(1000, style({
          borderRadius: '50px'
        })),
        animate(500)
      ])
    ]),
    trigger('list1', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)'
        }),
        animate(300)
      ]),
      transition('* => void', [
        animate(300, style({
          transform: 'translateX(100px)',
          opacity: 0
        }))
      ])
    ]),
    trigger('list2', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        animate(1000, keyframes([
          style({
            transform: 'translateX(-100px)',
            opacity: 0,
            offset: 0
          }),
          style({
            transform: 'translateX(-50px)',
            opacity: 0.5,
            offset: 0.3
          }),
          style({
            transform: 'translateX(-20px)',
            opacity: 1,
            offset: 0.8
          }),
          style({
            transform: 'translateX(0px)',
            opacity: 1,
            offset: 1
          })
        ]))
      ]),
      transition('* => void', [
        group([
          animate(300, style({
            color: 'red'
          })),
          animate(800, style({
            transform: 'translateX(100px)',
            opacity: 0
          }))
        ])
      ])
    ]),
  ]
})
export class AppComponent {
  stateP1 = 'normal';
  stateP2 = 'normal';
  stateP3 = 'normal';
  wildState = 'normal';
  list = ['Milk', 'Sugar', 'Bread'];
  imgePath = "assets/images/baby.png";
  phase1=false;
  phase2=false;

  onPhase1Animate() {
    this.stateP1 == 'normal' ? (this.stateP1 = 'highlighted', this.stateP2 = 'normal', this.stateP3 = 'normal') : (this.stateP1 = 'normal', this.stateP2 = 'normal', this.stateP3 = 'normal');
    //this.stateP2 == 'highlighted' ? this.stateP2 = 'normal' : this.stateP2 = 'highlighted';
    //this.wildState == 'normal' ? this.wildState = 'highlighted' : this.wildState = 'normal';
  }

  onPhase2Animate() {
    this.stateP2 == 'normal' ? (this.stateP2 = 'highlighted', this.stateP1 = 'normal', this.stateP3 = 'normal') : (this.stateP2 = 'normal', this.stateP1 = 'normal', this.stateP3 = 'normal');
    //this.wildState == 'normal' ? this.wildState = 'highlighted' : this.wildState = 'normal';
  }

  onPhase3Animate() {
    this.stateP3 == 'normal' ? (this.stateP3 = 'highlighted', this.stateP1 = 'normal', this.stateP2 = 'normal') : (this.stateP3 = 'normal', this.stateP1 = 'normal', this.stateP2 = 'normal');
    //this.wildState == 'normal' ? this.wildState = 'highlighted' : this.wildState = 'normal';
  }

  onShrink() {
    this.wildState = 'shrunken';
  }

  onAdd(item) {
    this.list.push(item);
  }

  onDelete(item) {
    this.list.splice(this.list.indexOf(item), 1);
  }

  animationStarted(event) {
    console.log(event);
  }

  animationEnded(event) {
    console.log(event);
  }
}
