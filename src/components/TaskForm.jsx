import Tag from "./Tag";
import "./TaskForm.css";

const TaskForm = () => {
  return (
    <header className="app_header">
      <form>
        <input
          type="text"
          placeholder="Add Task Title"
          className="task_input"
        />
        <div className="task_form_bottom">
          <div>
            <Tag name="HTML" />
            <Tag name="CSS" />
            <Tag name="JavaScript" />
            <Tag name="React" />
          </div>
          <div>
            <select className="task_status">
              <option value="todo">To Do</option>
              <option value="inprogress">In Progress</option>
              <option value="done">Done</option>
            </select>
            <button type="submit" className="task_submit">
              Add Task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
