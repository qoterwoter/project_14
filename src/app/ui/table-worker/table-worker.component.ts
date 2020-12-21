import { Component, Input, OnInit, Output,EventEmitter  } from '@angular/core';
import { MyWorker } from 'src/app/shared/worker.model';

@Component({
  selector: 'app-table-worker',
  templateUrl: './table-worker.component.html',
  styleUrls: ['./table-worker.component.css']
})
export class TableWorkerComponent implements OnInit {
  @Input() title: string;
  @Input() workers: MyWorker[] = [];

  @Output() deleteWorker = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  onDeleteWorker(id: number) {
    this.deleteWorker.emit(id);
  }
}
