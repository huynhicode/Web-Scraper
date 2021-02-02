import { useState } from "react";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.scss";
import Card from "../components/Card";

export default function Home() {
  const [urls, setUrls] = useState("");
  const [results, setResults] = useState([]);

  return (
    <Layout>
      <p>Instructions</p>
      <ol>
        <li>Input any URL to view its raw HTML as a string.</li>
        <li>Separate URLs with a comma.</li>
        <li>Click the submit button to view results.</li>
      </ol>
      <form
        onSubmit={(event) => {
          event.preventDefault();

          fetch("/api/scrape", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ urls }),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
              setResults(data);
              setUrls("");
            });
        }}
      >
        <label htmlFor="url">
          URL:
          <input
            type="text"
            name="url"
            value={urls}
            onChange={(event) => setUrls(event.target.value)}
            className={styles.urlInput}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>

      <ul>
        {results.map((result) => (
          <li key={result.url}>
            <Card url={result.url} html={result.html} />
          </li>
        ))}
      </ul>
    </Layout>
  );
}
