import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

export default function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios

      // //   proxy: {
      //   "/api": "http://localhost:3000",
      // }, check in vite.config.js we set api to this soo we can now render the routes with api
      .get("/api/jokes")
      .then((response) => {
        console.log("Jokes fetched successfully:", response.data);
        setJokes(response.data);
      })
      .catch((error) => {
        console.log("Error fetching jokes:", error);
      });
  }, []);

  return (
    <>
      <h1>App</h1>
      <p>Jokes: {jokes.length}</p>

      {/* Mapping the Jokes */}
      {jokes.map((joke, index) => (
        <div key={joke.id || index}>
          <h3>{joke.title}</h3>
        </div>
      ))}
    </>
  );
}
