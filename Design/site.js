const fs = require('fs');

// Define the path to your JSON file
const jsonFilePath = 'data.JSON';

// Read the JSON file asynchronously
fs.readFile(jsonFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading JSON file:', err);
    return;
  }

  try {
    // Parse the JSON data into a JavaScript array of objects
    const tasks = JSON.parse(data);

    // Iterate over each task and print its details
    tasks.forEach((task, index) => {
      console.log('Task:', task.category);
      console.log('Task:', task.task);
      console.log('Task Details:', task.task_details);
      console.log('Date:', task.date);
      console.log('Time:', task.time);
      console.log('Completion:', task.task_completion ? 'Completed' : 'Not Completed');
      console.log('------------------------');
    });
  } catch (error) {
    console.error('Error parsing JSON data:', error);
  }
});