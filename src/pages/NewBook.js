import styled from "@emotion/styled";
import { useState } from "react";
import { Link } from "react-router-dom";
import { upload } from "../services/firebase/storage";
import { saveDocument } from "../services/firebase/store";

const BookForm = styled.form`
  padding: 1em;
  .input-field {
    display: flex;
    margin: 0.5em 0;
    label {
      flex: 1;
    }
    input,
    textarea {
      flex: 2;
      border: 1px solid #768591;
      border-radius: 10px;
      padding: 0.5em;
    }
  }
`;

export default function NewBook() {
  const [form, setForm] = useState({
    title: "",
    published_at: "",
    author: "",
    description: "",
    cover_page: null,
  });

  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const snapshot = await upload(form.cover_page);
    const image = `gs://${snapshot.ref.bucket}/${snapshot.ref.fullPath}`;
    await saveDocument("books", { ...form, cover_page: image });
    setLoading(false);
  }

  function setFormValue(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function setFile(e) {
    const file = e.target.files[0];
    setForm({ ...form, cover_page: file });
  }

  return (
    <section>
      <h1>New Book</h1>
      {loading && <p>Saving...</p>}
      <BookForm onSubmit={handleSubmit}>
        <div className="input-field">
          <label>Title</label>
          <input
            name="title"
            value={form.title}
            onChange={setFormValue}
            type="text"
          />
        </div>
        <div className="input-field">
          <label>Published at</label>
          <input
            name="published_at"
            value={form.published_at}
            onChange={setFormValue}
            type="date"
          />
        </div>
        <div className="input-field">
          <label>Author</label>
          <input
            name="author"
            value={form.author}
            onChange={setFormValue}
            type="text"
          />
        </div>
        <div className="input-field">
          <label>Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={setFormValue}
          ></textarea>
        </div>
        <div className="input-field">
          <label>Cover page</label>
          <input type="file" onChange={setFile} accept="image/jpg,image/png" />
        </div>
        <button disabled={loading}>Create New Book</button>
      </BookForm>
      <Link to="/">Go Back</Link>
    </section>
  );
}
