export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary hero">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="/logo.png"
              alt="Logo"
              width="35"
              height="35"
              className="d-inline-block align-text-top mr-1"
            />
            Furrever
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0 ubuntu-bold h5">
              <li className="nav-item mr-4">
                <a
                  className="nav-link hover-border-bottom active "
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item mr-4">
                <a className="nav-link hover-border-bottom" href="#">
                  Community
                </a>
              </li>
              <li className="nav-item mr-4">
                <a className="nav-link hover-border-bottom" href="#">
                  Shop
                </a>
              </li>
              <li className="nav-item mr-4">
                <a className="nav-link hover-border-bottom" href="#">
                  Adopt
                </a>
              </li>
              <li className="nav-item mr-4">
                <a className="nav-link hover-border-bottom" href="#">
                  About
                </a>
              </li>
              <li className="nav-item mr-4">
                <a className="nav-link hover-border-bottom" href="#">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link hover-border-bottom" href="#">
                  Dashboard
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
