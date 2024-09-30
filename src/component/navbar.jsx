import { NavLink } from "react-router-dom";
import './navbar.css';
export default function Navbar(){
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Online Shop</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <NavLink className={`nav-link  ${({ isActive })=>isActive ? '_active':''}`} end  aria-current="page" to={'/'}>Home</NavLink>
          </li>
          
          <li className="nav-item dropdown">
            <NavLink className={`nav-link  ropdown-toggle ${({ isActive })=>isActive ? '_active':''}`} end to={'/categories'} role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Categories
            </NavLink>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li><NavLink  className={`dropdown-item  ${({ isActive })=>isActive ? 'active':''}`} to={'/shoes'}>Shoes</NavLink></li>
              <li><NavLink className={`dropdown-item  ${({ isActive })=>isActive ? 'active':''}`} to={'/pures'}>Purse</NavLink></li>
              <li>
                <hr className="dropdown-divider"/>
              </li>
            </ul>
          </li>
          <li className="nav-item">
          <NavLink className={`nav-link _NH ${({ isActive })=>isActive ? 'active':''}`} end  aria-current="page" to={'/cart'}>Cart</NavLink>
          </li>
        </ul>
        <form className="d-flex mt-md-2" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-secondary" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</nav>
    </>
    );
}