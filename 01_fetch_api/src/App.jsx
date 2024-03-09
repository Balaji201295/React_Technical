import React, { useState, useEffect } from "react";
const url = "https://jsonplaceholder.typicode.com/posts";
const App = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setPosts(data);
    };
    fetchPosts();
  }, []);

  // pagination

  const indexOfLastPost = currentPage * postsPerPage; // 1 * 10 = 10
  const indexOfFirstPost = indexOfLastPost - postsPerPage; // 10 - 10 = 0
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className="w-full max-w-[800px] m-auto pt-12">
      <div>
        {currentPosts.map(({ id, title }, index) => (
          <div
            key={id}
            className={`flex items-center justify-start gap-4 border border-solid border-white/50 py-2 px-4 ${
              index !== posts.length - 1 ? "mb-4" : ""
            }`}
          >
            <h3 className="text-lg font-bold">{id}.</h3>
            <p className="text-base font-normal capitalize">{title}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center my-8 gap-4">
        <button
          type="button"
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="border border-solid border-white/50 py-1 p-2 text-base font-semibold"
        >
          Previous
        </button>
        {Array.from(
          { length: Math.ceil(posts.length / postsPerPage) },
          (_, index) => (
            <button
              type="button"
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`border border-solid border-white/50 py-1 p-2  text-base font-semibold transition-all duration-300 ${
                currentPage === index + 1 ? "bg-white/70 text-blue-900" : ""
              }`}
            >
              {index + 1}
            </button>
          )
        )}
        <button
          type="button"
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === Math.ceil(posts.length / postsPerPage)}
          className="border border-solid border-white/50 py-1 p-2  text-base font-semibold"
        >
          Next
        </button>
      </div>
    </div>
  );
};
export default App;
