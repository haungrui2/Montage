/* This is the navbar for all windows, including the logo (main button, which sends
you back to the main page), the menu, the search bar, and user login option.*/

export default function Navbar() {
    return (
        <div class = "navbar">
            <button id = "MainButton" >MainButton</button>
            {/* this will later be replaced by an image of the logo */}
            <button id = "MoviesButton">MoviesButton</button>
            <button id = "SearchButton">SearchButton</button>
            <button id = "Login">Login</button>
        </div>
    )
}