import { useState } from "react";
import Tag from "./Tag";
import "./TaskForm.css";

const TaskForm = () => {
  // const [task, setTask] = useState("");
  // const [status, setStatus] = useState("todo");

  // const handleTaskChange = (e) => {
  //   setTask(e.target.value);
  // };

  // const handleStatusChange = (e) => {
  //   setStatus(e.target.value);
  // };

  // console.log(task, status);

  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });

  const selectTag = (tag) => {
    if (taskData.tags.some((item) => item === tag)) {
      const filterTags = taskData.tags.filter((item) => item !== tag);
      setTaskData((prevData) => {
        return { ...prevData, tags: filterTags };
      });
    } else {
      setTaskData((prevData) => {
        return {
          ...prevData,
          tags: [...prevData.tags, tag],
        };
      });
    }
  };
  console.log(taskData.tags);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    setTaskData((prevData) => ({ ...prevData, [name]: value }));
    // console.log(taskData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskData);
  };

  return (
    <header className="app_header">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add Task Title"
          className="task_input"
          onChange={handleChange}
          name="task"
        />
        <div className="task_form_bottom">
          <div>
            <Tag name="HTML" selectTag={selectTag} />
            <Tag name="CSS" selectTag={selectTag} />
            <Tag name="JavaScript" selectTag={selectTag} />
            <Tag name="React" selectTag={selectTag} />
          </div>
          <div>
            <select
              className="task_status"
              onChange={handleChange}
              name="status"
            >
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
