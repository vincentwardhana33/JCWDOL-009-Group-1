const Queue = require('./Class')
const executeQueue = require('./Function')

const queue = new Queue()
queue.enqueue("Burger")
queue.enqueue("Hot Dog")
queue.enqueue("Soda")
queue.enqueue("Pizza")

// disini async
executeQueue(queue)
// console.log(queue.queueList());
console.log('test');
