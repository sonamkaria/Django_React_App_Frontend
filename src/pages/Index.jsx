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
      <div key={blog.slug} className="blog">
        <Link to={`/blogs/${blog.slug}`}>
          <h1>{blog.title}</h1>
        </Link>
        {/* <img src={blog.image} alt={blog.name} /> */}
        <h3>{blog.title}</h3>
      </div>
    ));

  const loading = () => <h1>Loading...</h1>;

  return (
    <section>
      {/* <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="image"
          value={form.image}
          onChange={handleChange}
        />
        <input
          type="text"
          name="title"
          placeholder="title"
          value={form.title}
          onChange={handleChange}
        />
        <input type="submit" value="Submit"/>
      </form> */}
      {blogs ? loaded() : loading()}
    </section>
  );
}
