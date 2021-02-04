import { useState } from "react";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.scss";
import Card from "../components/Card";

export default function Home() {
  const [urls, setUrls] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  return (
    <Layout>
      <form
        onSubmit={async (event) => {
          event.preventDefault();

          const response = await fetch("/api/scrape", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ urls }),
          });

          if (response.ok === false) {
            setError("Error: please check that you have a valid URL.");
            return;
          }
          const data = await response.json();

          setResults(data);
          setUrls("");
        }}
      >
        <label htmlFor="url">
          <div className={styles.instructions}>
            {" "}
            Input URL to view raw HTML. Separate URLs with a comma.
          </div>

          <input
            type="text"
            name="url"
            value={urls}
            onChange={(event) => setUrls(event.target.value)}
            className={styles.urlInput}
            placeholder="www.google.com, www.nasa.gov"
          />
        </label>

        <div>
          <input type="submit" value="Submit" className={styles.submitButton} />
        </div>

        <div className={styles.error}>{error}</div>
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
