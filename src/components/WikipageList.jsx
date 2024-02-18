import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import WikipageWrite from "./WikipageWrite";
import useWiki from "../hooks/useWiki";

const WikipageList = () => {
  const [wikipageList, setWikipageList] = useState([]);
  const [isWriteOpened, setIsWriteOpened] = useState(false);

  const writeModalOpened = () => {
    setIsWriteOpened(true);
  };

  const writeModalClosed = () => {
    setIsWriteOpened(false);
  };

  useEffect(() => {
    getWikipageList().then((res) => setWikipageList(res));
  }, [isWriteOpened]);

  const { getWikipageList, isLoading } = useWiki();

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
        writeModalClosed={writeModalClosed}
      />
      <button onClick={writeModalOpened}>추가</button>
    </div>
  );
};

export default WikipageList;
