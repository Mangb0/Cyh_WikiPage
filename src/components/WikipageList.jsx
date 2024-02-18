import { Link } from "react-router-dom";

const WikipageList = ({ currentList }) => {
  return (
    <ul>
      {currentList.map((wikipage) => (
        <li key={wikipage.id}>
          <Link to={`/wikipage/${wikipage.id}`}>{wikipage.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default WikipageList;
