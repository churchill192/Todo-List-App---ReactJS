# Todo List Application

## Overview

This is a simple Todo List application built with React. It allows users to add, edit, delete, and mark tasks as done. Users can also search for tasks. The tasks are displayed in a collapsible format where it shows the time when the task is last updated or completed, with completed tasks highlighted in green.

The application consists of the following main components:

1. **App Component:** The root component that contains the `TodoList` component.
2. **TodoList Component:** The main component that manages the state of the tasks, including adding, editing, deleting, and marking tasks as done. It also handles the search functionality.
3. **CSS Files:** The `App.css` and `TodoList.css` files for styling the components.

## Implementation
1. **App Component**
    - File: `App.jsx`
    - Imports the `TodoList` component and renders it inside a `div` with a class name of `App`.

2. **TodoList Component**
   - File: `TodoList.jsx`
     
  The application uses React's `useState` hook to manage the state of the tasks, including:
  - `task`: The current task being added.
  - `taskList`: The list of all tasks.
  - `editingIndex`: The index of the task being edited.
  - `editTask`: The text of the task being edited.
  - `completedTasks`: The list of indices of completed tasks.
  - `searchQuery`: The search query for filtering tasks.

- Manages the state for tasks (`taskList`), new task input (`task`), editing state (`editingIndex`, `editTask`), completed tasks (`completedTasks`), and search query (`searchQuery`).
    - Functions:
        - `addTask`: Adds a new task to the list.
        - `startEditing`: Initiates editing mode for a task.
        - `updateTask`: Updates an existing task.
        - `deleteTask`: Deletes a task from the list.
        - `markAsDone`: Marks a task as completed and updates the completion time.
    - Filters tasks based on the search query and renders the task list.

### Styling

1. **App.css**
    - Basic styling for the app container.

2. **TodoList.css**
    - Styling for the `TodoList` component, including the task items, input sections, and buttons.

## Setup Instructions

### Prerequisites
Node.js (v14 or higher)
npm (v6 or higher)

### Installation
### 1.Clone the repository
```bash
git clone https://github.com/your-username/todo-list-app.git
cd todo-list-app
```

### 2.Install the dependencies
```bash
npm install
```

### Running the Application
Start the development server:

```bash
npm start
```

Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Screenshots
### Main Interface
![main](https://github.com/user-attachments/assets/f554b815-1232-47f8-9706-f146f93491ab)

### Adding Task
![add task](https://github.com/user-attachments/assets/ddbdcf88-0852-4fc5-9ed0-4b61660189b3)

### After Adding the Tasks
![added task](https://github.com/user-attachments/assets/35a8ea35-3c00-462b-97a4-c017255d9ae8)
![added task 2](https://github.com/user-attachments/assets/f23fb492-07f0-4cad-a23d-cb897a9250d2)

### Edit Task
![edit task](https://github.com/user-attachments/assets/bed5300a-9eff-472a-9df5-b4d56c7a7745)

### After Editing
![updated task](https://github.com/user-attachments/assets/bce0c737-0c6f-4e91-b03b-2e429d3cef42)
![expandable list updated time](https://github.com/user-attachments/assets/ef1321e4-0921-4768-a23e-9b384184622c)

### Delete Task 
![delete task](https://github.com/user-attachments/assets/43ebe4c6-0247-4798-aea7-ecb8f3723109)
![deleted task](https://github.com/user-attachments/assets/ec47f155-0904-4b00-833f-96b096660c94)

### Mark As Done
![mark as done](https://github.com/user-attachments/assets/c0a98157-f7fa-4863-916c-7accdc9fd41c)
![done task](https://github.com/user-attachments/assets/1c91d9fd-3239-4ac7-aab9-9c81700e207e)

### Search Task
![before search](https://github.com/user-attachments/assets/011020a3-f188-4cd2-827c-2d0176efd7ce)
![searched](https://github.com/user-attachments/assets/93824ccc-1206-48bd-b703-a3b13185165e)


















