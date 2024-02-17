import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import WikipageUpdate from "./WikipageUpdate";

const WikipageDetail = () => {
  const { id } = useParams();

  const [wikipageObj, setWikipageObj] = useState({
    title: "",
    content: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdate, setIsUpdate] = useState(false);

  const getWikipageDetail = async () => {
    const res = await axios.get(`http://localhost:3001/wikipage/${id}`);
    setWikipageObj(res.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getWikipageDetail();
  }, []);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : isUpdate ? (
        // 과제 내용 중 페이지 이동이 없기 때문에 WikipageUpdate 컴포넌트를 렌더링하고, props로 필요한 데이터를 전달
        <WikipageUpdate
          wikipageId={id}
          handleStateChanged={setIsUpdate}
          cleanupFunc={getWikipageDetail}
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
