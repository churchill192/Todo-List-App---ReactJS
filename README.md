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





