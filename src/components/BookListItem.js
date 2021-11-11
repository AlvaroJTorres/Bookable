import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { download } from "../services/firebase/storage";

const BookTitle = styled.h2`
  color: #768591;
`;

const BookImage = styled.img`
  max-width: 50%;
  display: block;
  margin: 0 auto;
`;

const BookSmallText = styled.p`
  font-size: 0.8em;
`;

const BookButton = styled.button`
  box-shadow: 4px -3px 1px rgba(0 0 0 / 10%);
`;

export default function BookListItem({ book }) {
  const [open, toggle] = useState(false);
  const [cover, setCover] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    download(book.cover_page).then((image) => {
      setCover(image);
      setLoading(false);
    });
  }, [book.cover_page]);

  return (
    <li>
      {loading && <p>Loading...</p>}
      {cover && <BookImage alt={book.title} src={cover} />}
      <BookTitle>{book.title}</BookTitle>
      {open && (
        <div>
          <p>{book.author}</p>
          <BookSmallText>{book.description}</BookSmallText>
          <BookSmallText>{book.published_at}</BookSmallText>
        </div>
      )}
      <BookButton onClick={(e) => toggle(!open)}>
        {open ? "Show less" : "Show more..."}
      </BookButton>
    </li>
  );
}
