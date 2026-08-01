import React, { useState } from "react";
import Search from "./components/Search.jsx";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <div className="pattern">H</div>
      <div className="weapper">
        <header>
          <img src="./hero.png" alt="hero banner" />
          <h1>
            Find <span className="text-gradient">Movies</span> you'll enjoy
            without any issue
          </h1>
        </header>

        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
    </>
  );
};

export default App;
