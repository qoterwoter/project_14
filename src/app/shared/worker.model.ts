export interface MyWorker {
    name: string;
    surname: string;
    type: number;
    phone: string;
    id?: number;
}

export enum MyWorkerType {
    programmer, 
    designer,
    copywriter, 
    manager,
}

export let MyWorkersDataBase: MyWorker[] = [
    {id:1, name: 'Ivan',surname: 'Ivanov',phone:"+79266132402", type: MyWorkerType.programmer},
    {id:2, name: 'Petr',surname: 'Petrov',phone:"+79266132402", type:  MyWorkerType.designer},
    {id:3, name: 'Sidr',surname: 'Sidorov',phone:"+79266132402", type:  MyWorkerType.copywriter},
    {id:4, name: 'Vasiliy',surname: 'Vasiliyev',phone:"+79266132402", type: MyWorkerType.manager},
]