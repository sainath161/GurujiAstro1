const taskQueue = require('../queues/taskQueue');

taskQueue.process(async (job) => {
    console.log(`Processing job ${job.id} with data: `, job.data);
    // Process the task
});
