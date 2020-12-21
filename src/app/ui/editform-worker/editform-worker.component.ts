import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { MyWorker, MyWorkerType } from 'src/app/shared/worker.model';

@Component({
  selector: 'app-editform-worker',
  templateUrl: './editform-worker.component.html',
  styleUrls: ['./editform-worker.component.css']
})
export class EditformWorkerComponent implements OnInit {
  name: string;
  surname: string;
  type = 0;
  id: number;
  myWorkerType = MyWorkerType;

  @Output() editWorker = 
  new EventEmitter<MyWorker>();

  constructor() { }

  ngOnInit(): void {
  }

  onEditWorker() {
    let worker: MyWorker = {
      id: this.id,
      name: this.name,
      surname: this.surname,
      type: this.type,
    };
    console.log(worker);
    this.editWorker.emit(worker);
  }
}
