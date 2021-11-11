import styled from "@emotion/styled";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import BookListItem from "../components/BookListItem";
import Header from "../components/Header";
import Search from "../components/Search";
import { getDocuments } from "../services/firebase/store";

const BookList = styled.ul`
  list-style: none;
  padding: 0 1em;
`;

export default function Books() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("");
  const memoBooks = useMemo(filterBooks, [books, filter]);

  function filterBooks() {
    const filteredBooks = books.filter((book) =>
      book.title.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredBooks;
  }

  useEffect(() => {
    setLoading(true);
    getDocuments("books").then((books) => {
      setBooks(books);
      setLoading(false);
    });
  }, []);

  return (
    <section>
      <Header>
        <h1>Bookeable</h1>
      </Header>
      {loading && <p>Loading...</p>}
      <Search
        placeholder="Search for books!"
        query={query}
        setQuery={setQuery}
        onSearch={() => setFilter(query)}
      />
      <BookList>
        {memoBooks.map((book) => (
          <BookListItem key={book.id} book={book} />
        ))}
      </BookList>
      <Link to="/new-book">New Book</Link>
    </section>
  );
}
