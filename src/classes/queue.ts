export class Queue<T> {
  oldestIndex:number = 1;
  newestIndex:number = 1;
  storage:T[];

  size ():number {
    return this.newestIndex - this.oldestIndex;
  }

  enqueue (data:T):void {
    this.storage[this.newestIndex] = data;
    this.newestIndex++;
  }

  dequeue ():T {
    let oldestIndex:number = this.oldestIndex,
        newestIndex:number = this.newestIndex,
        deletedData:T;
    if (oldestIndex !== newestIndex) {
      deletedData = this.storage[oldestIndex];
      delete this.storage[oldestIndex];
      this.oldestIndex++;

      return deletedData;
    }
  }

  constructor(storage:T[]) {
    this.storage = storage;
  }
}
