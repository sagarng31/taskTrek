import { useState } from "react";
import Tag from "./Tag";
import "./TaskForm.css";

const TaskForm = ({ setTask }) => {
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

  const checkTag = (tag) => {
    return taskData.tags.some((item) => item === tag);
  };

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
  // console.log(taskData.tags);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    setTaskData((prevData) => ({ ...prevData, [name]: value }));
    // console.log(taskData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(taskData);
    setTask((prevTask) => [...prevTask, taskData]);
    setTaskData({
      task: "",
      status: "todo",
      tags: [],
    });
  };

  return (
    <header className="app_header">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={taskData.task}
          placeholder="Add Task Title"
          className="task_input"
          onChange={handleChange}
        />
        <div className="task_form_bottom">
          <div>
            <Tag
              name="HTML"
              selectTag={selectTag}
              selected={checkTag("HTML")}
            />
            <Tag name="CSS" selectTag={selectTag} selected={checkTag("CSS")} />
            <Tag
              name="JavaScript"
              selectTag={selectTag}
              selected={checkTag("JavaScript")}
            />
            <Tag
              name="React"
              selectTag={selectTag}
              selected={checkTag("React")}
            />
          </div>
          <div>
            <select
              name="status"
              value={taskData.status}
              className="task_status"
              onChange={handleChange}
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
