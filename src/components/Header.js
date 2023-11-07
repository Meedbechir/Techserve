

const Header = () => {
  return (
    <header className="navbar navbar-expand-lg navbar-light ">
      <div className="container">
        <a className="navbar-brand fs-3" href="/">Architect</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item ">
              <a className="nav-link text-white" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/about">About us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/news">News</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/contact">Contacts</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/contact">Sign In</a>
            </li>
            <button className="btn btn-outline-info">TRY IT FREE</button>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header