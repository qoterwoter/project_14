import { Component, OnInit } from '@angular/core';
import { HttpWorkersService } from './shared/services/http-workers.service';
import { MyWorker, MyWorkersDataBase, MyWorkerType } from './shared/worker.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Список сотрудников';
  workers: MyWorker[] = MyWorkersDataBase;
  myWorkerType = MyWorkerType;
  editingUserId: number | null;
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
  constructor(
    private httpWorkersService: HttpWorkersService
  ) {}

  ngOnInit() {
    this.getData();
  }

  getByType(type: number) {
    return this.workers.filter(worker => worker.type === type);
  }



  onDeleteWorker(id: number) {
    console.log('Deleted worker with id: '+ id);
    let index = this.workers.findIndex(worker=> worker.id === id);
    this.httpWorkersService.deleteWorker(id);
    if(index !== -1) {
      this.workers.splice(index,1);
    }
  }

  // onAddWorker(worker: MyWorker) {
  //   let id = this.workers.length > 0 ? this.workers[this.workers.length-1].id + 1: 1;
  //   worker.id = id;
  //   if(worker.name.trim() != '' || worker.surname.trim() != '') {
  //     this.workers.push(worker);
  //   }
  // }

  onEditWorker(workerId: number) {
    this.editingUserId = workerId
  }

  onSaveWorker(worker: MyWorker) {
    console.log(worker);
    const workerToUpdate = this.workers.findIndex(worker2 => worker2.id === worker.id);
    this.workers[workerToUpdate] = worker;
    this.editingUserId = null;
    this.httpWorkersService.editWorker(worker.id, worker);
  }
  async onAddWorker(worker: MyWorker) {
    try {
      await this.httpWorkersService.postWorker(worker);
    } catch (error) {
      console.error(error)
    } finally {
      this.getData();
    }
  }
  async getData() {
    try {
      this.workers = await this.httpWorkersService.getWorker();
    } catch(e) {
      console.error(e);
    }
  }
}
