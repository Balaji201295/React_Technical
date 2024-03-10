import React, { useState, useEffect } from "react";
import api from "../api/blogs";
import { useParams } from "react-router-dom";
const SingleBlog = () => {
  const [blog, setBlog] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await api.get(`/blogs/${id}`);
        setBlog(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching single blog:", error);
      }
    };
    fetchBlog();
  }, [id]);
  if (!blog) {
    return <div>Loading...</div>;
  }
  const {
    title,
    image,
    category,
    author,
    published_date,
    reading_time,
    content,
  } = blog;
  return (
    <section
      key={id}
      className="w-full max-w-[1000px] mx-auto flex flex-col justify-start items-start gap-2 mt-20"
    >
      <h1 className="text-2xl font-semibold capitalize italic">{title}</h1>
      <img src={image} alt={title} className="w-full object-cover" />
      <h3 className="text-lg font-extrabold">{author}</h3>
      <div className="flex flex-col ss:flex-row justify-start items-start md:gap-8">
        <p className="text-sm">
          Category:{" "}
          <span className="bg-white text-black px-2 rounded">{category}</span>
        </p>
        <p className="text-sm font-normal">
          Published Date: <span className="font-bold">{published_date}</span>
        </p>
        <p className="text-sm">
          Reading Time:{" "}
          <span className="bg-white text-black px-2 rounded">
            {reading_time}
          </span>
        </p>
      </div>
      <ul className="list-none flex flex-col justify-start items-start gap-2 mt-8">
        {blog.content.paragraphs.map((paragraph, index) => (
          <li key={index} className="flex flex-col gap-2">
            {paragraph}
          </li>
        ))}
      </ul>
    </section>
  );
};
export default SingleBlog;
