import TaskCard from "./TaskCard";
import "./TaskColumn.css";

const TaskColumn = ({ title, taskIcon, tasks, status, handleDelete }) => {
  return (
    <section className="task_column">
      <h2 className="column_heading">
        <img className="task_icon" src={taskIcon} alt={title} />
        {title}
      </h2>
      {/* <TaskCard /> */}
      {tasks.map(
        (task, index) =>
          task.status === status && (
            <TaskCard
              key={index}
              title={task.task}
              tags={task.tags}
              handleDelete={handleDelete}
              index={index}
            />
          ),
      )}
    </section>
  );
};

export default TaskColumn;
