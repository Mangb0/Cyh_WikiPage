import ReactModal from "react-modal";
import useWiki from "../hooks/useWiki";

const WikipageWrite = ({ isWriteOpened, writeModalClosed }) => {
  const { writeWikipage } = useWiki();

  return (
    <>
      <ReactModal isOpen={isWriteOpened}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const [title, content] = e.target;
            writeWikipage({ title: title.value, content: content.value });
            writeModalClosed();
          }}
        >
          <h2>제목</h2>
          <input type="text" name="title" />
          <h2>내용</h2>
          <textarea type="text" name="content" />
          <button type="submit">저장</button>
          <button onClick={writeModalClosed}>취소</button>
        </form>
      </ReactModal>
    </>
  );
};

export default WikipageWrite;
