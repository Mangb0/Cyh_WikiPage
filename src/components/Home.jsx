import { useEffect, useState } from "react";
import WikipageWrite from "./WikipageWrite";
import useWiki from "../hooks/useWiki";
import WikipageList from "./WikipageList";
import Pagination from "./Pagination";

const Home = () => {
  const [isWriteOpened, setIsWriteOpened] = useState(false);

  const [page, setPage] = useState(1);
  const limit = 5;
  let offset = (page - 1) * limit;

  const { getWikipageList, isLoading, wikipageList } = useWiki();

  const writeModalOpened = () => {
    setIsWriteOpened(true);
  };

  const writeModalClosed = () => {
    setIsWriteOpened(false);
  };

  useEffect(() => {
    getWikipageList();
  }, [isWriteOpened]);

  return (
    <div>
      <h1>WikipageList</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <WikipageList
          wikipageList={wikipageList}
          limit={limit}
          offset={offset}
        />
      )}
      <WikipageWrite
        isWriteOpened={isWriteOpened}
        writeModalClosed={writeModalClosed}
      />
      {wikipageList.length > 5 && (
        <Pagination
          page={page}
          totalItems={wikipageList.length}
          limit={limit}
          setPage={setPage}
        />
      )}
      <button onClick={writeModalOpened}>추가</button>
    </div>
  );
};

export default Home;
