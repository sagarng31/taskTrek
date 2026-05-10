import { useState } from "react";
import "./App.css";
import TaskColumn from "./components/TaskColumn";
import TaskForm from "./components/TaskForm";
import ToDoIcon from "./assets/direct-hit.png";
import InProgressIcon from "./assets/glowing-star.png";
import DoneIcon from "./assets/check-mark-button.png";

const App = () => {
  const [tasks, setTask] = useState([]);

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTask(newTasks);
  };
  return (
    <div className="app">
      <TaskForm setTask={setTask} />
      <main className="app_main">
        <TaskColumn
          title="To do"
          taskIcon={ToDoIcon}
          tasks={tasks}
          status="todo"
          handleDelete={handleDelete}
        />
        <TaskColumn
          title="In progress"
          taskIcon={InProgressIcon}
          tasks={tasks}
          status="inprogress"
          handleDelete={handleDelete}
        />
        <TaskColumn
          title="Done"
          taskIcon={DoneIcon}
          tasks={tasks}
          status="done"
          handleDelete={handleDelete}
        />
      </main>
    </div>
  );
};

export default App;
