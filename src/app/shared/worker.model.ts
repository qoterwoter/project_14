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
]
