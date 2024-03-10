import React, { useState, useEffect } from "react";
import api from "../api/blogs";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
const BlogLists = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 12;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await api.get("/blogs");
        setBlogs(response.data);
      } catch (err) {
        console.log("Error data fetching:", err.message);
      }
    };
    fetchBlogs();
  }, []);

  // pagination
  const indexOfLastBlog = currentPage * blogsPerPage; // 2 * 12 = 24;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage; // 24 - 12 = 12;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(blogs.length / blogsPerPage);
  return (
    <>
      <section className="grid grid-cols-1 ss:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-4 mt-24">
        {currentBlogs.map((blog) => {
          const { id, title, image, category, author } = blog;
          return (
            <Link
              to={`/blogs/${blog.id}`}
              key={id}
              className="flex-1 flex flex-col justify-start items-start gap-2 bg-white text-black p-3 rounded shadow-lg"
            >
              <img
                src={image}
                alt={title}
                className="w-[300px] h-[150px] object-cover"
              />
              <div className="flex justify-start items-center gap-4">
                <h3>{category}</h3>
                <h3>{author}</h3>
              </div>
              <h1>{title.length < 50 ? title : `${title.slice(0, 50)}...`}</h1>

              <p>
                {blog.content.paragraphs.slice(0, 1).map((paragraph, index) => (
                  <span key={index}>
                    {paragraph.length < 100
                      ? paragraph
                      : `${paragraph.slice(0, 75)}...`}
                  </span>
                ))}
              </p>
            </Link>
          );
        })}
      </section>
      <Pagination
        currentPage={currentPage}
        paginate={paginate}
        blogsPerPage={blogsPerPage}
        totalPages={totalPages}
      />
    </>
  );
};
export default BlogLists;
