export async function getBooks({ text, subject, sorting, startIndex }) {
  const url = new URL("https://www.googleapis.com/books/v1/volumes");
  url.searchParams.set("key", process.env.NEXT_PUBLIC_KEY);
  url.searchParams.set("orderBy", sorting);
  url.searchParams.set("startIndex", startIndex);
  url.searchParams.set("maxResults", "30");
  if (subject === "all") {
    url.searchParams.set("q", text);
  } else {
    url.searchParams.set("q", `${text}+subject:${subject}`);
  }
  const response = await fetch(url.toString());
  if (!response.ok) {
    console.error("getBooks", response);
    throw new Error("ERROR getBooks fetch");
  }
  return response.json();
}

export async function getBook(id) {
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes/${id}?key=${process.env.KEY}`
  );
  if (!response.ok) {
    console.error("getBook", response);
    throw new Error("ERROR getBook fetch");
  }
  return response.json();
}
