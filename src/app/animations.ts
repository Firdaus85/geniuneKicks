import { trigger, transition, style, animate, keyframes } from '@angular/animations';


export let slide = trigger('slide',[
  transition(':enter', [
    animate(1000, keyframes([
      style({
        offset:0.2,
        opacity:0,
        transform: 'translate3d(-100%, 0, 0)'
      }),
      style({
        offset:1,
        opacity:1,
        transform: 'translate3d(0, 0, 0)'
      }),
    ]))
  ]),
  transition(':leave', [
    animate(500, keyframes([
      style({
        offset:0.2,
        opacity:1,

      }),
      style({
        offset:1,
        opacity:1,
        transform: 'translate3d(100%, 0, 0)'
      }),
    ]))
  ])
]);

export let pulse = trigger('pulse', [
  transition(':enter', [
    animate(1000, keyframes([
      style({
        offset:0.2,
        transform: 'scale3d(1, 1, 1)'
      }),
      style({
        offset:0.5,
        transform: 'scale3d(1.05, 1.05, 1.05)'
      }),
      style({
        offset:1,
        transform: 'scale3d(1, 1, 1)'
      })
    ]))
  ]),
  transition(':leave', [
    animate(1000, keyframes([
      style({
        offset:0.2,
        transform: 'scale3d(1, 1, 1)'
      }),
      style({
        offset:0.5,
        transform: 'scale3d(1.05, 1.05, 1.05)'
      }),
      style({
        offset:1,
        transform: 'scale3d(1, 1, 1)'
      })
    ]))
  ])

]);


export let fadeInUp = trigger('fadeInUp',[
  transition(':enter', [
    animate(500, keyframes([
      style({
        offset:0,
        opacity:1,
        transform: ' translate3d(100%, 0, 0)'
      }),
      style({
        offset:1,
        transform: 'translate3d(0, 0, 0)'
      }),
    ]))
  ]),

]);
