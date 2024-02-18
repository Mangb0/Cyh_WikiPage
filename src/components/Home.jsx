import { useEffect, useState } from "react";
import WikipageWrite from "./WikipageWrite";
import useWiki from "../hooks/useWiki";
import WikipageList from "./WikipageList";

const Home = () => {
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
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <WikipageList currentList={wikipageList} />
      )}
      <WikipageWrite
        isWriteOpened={isWriteOpened}
        writeModalClosed={writeModalClosed}
      />
      <button onClick={writeModalOpened}>추가</button>
    </div>
  );
};

export default Home;
