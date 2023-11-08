function App() {
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
            <article className="movie-item">
                <h3 className="title">Web development</h3>
                <p className="description">github.com/vergaraaa</p>

                <button className="edit">Edit</button>
                <button className="delete">Delete</button>
            </article>

            <article className="movie-item">
                <h3 className="title">Web development</h3>
                <p className="description">github.com/vergaraaa</p>

                <button className="edit">Edit</button>
                <button className="delete">Delete</button>
            </article>

            <article className="movie-item">
                <h3 className="title">Web development</h3>
                <p className="description">github.com/vergaraaa</p>

                <button className="edit">Edit</button>
                <button className="delete">Delete</button>
            </article>

            <article className="movie-item">
                <h3 className="title">Web development</h3>
                <p className="description">github.com/vergaraaa</p>

                <button className="edit">Edit</button>
                <button className="delete">Delete</button>
            </article>
        </section>

        {/* SIDE BAR */}
        <aside className="aside">
            <div className="search">
                <h3 className="title">Searcher</h3>
                <form>
                    <input type="text" />
                    <button>Search</button>
                </form>
            </div>

            <div className="add">
                <h3 className="title">Add movies</h3>
                <form>
                    <input type="text" placeholder="Title" />
                    <textarea placeholder="Description"></textarea>
                    <input type="submit" value="Save" />
                </form>
            </div>
        </aside>

        {/* FOOTER */}
        <footer className="footer">
            &copy; Master in JavaScript - <a href="https://www.github.com/vergaraaa">github/vergaraaa</a>
        </footer>
    </div>
  );
}

export default App;
