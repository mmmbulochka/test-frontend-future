import { useRouter } from "next/router";
import { searchedBooks } from "../stores";
import { getBook } from "../connections/books";

const Book = () => {
  const router = useRouter();
  const selectedBook = searchedBooks.books.find((book) => {
    return book.id === router.query.book;
  });
  return (
    <div style={{ display: "flex" }}>
      <div style={{ padding: 60, backgroundColor: "#DCDCDC" }}>
        <img
          style={{ height: 300, boxShadow: "10px 5px 5px gray" }}
          src={selectedBook.volumeInfo.imageLinks?.thumbnail}
        />
      </div>
      <div style={{ padding: 40 }}>
        <div style={{ color: "gray" }}>
          {selectedBook.volumeInfo.categories?.map((category) => {
            return <div key={category}>{category}</div>;
          })}
        </div>
        <div style={{ fontSize: 20, marginTop: 10 }}>
          {selectedBook.volumeInfo.title}
        </div>
        <div style={{ color: "gray", marginTop: 5 }}>
          {selectedBook.volumeInfo.authors?.map((author) => {
            return <div key={author}>{author}</div>;
          })}
        </div>
        <div style={{ marginTop: 30 }}>
          {selectedBook.volumeInfo.description}
        </div>
      </div>
    </div>
  );
};

export default Book;
