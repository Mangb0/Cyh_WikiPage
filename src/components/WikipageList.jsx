import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import WikipageWrite from "./WikipageWrite";

const WikipageList = () => {
  const [wikipageList, setWikipageList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isWriteOpened, setIsWriteOpened] = useState(false);

  const getWikipageList = async () => {
    const res = await axios.get("http://localhost:3001/wikipage");
    setWikipageList(res.data);
    console.log(res.data);
    setIsLoading(false);
  };

  const writeModalOpened = () => {
    setIsWriteOpened(true);
  };

  const wirteModalClosed = () => {
    setIsWriteOpened(false);
    getWikipageList();
  };

  useEffect(() => {
    getWikipageList();
  }, []);

  return (
    <div>
      <h1>WikipageList</h1>
      <ul>
        {isLoading ? (
          <li>Loading...</li>
        ) : (
          wikipageList.map((wikipage) => {
            return (
              <li key={wikipage.id}>
                <Link to={`wikipage/${wikipage.id}`}>{wikipage.title}</Link>
              </li>
            );
          })
        )}
      </ul>
      <WikipageWrite
        isWriteOpened={isWriteOpened}
        wirteModalClosed={wirteModalClosed}
      />
      <button onClick={writeModalOpened}>추가</button>
    </div>
  );
};

export default WikipageList;
