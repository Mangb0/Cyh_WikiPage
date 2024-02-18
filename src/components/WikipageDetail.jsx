import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import WikipageUpdate from "./WikipageUpdate";
import useWiki from "../hooks/useWiki";

const WikipageDetail = () => {
  const { id } = useParams();

  const [isUpdate, setIsUpdate] = useState(false);

  const { wikipageObj, getWikipageDetail, updateWikipage, isLoading } =
    useWiki();

  const handleUpdate = async (obj) => {
    await updateWikipage(id, obj);
    setIsUpdate(false);
  };

  useEffect(() => {
    if (isUpdate) return;
    getWikipageDetail(id);
  }, [isUpdate]);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : isUpdate ? (
        <WikipageUpdate
          wikipageObj={wikipageObj}
          updateWikipage={handleUpdate}
        />
      ) : (
        <>
          <div>
            <h1>{wikipageObj.title}</h1>
            <p>{wikipageObj.content}</p>
          </div>
          <button onClick={() => setIsUpdate(true)}>수정</button>
        </>
      )}
    </>
  );
};

export default WikipageDetail;
