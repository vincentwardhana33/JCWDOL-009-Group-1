async function executeQueue(queue) {
    console.log(queue)
    while (!queue.isEmpty()) {
      const item = queue.dequeue()
      const interval = Math.floor(Math.random() * 10) + 1
      // setTimeout(() => {console.log(`Processed item: ${item} Done in ${interval} second`)}, interval * 1000)
      await new Promise(resolve => setTimeout(resolve, interval * 1000))
      console.log(`Processed item: ${item} Done in ${interval} second`)
    }

    console.log(queue);
  }
  
  module.exports = executeQueue
  