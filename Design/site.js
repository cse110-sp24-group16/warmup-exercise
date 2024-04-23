// Fetch json file from local location
fetch ("data.json")
    .then(response => {
        // Check if response is ok
        if (!response.ok) {
            throw new Error('Response failure');
        }
        return response.json()
    })
    .then((data) => {
        const tasks = data;

        // Iterate over each task and modify index.html
        for(let i = 0; i < tasks.length; i++) {
            // use querySelector and CSS selectors to iterate through elements in the DOM tree
            document.querySelector('#task'+(i+1)+' .task-name').innerHTML = tasks[i].task;
            document.querySelector('#task'+(i+1)+' textarea').value = tasks[i].task_details;
            document.querySelector('#task'+(i+1)+' .checkbox').checked = tasks[i].task_completion;
            document.querySelector('#task'+(i+1)+' .date').value = tasks[i].date;
        };
    })
    .catch(error => {
        // Error handling
        console.error('Fetch error:', error);
    });