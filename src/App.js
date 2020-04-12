import React, { useState } from "react";
import "./styles.css";

export default function App() {
  function handleSubmit(event) {
    event.preventDefault();
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=" +
          book +
          "&key=" +
          apiKey +
          "maxResults=40"
      )
      .then(data => {
        console.log(data);
        setResult(data.data.items);
      });
  }

  function handleChange(event) {
    const book = event.target.value;
    setBook(book);
  }

  const [book, setBook] = useState();
  const [result, setResult] = useState([]);
  const [apiKey, setApiKey] = useState(
    "AIzaSyB_tnEiIYgJ82bxMUcpdxx0puc5h1kPuJc"
  );
  return (
    <div class="container">
      <h1> Book Search App </h1>

      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <input
            type="text"
            onChange={handleChange}
            className="input-control"
            placeholder="Search for books"
            autoComplete="off"
          />
        </div>
        <button type="submit" className="btn btn-danger">
          Search
        </button>
      </form>
      {result.map(book => (
        <a target="_blank" href={book.volumeInfo.previewLink}>
          <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title} />
        </a>
      ))}
    </div>
  );
}
