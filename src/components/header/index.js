import style from "./index.module.css";
import { useState } from "react";
import { searchedBooks } from "../../stores";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();
  return (
    <div className={style.header}>
      <div
        style={{ display: "flex", justifyContent: "center", fontSize: "20px" }}
      >
        <h1>Search for books</h1>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            router.push("/");
            await searchedBooks.getBooks({
              text: searchedBooks.text,
              subject: searchedBooks.subject,
              sorting: searchedBooks.sorting,
              startIndex: searchedBooks.books.length,
            });
            // }
          }}
        >
          <input
            className={style.text}
            type={"text"}
            style={{ padding: "5px" }}
            onChange={(e) => (searchedBooks.text = e.target.value)}
          />
          <button type={"submit"}>Поиск</button>
        </form>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "15px" }}
      >
        <div>
          Categories
          <select
            style={{ margin: "10px", padding: "5px" }}
            onChange={(e) => (searchedBooks.subject = e.target.value)}
          >
            <option value="all" autoFocus={true}>
              {" "}
              all{" "}
            </option>
            <option value="art">art</option>
            <option value="biography">biography</option>
            <option value="computers">computers</option>
            <option value="history">history</option>
            <option value="medical">medical</option>
            <option value="poetry">poetry</option>
          </select>
        </div>
        <div>
          {" "}
          Sorting by
          <select
            style={{ margin: "10px", padding: "5px" }}
            onChange={(e) => (searchedBooks.sorting = e.target.value)}
          >
            <option value="relevance" autoFocus={true}>
              relevance
            </option>
            <option value="newest">newest</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Header;
