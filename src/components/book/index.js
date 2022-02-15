function Book(props) {
  return (
    <div>
      <div
        style={{
          paddingTop: 10,
          paddingBottom: 15,
          height: 200,
        }}
      >
        <img
          style={{ boxShadow: "10px 5px 5px gray" }}
          src={props.book.volumeInfo.imageLinks?.thumbnail}
        />
      </div>
      <div>
        <div style={{ color: "gray", textDecoration: "underline" }}>
          {
            props.book.volumeInfo.categories?.[0]
            // map((str) => {
            //   return <div>{str}</div>;
            // })
          }
        </div>
        <div style={{ marginTop: 10 }}>{props.book.volumeInfo.title}</div>

        <div style={{ color: "gray", marginTop: 5 }}>
          {props.book.volumeInfo.authors?.map((str) => {
            return <div key={str}>{str}</div>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Book;
