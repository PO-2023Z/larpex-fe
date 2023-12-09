import { Pagination } from "react-bootstrap";

interface PaginationPanelProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

const PaginationPanel: React.FC<PaginationPanelProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePageChange = (pageNumber: number) => {
    onPageChange(pageNumber);
  };

  const renderPaginationItems = () => {
    const items = [];

    const maxPages = Math.min(totalPages, 10);

    let startIndex = Math.max(currentPage - Math.floor(maxPages / 2), 1);

    if (startIndex + maxPages - 1 > totalPages) {
      startIndex = totalPages - maxPages + 1;
    }

    if (startIndex > 1) {
      items.push(
        <Pagination.Ellipsis
          key="ellipsis-start"
          onClick={() => handlePageChange(startIndex - 1)}
        />
      );
    }

    for (let i = startIndex; i < startIndex + maxPages; i++) {
      items.push(
        <Pagination.Item
          key={i}
          active={i === currentPage}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </Pagination.Item>
      );
    }

    if (startIndex + maxPages <= totalPages) {
      items.push(
        <Pagination.Ellipsis
          key="ellipsis-end"
          onClick={() => handlePageChange(startIndex + maxPages)}
        />
      );
    }

    return items;
  };

  return <Pagination>{renderPaginationItems()}</Pagination>;
};

export default PaginationPanel;
