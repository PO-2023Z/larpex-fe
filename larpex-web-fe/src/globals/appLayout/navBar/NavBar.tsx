import {Nav, Navbar} from "react-bootstrap";
import "./NavBar.css";

function NavBar() {
    return (
        <Navbar fixed="top" bg="navbar-background-color" className="navbar-background" variant="dark">
            <table className="navbar-table">
                <thead>
                <tr><td>
                    <div className="title-tile">
                        <a href="/" className="title-text">LARPEX</a>
                    </div>
                </td></tr>
                </thead>
                <tbody>
                <tr><td>
                    <Nav className="mr-auto navbar-tile">
                        <Nav.Link className="border-right" href="/"><div className="ref-tile">Strona Główna</div></Nav.Link>
                        <Nav.Link className="border-right" href="/events"><div className="ref-tile">Wydarzenia</div></Nav.Link>
                        <Nav.Link className="border-right" href="/create-event"><div className="ref-tile">Utwórz wydarzenie</div></Nav.Link>
                        <Nav.Link className="border-right" href="/events-panel"><div className="ref-tile">Panel wydarzeń</div></Nav.Link>
                        <Nav.Link className="border-right" href="/events-organiser-panel"><div className="ref-tile">Organizacja wydarzeń</div></Nav.Link>
                    </Nav>
                </td></tr>

                </tbody>
            </table>
        </Navbar>
    )
}

export default NavBar;