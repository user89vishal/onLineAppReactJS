import React from "react";
import _ from "lodash";

function pagination(props) {
  const { itemsCount, pageSize, onPageChange, activePageNumber } = props;

  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);
  pages.splice(0, 0, "Previous");
  pages.splice(pages.length + 1, 0, "Next");

  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={page}
            className={
              page === activePageNumber ? "page-item active" : "page-item"
            }
          >
            <a className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default pagination;
