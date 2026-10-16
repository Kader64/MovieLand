import searchIcon from "../assets/search.svg"

function Header({onQuery, onCategory}) {
    return (
        <div className="header">
            <div className="header-logo">
                MovieLand
            </div>
            <div className="header-menu">
                <div className="header-menu-item" onClick={(e) => {
                    let input = document.querySelector(".header-searchBar-input");
                    input.placeholder = "Szukaj seriali..."
                    onQuery("")
                    onCategory("Movies")
                }}>
                    Movies
                </div>
                <div className="header-menu-item" onClick={(e) => {
                    let input = document.querySelector(".header-searchBar-input");
                    input.placeholder = "Szukaj aktora..."
                    input.value = ""
                    onQuery("")
                    onCategory("People")
                }}>
                    People
                </div>
                <div className="header-menu-item">
                    <a href="https://www.tvmaze.com/api">API</a>
                </div>
            </div>
            <div className="header-searchBar-outside">
                <div className="header-searchBar_block">
                    <input className="header-searchBar-input" placeholder="Szukaj seriali..." onInput={(e) => onQuery(e.target.value)}></input>
                    <img src={searchIcon} alt="search" />
                </div>
            </div>
        </div >
    );
}

export default Header