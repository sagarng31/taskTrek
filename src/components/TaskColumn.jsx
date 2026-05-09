import "./TaskColumn.css";

const TaskColumn = ({ title, taskIcon }) => {
  return (
    <section className="task_column">
      <h2 className="column_heading">
        <img className="task_icon" src={taskIcon} alt={title} />
        {title}
      </h2>
    </section>
  );
};

export default TaskColumn;
