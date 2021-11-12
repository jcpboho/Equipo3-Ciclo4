
import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';

const Header = () => {

    const logout = () => {
        localStorage.removeItem("token");
    }

    return (
        <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
            <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#a">Company name</a>
            <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
            <div className="navbar-nav">
                <div className="nav-item text-nowrap">
                    <Link className="nav-link px-3" to="/login" onClick={logout}>
                        <Icon.LogOut witdh="24" heigth="24" className="mr-2 feather" />
                        Sign out
                    </Link>
                </div>
            </div>
        </header>)
}

export default Header;