import { useParams, useNavigate } from "react-router";
import { useState } from "react";

export default function Show({ blogs, updateBlog, deleteBlog }) {
  const { id } = useParams();
  console.log(id)
  const blog = blogs?.find((blog) => parseInt(blog.id) === parseInt(id));
  const navigate = useNavigate();
console.log(blog)
  const [editForm, setEditForm] = useState(blog);

  const handleChange = (evt) => {
    setEditForm({
      ...editForm,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    updateBlog(editForm, blog.id);
    navigate("/blogs");
  };

  const removeBlog = () => {
    deleteBlog(blog.id);
    navigate("/blogs");
  };



  return (
    <div className="container mt-5">
      <h1>{blog?.title}</h1>
      <h2>{blog?.description}</h2>
      <h3>{blog?.slug}</h3>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="title"
          value={editForm?.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="description"
          value={editForm?.description}
          onChange={handleChange}
        />
  
        <input
          type="text"
          name="slug"
          placeholder="author"
          value={editForm?.slug}
          onChange={handleChange}
        />
        <button type="submit">Update Blog</button>
      </form>
      <button class="btn btn-secondary" tabindex="-1" role="button" id="DELETE" onClick={removeBlog}>
        Delete
      </button>
    </div>
  );
}