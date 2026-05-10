import { useState } from "react";
import "./App.css";
import TaskColumn from "./components/TaskColumn";
import TaskForm from "./components/TaskForm";
import ToDoIcon from "./assets/direct-hit.png";
import InProgressIcon from "./assets/glowing-star.png";
import DoneIcon from "./assets/check-mark-button.png";

const App = () => {
  const [tasks, setTask] = useState([]);
  console.log("tasks", tasks);
  return (
    <div className="app">
      <TaskForm setTask={setTask} />
      <main className="app_main">
        <TaskColumn
          title="To do"
          taskIcon={ToDoIcon}
          tasks={tasks}
          status="todo"
        />
        <TaskColumn
          title="In progress"
          taskIcon={InProgressIcon}
          tasks={tasks}
          status="inprogress"
        />
        <TaskColumn
          title="Done"
          taskIcon={DoneIcon}
          tasks={tasks}
          status="done"
        />
      </main>
    </div>
  );
};

export default App;
