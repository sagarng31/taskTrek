import Tag from "./Tag";
import "./TaskCard.css";
import deleteIcon from "../assets/delete.png";

const TaskCard = () => {
  return (
    <div className="task_card">
      <p className="task_title">Task description goes here.</p>
      <div className="task_footer">
        <div className="tags">
          <Tag name="HTML" />
          <Tag name="CSS" />
        </div>
        <div className="delete">
          <img src={deleteIcon} className="delete_icon" alt="Delete task" />
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
