import { Link } from "react-router-dom";
import { useState } from "react";

export default function Index({ blogs, createBlog }) {
  const [form, setForm] = useState({
    slug: "",
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
        title: "",
        description: "",
    });
  };

  // loaded function
  const loaded = () =>
    blogs.map((blog) => (
      <div key={blog.id} className="blog">
        <Link to={`/blogs/${blog.id}`}>
          
          <p className="badge rounded-pill bg-success">Author:{blog.slug}</p>
          <h1 className="link-style">{blog.title}</h1>       
        </Link>
        {/* <img src={blog.image} alt={blog.name} /> */}
    
      </div>
    ));

  const loading = () => <h1>Loading...</h1>;

  return (
    <section className="container mt-3">
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
          value={form.slug}
          onChange={handleChange}
        />
        <input type="submit" value="Submit"/>
      </form>
      <div>
      {blogs ? loaded() : loading()}
      </div>
    </section>
  );
}
