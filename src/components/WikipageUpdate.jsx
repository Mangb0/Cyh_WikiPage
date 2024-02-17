import axios from "axios";
import { useEffect, useState } from "react";

const WikipageUpdate = ({ wikipageId, handleStateChanged, cleanupFunc }) => {
  const [wikipageObj, setWikipageObj] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getWikipageDetail = async () => {
    const res = await axios.get(`http://localhost:3001/wikipage/${wikipageId}`);
    setWikipageObj(res.data);
    setIsLoading(false);
    console.log(res.data);
  };

  const updateWikipage = async () => {
    await axios.put(
      `http://localhost:3001/wikipage/${wikipageId}`,
      wikipageObj
    );
    // 수정이 완료되면 WikipageDetail 컴포넌트로 돌아가기 위해 handleStateChanged 함수를 호출
    handleStateChanged(false);
  };

  useEffect(() => {
    getWikipageDetail();
    // 페이지 이동이 없기 때문에 cleanupFunc을 통해 수정된 Wikipage 내용 데이터를 다시 불러올 수 있도록 구현
    return () => {
      cleanupFunc();
    };
  }, []);

  const onChange = (e) => {
    const { name, value } = e.target;
    setWikipageObj({
      ...wikipageObj,
      [name]: value,
    });
  };

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div>
            <h2>제목</h2>
            <input
              className="title-input"
              type="text"
              name="title"
              value={wikipageObj.title}
              onChange={onChange}
            ></input>
            <h2>내용</h2>
            <input
              className="content-input"
              type="text"
              name="content"
              value={wikipageObj.content}
              onChange={onChange}
            ></input>
          </div>
          <button onClick={() => updateWikipage()}>저장</button>
        </>
      )}
    </>
  );
};

export default WikipageUpdate;
