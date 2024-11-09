document.addEventListener('DOMContentLoaded', function () {
    // get html key 
    const taskInput = document.getElementById('task-input');
    const addTaskButton = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');


    function addTask() {
        // Get the task text from the input field and remove extra spaces
        const taskText = taskInput.value.trim();
    
        // Check if the input is empty
        if (taskText === '') {
          alert('Please enter a task'); // Alert the user to enter something
          return; // Stop if input is empty
        }

      // Create an HTML element for the task item
        const taskItem = document.createElement('li'); // Create a new <li> for the task
        taskItem.className = 'task-item'; // Add CSS class to the task item

      // Create a <span> to hold the task text
        const taskContent = document.createElement('span');
        taskContent.textContent = taskText; // Set the text content to the task

          // Create the delete button
          const deleteButton = document.createElement('button'); // Create a new <button>
          deleteButton.textContent = 'Delete'; // Set the button text
          deleteButton.className = 'delete-task'; // Add CSS class to style the button

        // Add an event listener to delete the task when button is clicked
        eleteButton.addEventListener('click', function () {
        taskList.removeChild(taskItem); // Remove the task item from the list
    });

        // Add the task text and delete button to the task item
        taskItem.appendChild(taskContent); // Add task text to <li>
        taskItem.appendChild(deleteButton); // Add delete button to <li>
    
        // Add the task item to the task list
        taskList.appendChild(taskItem);
    
        // Clear the input field to prepare for a new task
        taskInput.value = '';
      }
    
      // Add an event listener to the "Add Task" button to call addTask when clicked
      addTaskButton.addEventListener('click', addTask);
    });
    


      

  