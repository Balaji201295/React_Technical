import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
const ItemList = ({ items, handleDelete, handleEdit }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const indexofLastItem = currentPage * itemsPerPage; // 1 * 8 = 8;
  const indexOfFirstItem = indexofLastItem - itemsPerPage; // 8 - 8 = 0;
  const currentItems = items.slice(indexOfFirstItem, indexofLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(items.length / itemsPerPage);

  return (
    <>
      {items.length ? (
        <div className="w-full bg-white/50 px-4 py-8 shadow-lg min-h-80">
          {currentItems.map((item, index) => (
            <div
              key={item.id}
              className="flex justify-between items-center gap-4 border-b border-[#114405] py-2 px-2"
            >
              <div className="flex justify-start items-center gap-3">
                <h3 className="text-base xl:text-2xl font-semibold">
                  {indexOfFirstItem + index + 1}.
                </h3>
                <p className="text-sm xl:text-xl font-normal uppercase">
                  {item.title}
                </p>
              </div>
              <div className="flex justify-end items-center gap-4">
                <button type="button" onClick={() => handleEdit(item.id)}>
                  <FaEdit className="w-5 h-5" />
                </button>
                <button type="button" onClick={() => handleDelete(item.id)}>
                  <MdDelete className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full flex justify-center items-center bg-white/50 px-4 py-8 shadow-lg min-h-80">
          <p>Items not found</p>
        </div>
      )}
      {currentPage >= 1 && (
        <div className="flex justify-center items-center gap-2">
          <button
            type="button"
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className={
              currentPage === 1 ? "cursor-not-allowed" : "cursor-pointer"
            }
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              type="button"
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`py-[4px] px-[10px] transition-all duration-300 ease-in-out ${
                currentPage === index + 1 ? "bg-primary text-white" : ""
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            type="button"
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={
              currentPage === totalPages
                ? "cursor-not-allowed"
                : "cursor-pointer"
            }
          >
            Next
          </button>
        </div>
      )}
    </>
  );
};
export default ItemList;
