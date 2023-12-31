import React, { useState } from 'react'

import { AddMovie } from "./components/AddMovie";
import { List } from "./components/List";
import { Search } from "./components/Search";

function App() {

    const [movies, setMovies] = useState([]);

  return (
    <div className="layout">
        {/* HEADER */}
        <header className="header">
            <div className="logo">
                <div className="play"></div>
            </div>

            <h1>MyMovies</h1>
        </header>

        {/* NAV BAR */}
        <nav className="nav">
            <ul>
                <li><a href="/#">Home</a></li>
                <li><a href="/#">Movies</a></li>
                <li><a href="/#">Blog</a></li>
                <li><a href="/#">Contact</a></li>
            </ul>
        </nav>

        {/* PRINCIPAL CONTENT */}
        <section className="content">
            {/* movies list */}
            <List movies={movies} setMovies={setMovies} />
        </section>

        {/* SIDE BAR */}
        <aside className="aside">
            <Search movies={movies} setMovies={setMovies}/>

            <AddMovie setMovies={setMovies} />
        </aside>

        {/* FOOTER */}
        <footer className="footer">
            &copy; Master in JavaScript - <a href="https://www.github.com/vergaraaa">github/vergaraaa</a>
        </footer>
    </div>
  );
}

export default App;
