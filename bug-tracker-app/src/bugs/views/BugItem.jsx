const BugItem = ({ bug, toggle, remove }) => {
  return (
    <li key={bug.id}>
      <span
        onClick={() => toggle(bug)}
        className={"bugname " + (bug.isClosed ? "closed" : "")}
      >
        {bug.name}
      </span>
      <div className="datetime">{bug.createdAt.toString()}</div>
      <button onClick={() => remove(bug)}>Remove</button>
    </li>
  );
};

export default BugItem;