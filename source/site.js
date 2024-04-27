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
    // Declare variables
    const tasks = data;
    const todo = new Array();
    const doing = new Array();
    const done = new Array();
    const todoList = document.querySelectorAll("#section1 div");
    const doingList = document.querySelectorAll("#section2 div");
    const doneList = document.querySelectorAll("#section3 div");

    // Iterate over each task and sort them into categorized arrays
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].category == "To Do") {
        todo.push(tasks[i]);
      } else if (tasks[i].category == "Doing") {
        doing.push(tasks[i]);
      } else if (tasks[i].category == "Completed") {
        done.push(tasks[i]);
      }
    }

    // Iterate through each categorized array and section and modify index.html
    for(let i = 0; i < todoList.length; i++) {
      todoList[i].querySelector(".task-name").innerHTML = todo[i].task;
      todoList[i].querySelector("textarea").value = todo[i].task_details;
      todoList[i].querySelector(".checkbox").checked = todo[i].task_completion;
      todoList[i].querySelector(".date").value = todo[i].date;
    }

    for(let i = 0; i < doingList.length; i++) {
      doingList[i].querySelector(".task-name").innerHTML = doing[i].task;
      doingList[i].querySelector("textarea").value = doing[i].task_details;
      doingList[i].querySelector(".checkbox").checked = doing[i].task_completion;
      doingList[i].querySelector(".date").value = doing[i].date;
    }

    for(let i = 0; i < doneList.length; i++) {
      doneList[i].querySelector(".task-name").innerHTML = done[i].task;
      doneList[i].querySelector("textarea").value = done[i].task_details;
      doneList[i].querySelector(".checkbox").checked = done[i].task_completion;
      doneList[i].querySelector(".date").value = done[i].date;
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
