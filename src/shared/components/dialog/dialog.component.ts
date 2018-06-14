import { Component, OnInit, trigger, transition, style, animate, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ]
})
export class DialogComponent implements OnInit {

  @Input() visible: boolean;
  @Input() headerText: string;
  @Output() dialogEvents: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  constructor() { }

  ngOnInit() {
  };

  dialogAction(whichOne) {
      this.dialogEvents.next(whichOne);
      this.close();
  };

  close() {
      this.visible = false;
      this.dialogEvents.next(this.visible);
  };

}
