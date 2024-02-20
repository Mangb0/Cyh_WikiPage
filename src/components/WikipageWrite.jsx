import ReactModal from "react-modal";
import useWiki from "../hooks/useWiki";

const WikipageWrite = ({ isWriteOpened, writeModalClosed }) => {
  const { writeWikipage } = useWiki();

  const modalStyles = {
    overlay: {
      backgroundColor: "rgba(0,0,0,.05)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      background: "#fff",
      borderRadius: "15px",
      padding: "30px",
    },
  };

  return (
    <>
      <ReactModal
        isOpen={isWriteOpened}
        style={modalStyles}
        onRequestClose={writeModalClosed}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const [title, content] = e.target;
            writeWikipage({ title: title.value, content: content.value });
            writeModalClosed();
          }}
        >
          <div>
            <h2>제목</h2>
            <input type="text" name="title" />
            <h2>내용</h2>
            <textarea type="text" name="content" />
          </div>
          <button type="submit">저장</button>
          <button onClick={writeModalClosed}>취소</button>
        </form>
      </ReactModal>
    </>
  );
};

export default WikipageWrite;
