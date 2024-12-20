import { useState } from "react";

const PaginationForProperties = ({
  pageInfo,
  totalCount,
  onPageChange,
  isFilterOn,
  fetchFilter,
}) => {
  const { hasNextPage, hasPreviousPage, endCursor, startCursor } = pageInfo;

  const itemsPerPage = 10;
  const totalPages = Math.ceil(totalCount / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const [previusPage, setPreviusPage] = useState(hasPreviousPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);

    if (newPage > currentPage) {
      onPageChange({
        first: itemsPerPage,
        after: endCursor,
        last: null,
        before: null,
      });
    } else if (newPage < currentPage) {
      onPageChange({
        first: null,
        after: null,
        last: itemsPerPage,
        before: startCursor,
      });
    }
  };

  return (
    <nav aria-label="Page navigation example position-relative top-5">
      <ul className="pagination">
        <li className={`page-item ${currentPage == 1 ? "disabled" : ""}`}>
          <button
            className="page-link"
            onClick={() => {
              if (isFilterOn) {
                setCurrentPage(currentPage - 1);
                fetchFilter(currentPage - 1);
                if (currentPage === 2) {
                  setPreviusPage(false);
                }
              } else {
                handlePageChange(currentPage - 1);
              }
            }}
            disabled={!previusPage}
          >
            <span aria-hidden="true">
              <i className="mdi mdi-chevron-left fs-6"></i>
            </span>
          </button>
        </li>

        {[...Array(totalPages)].map((_, index) => {
          const pageNumber = index + 1;
          return (
            <li
              key={pageNumber}
              className={`page-item ${
                pageNumber === currentPage ? "active" : ""
              }`}
            >
              <button
                className={`page-link ${
                  pageNumber === currentPage ? "active" : ""
                }`}
                onClick={() =>{ fetchFilter(pageNumber)
                  setCurrentPage(pageNumber);
                  setPreviusPage(true);
                }}
              >
                {pageNumber}
              </button>
            </li>
          );
        })}

        <li className={`page-item ${!hasNextPage ? "disabled" : ""}`}>
          <button
            className="page-link"
            onClick={() => {
              if (isFilterOn) {
                setCurrentPage(currentPage + 1);
                fetchFilter(currentPage + 1);
                setPreviusPage(true);
              } else {
                handlePageChange(currentPage + 1);
              }
            }}
            disabled={!hasNextPage}
          >
            <span aria-hidden="true">
              <i className="mdi mdi-chevron-right fs-6"></i>
            </span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default PaginationForProperties;
