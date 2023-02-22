import { useParams, useNavigate } from "react-router";
import { useState } from "react";

export default function Show({ blogs, updateBlogs, deleteBlog }) {
  const { id } = useParams();
  const blog = blogs.find((blog) => parseInt(blog.id) === parseInt(id));
  const navigate = useNavigate();

  const [editForm, setEditForm] = useState(blog);

  const handleChange = (evt) => {
    setEditForm({
      ...editForm,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    updatePeople(editForm, id);
    navigate("/");
  };

  const removeBlog = () => {
    deleteBlog(id);
    navigate("/");
  };

  return (
    <div className="blog">
      <h1>{blog.title}</h1>
      <h2>{blog.description}</h2>
      <h3>{blog.author}</h3>
      
      <button id="DELETE" onClick={removeBlog}>
        Delete
      </button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={editForm.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="image"
          value={editForm.image}
          onChange={handleChange}
        />
        <input
          type="text"
          name="title"
          placeholder="title"
          value={editForm.title}
          onChange={handleChange}
        />
        <button type="submit">Add Blog</button>
      </form>
    </div>
  );
}