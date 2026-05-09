import "./App.css";
import TaskForm from "./components/TaskForm";

const App = () => {
  return (
    <div className="app">
      <TaskForm />
      <main className="app_main">
        <section className="task_column">Column Section</section>
        <section className="task_column">Column Section</section>
        <section className="task_column">Column Section</section>
      </main>
    </div>
  );
};

export default App;
