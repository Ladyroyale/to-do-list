  // DOM Elements
  const taskInput = document.getElementById('taskInput');
  const addTaskBtn = document.getElementById('addTaskBtn');
  const taskList = document.getElementById('taskList');

  // Add Task Function
  function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
      alert('Please enter a task.');
      return;
    }

    // Create list item
    const listItem = document.createElement('li');

    // Add task text
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    // Add delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');

    // Event listener for delete button
    deleteBtn.addEventListener('click', () => {
      taskList.removeChild(listItem);
    });

    // Append task text and delete button to list item
    listItem.appendChild(taskSpan);
    listItem.appendChild(deleteBtn);

    // Add list item to task list
    taskList.appendChild(listItem);

    // Clear input field
    taskInput.value = '';
  }

  // Event Listener for Add Task Button
  addTaskBtn.addEventListener('click', addTask);

  // Event Listener for Enter Key
  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  });