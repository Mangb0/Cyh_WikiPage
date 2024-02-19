import { useState } from "react";

const Pagination = ({ page, totalItems, limit, setPage }) => {
  const totalPage = Math.ceil(totalItems / limit);

  const limitPage = 5;

  const startPage = Math.floor((page - 1) / limitPage) * limitPage + 1;

  const isPrev = startPage > 1;
  const isNext = startPage + 5 <= totalPage;

  const endPage = isNext ? startPage + 4 : startPage + ((totalPage - 1) % 5);
  const buttonCnt = endPage - startPage + 1;

  return (
    <div>
      {isPrev && <button onClick={() => setPage(startPage - 5)}>이전</button>}
      {Array(buttonCnt)
        .fill()
        .map((_, i) => (
          <button key={i} onClick={() => setPage(startPage + i)}>
            {startPage + i}
          </button>
        ))}
      {isNext && <button onClick={() => setPage(startPage + 5)}>다음</button>}
    </div>
  );
};

export default Pagination;
