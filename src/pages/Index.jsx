import { Link } from "react-router-dom";
import { useState } from "react";

export default function Index({ blogs, createBlog }) {
  const [form, setForm] = useState({
    slug: "",
    author: "",
    title: "",
    description: "",
  });

  const handleChange = (evt) => {
    setForm({
      ...form,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    createBlog(form);
    setForm({
        slug: "",
        author: "",
        title: "",
        description: "",
    });
  };

  // loaded function
  const loaded = () =>
    blogs.map((blog) => (
      <div key={blog.id} className="blog">
        <Link to={`/blogs/${blog.id}`}>
          <h1>{blog.title}</h1>
          <p>{blog.author}</p>
        </Link>
        {/* <img src={blog.image} alt={blog.name} /> */}
        <h3>{blog.title}</h3>
      </div>
    ));

  const loading = () => <h1>Loading...</h1>;

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="title"
          name="title"
          placeholder="title"
          value={form.title}
          onChange={handleChange}
        />
        <input
          type="description"
          name="description"
          placeholder="description"
          value={form.description}
          onChange={handleChange}
        />
        <input
          type="author"
          name="author"
          placeholder="author"
          value={form.author}
          onChange={handleChange}
        />
        <input
          type="slug"
          name="slug"
          placeholder="slug"
          value={form.slug}
          onChange={handleChange}
        />
        <input type="submit" value="Submit"/>
      </form>
      {blogs ? loaded() : loading()}
    </section>
  );
}
