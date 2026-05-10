import Tag from "./Tag";
import "./TaskCard.css";
import deleteIcon from "../assets/delete.png";

const TaskCard = ({ title, tags }) => {
  return (
    <div className="task_card">
      <p className="task_title">{title}</p>
      <div className="task_footer">
        <div className="tags">
          {tags.map((tag, index) => (
            <Tag key={index} name={tag} selected />
          ))}
        </div>
        <div className="delete">
          <img src={deleteIcon} className="delete_icon" alt="Delete task" />
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
