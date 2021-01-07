import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyWorker, MyWorkerType } from 'src/app/shared/worker.model';
@Component({
  selector: 'app-addform-worker',
  templateUrl: './addform-worker.component.html',
  styleUrls: ['./addform-worker.component.css']
})
export class AddformWorkerComponent implements OnInit {

  name: string;
  surname: string;
  type = MyWorkerType.programmer;
  phone: string;
  myWorkerType = MyWorkerType;
  mask = [
    '+',
    '7',
    '(',
    /[1-9]/,
    /\d/,
    /\d/,
    ')',
    '-',
    /\d/,
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
  ];

  @Output() addWorker = new EventEmitter<MyWorker>();

  constructor() { }

  ngOnInit(): void {
  }
  myAddForm : FormGroup = new FormGroup({
    "name": new FormControl("", [Validators.required, this.noSpaceValidator]),
    "surname": new FormControl("",[Validators.required, this.noSpaceValidator]),
    "phone": new FormControl("", Validators.compose([Validators.required, Validators.min(7), this.noSpaceValidator])),
    "type": new FormControl("", [Validators.required]),
});
  onAddWorker() {
    let worker: MyWorker = {
      name: this.name.trim(),
      surname: this.surname,
      type: this.type,
      phone: this.phone,
    };
    console.log(worker);
    this.addWorker.emit(worker);
  }
  noSpaceValidator(control: FormControl) {
    const haveSpace = (control.value || '').trim().length == 0;
    const valid = !haveSpace;
    return valid ? null : { 'whitespace': true };
  }

}
