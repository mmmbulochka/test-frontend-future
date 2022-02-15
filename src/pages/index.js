import { searchedBooks } from "../stores";
import { observer } from "mobx-react";
import Card from "../components/card";
import { useRouter } from "next/router";

function Home() {
  const router = useRouter();
  return (
    <div style={{ paddingBottom: 10 }}>
      {searchedBooks.searched && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 10,
          }}
        >
          Found {searchedBooks.number} results
        </div>
      )}
      <div
        style={{
          display: "flex",
          gap: 20,
          flexWrap: "wrap",
          justifyContent: "center",
          paddingLeft: 10,
          paddingRight: 10,
        }}
      >
        {searchedBooks.books?.map((book) => {
          return (
            <Card
              onClick={() => {
                router.push(`/${book.id}`);
              }}
              book={book}
              key={book.id}
            />
          );
        })}
      </div>
      {searchedBooks.searched &&
        searchedBooks.books.length < searchedBooks.number && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: 10,
            }}
          >
            <button
              onClick={async () => {
                await searchedBooks.getBooks();
              }}
            >
              Show more
            </button>
          </div>
        )}
    </div>
  );
}

export default observer(Home);
