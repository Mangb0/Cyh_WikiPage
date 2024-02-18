import axios from "axios";
import { useState } from "react";
import ReactModal from "react-modal";

const WikipageWrite = ({ isWriteOpened, wirteModalClosed }) => {
  const [wikipageObj, setWikipageObj] = useState({ title: "", content: "" });

  const writeWikipage = async () => {
    await axios.post(`http://localhost:3001/wikipage`, wikipageObj);

    wirteModalClosed();
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setWikipageObj({
      ...wikipageObj,
      [name]: value,
    });
  };

  return (
    <>
      <ReactModal isOpen={isWriteOpened}>
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
        <button onClick={() => writeWikipage()}>저장</button>
        <button onClick={() => wirteModalClosed()}>취소</button>
      </ReactModal>
    </>
  );
};

export default WikipageWrite;
