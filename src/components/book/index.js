import style from "./index.module.css";

const Book = (props) => {
  const selectedBook = props.book;

  return (
    <div className={style.book}>
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
          <span
            dangerouslySetInnerHTML={{
              __html: selectedBook.volumeInfo.description,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Book;
