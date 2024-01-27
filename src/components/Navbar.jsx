import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md shadow-sm py-1">
      <div className="container">
        <img
          src="img/nafbby.jpg"
          className=" rounded-2"
          width={30}
          height={30}
          alt=""
        />
        <Link href="/" className="navbar-brand fw-bolder text-uppercase">
          Yarbaba Makeup
        </Link>
        <button
          className="navbar-toggler shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main-nav"
          aria-controls="main-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end align-center"
          id="main-nav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="#about" className="nav-link fw-bold">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a href="#features" className="nav-link fw-bold">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a href="#team" className="nav-link fw-bold">
                Team
              </a>
            </li>

            <li className="nav-item">
              <a href="" className="nav-link fw-bold">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
