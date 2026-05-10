import "./Tag.css";

const Tag = ({ name, selectTag }) => {
  return (
    <button type="button" className="tag" onClick={() => selectTag(name)}>
      {name}
    </button>
  );
};

export default Tag;
