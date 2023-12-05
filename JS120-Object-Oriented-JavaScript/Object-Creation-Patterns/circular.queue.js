class CircularQueue {
  constructor(size) {
    this.buffer = new Array(size).fill(null);
    this.nextPosition = 0;
    this.oldestPosition = 0;
  }

  enqueue(item) {
    if (this.buffer[this.nextPosition] !== null) {
      this.oldestPosition = (this.oldestPosition + 1) % this.buffer.length;
    }
    this.buffer[this.nextPosition] = item;
    this.nextPosition = (this.nextPosition + 1) % this.buffer.length;
  }

  dequeue() {
    let removedItem = this.buffer[this.oldestPosition];
    this.buffer[this.oldestPosition] = null
    if (removedItem !== null) {
      this.oldestPosition = (this.oldestPosition + 1) % this.buffer.length;
    } 
    return removedItem;
  }
}

// add item when there is an empty space
// add item when there is not an empty space (overwriting an item)

// remove item that isn't null
// remove itme that is null


let queue = new CircularQueue(3);
console.log(queue.dequeue() === null);

queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue() === 1);

queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue() === 2);

queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
console.log(queue.dequeue() === 5);
console.log(queue.dequeue() === 6);
console.log(queue.dequeue() === 7);
console.log(queue.dequeue() === null);

let anotherQueue = new CircularQueue(4);
console.log(anotherQueue.dequeue() === null);

anotherQueue.enqueue(1)
anotherQueue.enqueue(2)
console.log(anotherQueue.dequeue() === 1);

anotherQueue.enqueue(3)
anotherQueue.enqueue(4)
console.log(anotherQueue.dequeue() === 2);

anotherQueue.enqueue(5)
anotherQueue.enqueue(6)
anotherQueue.enqueue(7)
console.log(anotherQueue.dequeue() === 4);
console.log(anotherQueue.dequeue() === 5);
console.log(anotherQueue.dequeue() === 6);
console.log(anotherQueue.dequeue() === 7);
console.log(anotherQueue.dequeue() === null);