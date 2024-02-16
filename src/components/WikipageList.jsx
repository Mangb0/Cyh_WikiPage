import { Link } from "react-router-dom";

const WikipageList = () => {
  let wikipageList = [
    {
      id: 1,
      title: "Wikipage1",
      content: "Wikipage1 content",
    },
    {
      id: 2,
      title: "Wikipage2",
      content: "Wikipage2 content",
    },
    {
      id: 3,
      title: "Wikipage3",
      content: "Wikipage3 content",
    },
    {
      id: 4,
      title: "Wikipage4",
      content: "Wikipage4 content",
    },
    {
      id: 5,
      title: "Wikipage5",
      content: "Wikipage5 content",
    },
    {
      id: 5,
      title: "Wikipage6",
      content: "Wikipage6 content",
    },
  ];

  return (
    <div>
      <h1>WikipageList</h1>
      <ul>
        {wikipageList.map((wikipage) => {
          return (
            <li key={wikipage.id}>
              <Link to={`wikipage/${wikipage.id}`}>{wikipage.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WikipageList;
