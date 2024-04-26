// Fetch json file from local location
fetch("./data/data.JSON")
  .then((response) => {
    // Check if response is ok
    if (!response.ok) {
      throw new Error("Response failure");
    }
    return response.json();
  })
  .then((data) => {
    const tasks = data;

    // Iterate over each task and modify index.html
    for (let i = 0; i < tasks.length; i++) {
      // use querySelector and CSS selectors to iterate through elements in the DOM tree
      document.querySelector("#task" + (i + 1) + " .task-name").innerHTML =
        tasks[i].task;
      document.querySelector("#task" + (i + 1) + " textarea").value =
        tasks[i].task_details;
      document.querySelector("#task" + (i + 1) + " .checkbox").checked =
        tasks[i].task_completion;
      document.querySelector("#task" + (i + 1) + " .date").value =
        tasks[i].date;
    }

    const sections = document.querySelectorAll(".section");
    for (let i = 0; i < sections.length; i++) {
        let numChecked = 0;
        sections[i].querySelectorAll("summary ~ div .checkbox").forEach((checkbox) => {
          if (checkbox.checked) {
            numChecked++;
          }
        })
        let remaining_tasks = sections[i].querySelectorAll("summary ~ div").length - numChecked;
        sections[i].querySelector("summary").innerHTML = 'Tasks Remaining: ' + remaining_tasks;
    }
  })
  .catch((error) => {
    // Error handling
    console.error("Fetch error:", error);
  });
