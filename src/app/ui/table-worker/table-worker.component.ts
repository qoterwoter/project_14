import { Component, Input, OnInit, Output, EventEmitter  } from '@angular/core';
import { MyWorker } from 'src/app/shared/worker.model';

@Component({
  selector: 'app-table-worker',
  templateUrl: './table-worker.component.html',
  styleUrls: ['./table-worker.component.css']
})
export class TableWorkerComponent implements OnInit {


  @Input() title: string;
  @Input() workers: MyWorker[] = [];
  @Input() editingUserId;

  name: string;
  surname: string;
  phone: string;
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

  @Output() deleteWorker = new EventEmitter<number>();
  @Output() editWorker = new EventEmitter<number>();
  @Output() saveWorker = new EventEmitter<MyWorker>();

  constructor() {}

  ngOnInit(): void {}

  onDeleteWorker(id: number) {
    this.deleteWorker.emit(id);
  }
  onEditWorker(id:number) {
    this.editWorker.emit(id);
  }
  onSaveWorker(worker: MyWorker) {
    this.saveWorker.emit(worker)
  }
}
