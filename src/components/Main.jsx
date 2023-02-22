import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Index from "../pages/Index";
import Show from "../pages/Show";


// This is the moment you have been waiting for, lets connect Django to React!
 const URL = "http://localhost:8000/blogs/"


export default function Main() {
  const [blogs, setBlog] = useState(null);


  // INDEX

  const getBlogs = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    setBlog(data)
  }



  // CREATE
  const createBlog = async (blog) => {
    // fetch - POST
    getBlogs();
  };

  // UPDATE
  const updateBlog = async (blog, id) => {
    // fetch - PUT
    getBlogs();
  };


  // DELETE
  const deleteBlog = async (id) => {
    // fetch - DELETE
    getBlogs();
  };

  useEffect(() => {
    getBlogs();
    console.log(blogs)
  }, []);

  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={<Index blogs={blogs} createBlog={createBlog} />}
        />
        <Route
          path="/blogs/:slug"
          element={
            <Show
              blogs={blogs}
              deleteBlog={deleteBlog}
              updateBlog={updateBlog}
            />
          }
        />
      </Routes>
    </main>
  );
}
