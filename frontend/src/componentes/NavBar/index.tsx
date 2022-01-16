import {ReactComponent as Github} from "assets/img/github.svg";
import "./styles.css";

function NavBar() {
    return (
        <header>
        <nav className="container">
          <div className="dsmovie-nav-content">
            <h1>DSMovie</h1>
            <a href="https://github.com/GeisianHReis">
              <div className="dsmovie-contact-container">
                <Github/>
                <p className="dsmovie-link">/Geisian</p>
              </div>
            </a>
          </div>
        </nav>
      </header>
    );
}

export default NavBar;