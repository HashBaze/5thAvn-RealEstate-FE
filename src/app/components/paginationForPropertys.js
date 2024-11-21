import { useState } from 'react';

const PaginationForProperties = ({ pageInfo, totalCount, onPageChange }) => {
  const { hasNextPage, hasPreviousPage, endCursor, startCursor } = pageInfo;

  const itemsPerPage = 10; 
  const totalPages = Math.ceil(totalCount / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);

    if (newPage > currentPage) {
      onPageChange({
        first: itemsPerPage,
        after: endCursor,
        last: null,
        before: null
      });
    } else if (newPage < currentPage) {
      onPageChange({
        first: null,
        after: null,
        last: itemsPerPage,
        before: startCursor
      });
    }
  };

  return (
    <nav aria-label="Page navigation example position-relative top-5">
      <ul className="pagination">
        <li className={`page-item ${!hasPreviousPage ? 'disabled' : ''}`}>
          <button 
            className="page-link" 
            onClick={() => handlePageChange(currentPage - 1)} 
            disabled={!hasPreviousPage}
          >
            Back
          </button>
        </li>

        {[...Array(totalPages)].map((_, index) => {
          const pageNumber = index + 1;
          return (
            <li key={pageNumber} className={`page-item ${pageNumber === currentPage ? 'active' : ''}`}>
              <button
                className="page-link disabled"
                onClick={() => handlePageChange(pageNumber)}
              >
                {pageNumber}
              </button>
            </li>
          );
        })}

        <li className={`page-item ${!hasNextPage ? 'disabled' : ''}`}>
          <button 
            className="page-link" 
            onClick={() => handlePageChange(currentPage + 1)} 
            disabled={!hasNextPage}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default PaginationForProperties;
