import React from "react";
const Pagination = ({ currentPage, blogsPerPage, paginate, totalPages }) => (
  <div className="w-full flex justify-center items-center my-8 gap-4">
    <button
      type="button"
      onClick={() => paginate(currentPage - 1)}
      disabled={currentPage === 1}
      className={`${currentPage === 1 ? "cursor-not-allowed" : ""}`}
    >
      Previous
    </button>
    {Array.from({ length: totalPages }, (_, index) => (
      <button
        type="button"
        onClick={() => paginate(index + 1)}
        className={`transition-all duration-300 ease-in-out py-1 px-2 ${
          currentPage === index + 1 ? "bg-white text-black" : ""
        }`}
      >
        {index + 1}
      </button>
    ))}
    <button
      type="button"
      onClick={() => paginate(currentPage + 1)}
      disabled={currentPage === totalPages}
      className={`${currentPage === totalPages ? "cursor-not-allowed" : ""}`}
    >
      Next
    </button>
  </div>
);
export default Pagination;
