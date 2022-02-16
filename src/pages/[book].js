import BookComponent from "../components/book";
import { getBook } from "../connections/books";

export async function getServerSideProps({ query }) {
  const book = await getBook(query.book);

  // Pass data to the page via props
  return { props: { book } };
}

function Book(props) {
  return <BookComponent book={props.book} />;
}

export default Book;
