import React, { useState } from "react";
import s from "./Pagination.module.css";

let Pagination = ({
  totalItemsCount,
  pageSize,
  currentPage,
  onChangedPage,
  portionSize = 10,
}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div>
      {portionNumber > 1 && (
        <button
          className="btn btn-secondary me-1 mt-1"
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}
        >
          Prev
        </button>
      )}
      {pages
        .filter(
          (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
        )
        .map((p) => {
          return (
            <span
              className={`${currentPage === p && s.selectedStyle} ${
                s.pageNumber
              }`}
              onClick={(e) => {
                onChangedPage(p);
              }}
            >
              {p}
            </span>
          );
        })}
      {portionCount > portionNumber && (
        <button
          className="btn btn-secondary ms-1 mt-1"
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }}
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
