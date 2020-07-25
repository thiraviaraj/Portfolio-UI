import {
  trigger,
  animate,
  transition,
  style,
  query
} from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
  transition('* <=> *', [
    // Set a default  style for enter and leave
    query(':enter, :leave', [
      style({
        position: 'absolute',
        transform: 'scale(0) translateX(100%)',
      }),
    ]),
    // Animate the new page in
    query(':enter', [
      animate('2s ease', style({ opacity: 1, transform: 'scale(1) translateX(0)' })),
    ])
  ]),
]);
