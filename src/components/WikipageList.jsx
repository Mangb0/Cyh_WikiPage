import { Link } from "react-router-dom";

const WikipageList = ({ wikipageList, limit, offset }) => {
  const currentData = (list) => {
    if (list) {
      const currentList = list.slice(offset, offset + limit);
      return currentList;
    }
  };

  return (
    <ul>
      {currentData(wikipageList).map((wikipage) => (
        <li key={wikipage.id}>
          <Link to={`/wikipage/${wikipage.id}`}>{wikipage.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default WikipageList;
