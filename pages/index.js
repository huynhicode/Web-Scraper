import React, { useState } from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";
import styles from "../styles/Home.module.scss";

function Home() {
  const [inputValue, setInputValue] = useState("");
  const [results, setResults] = useState([]);

  return (
    <Layout>
      <form
        onSubmit={async (event) => {
          event.preventDefault();

          const rawResponse = await fetch("/api/scrape", {
            method: "POST",
            headers: { "Content-Type": "text/plain" },
            body: inputValue,
          });

          const urlData = await rawResponse.json();

          setResults(urlData);
          setInputValue("");
        }}
      >
        <label htmlFor="url">
          <div className={styles.instructions}>
            Input URL(s) to view raw HTML. Separate URLs with a comma.
          </div>

          <input
            type="text"
            name="url"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            className={styles.urlInput}
            placeholder="www.google.com, www.nasa.gov"
          />
        </label>

        <div>
          <input
            type="submit"
            value="Submit"
            disabled={inputValue === ""}
            className={styles.submitButton}
          />
        </div>
      </form>

      <ul className={styles.cardList}>
        {results.map((result) => (
          <li key={result.url}>
            <Card url={result.url} html={result.html} error={result.error} />
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export default Home;
