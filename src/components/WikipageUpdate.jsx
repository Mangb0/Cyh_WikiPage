const WikipageUpdate = ({ wikipageObj, updateWikipage }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const [title, content] = e.target;
        updateWikipage({ title: title.value, content: content.value });
      }}
    >
      <h2>제목</h2>
      <input type="text" name="title" defaultValue={wikipageObj.title} />
      <h2>내용</h2>
      <textarea type="text" name="content" defaultValue={wikipageObj.content} />
      <button type="submit">저장</button>
    </form>
  );
};

export default WikipageUpdate;
