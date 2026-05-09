import "./App.css";
import TaskColumn from "./components/TaskColumn";
import TaskForm from "./components/TaskForm";
import ToDoIcon from "./assets/direct-hit.png";
import InProgressIcon from "./assets/glowing-star.png";
import DoneIcon from "./assets/check-mark-button.png";

const App = () => {
  return (
    <div className="app">
      <TaskForm />
      <main className="app_main">
        <TaskColumn title="To do" taskIcon={ToDoIcon} />
        <TaskColumn title="In progress" taskIcon={InProgressIcon} />
        <TaskColumn title="Done" taskIcon={DoneIcon} />
      </main>
    </div>
  );
};

export default App;
