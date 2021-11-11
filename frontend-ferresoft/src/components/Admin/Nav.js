
import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';

const Nav = () => (

    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
        <div className="position-sticky pt-3">
            <ul className="nav flex-column">
                <li className="nav-item">
                    <Link to="/dashboard" className="nav-link active" aria-current="page">
                        <Icon.Home witdh="24" heigth="24" className="mr-2 feather" />
                        Dashboard
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/dashboard" className="nav-link">
                        <Icon.File witdh="24" heigth="24" className="mr-2 feather" />
                        Orders
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/products" className="nav-link">
                        <Icon.ShoppingCart witdh="24" heigth="24" className="mr-2 feather" />
                        Products
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/dashboard" className="nav-link">
                        <Icon.Users witdh="24" heigth="24" className="mr-2 feather" />
                        Customers
                    </Link>
                </li >
                <li className="nav-item">
                    <Link to="/dashboard" className="nav-link">
                        <Icon.BarChart2 witdh="24" heigth="24" className="mr-2 feather" />
                        Reports
                    </Link>
                </li >
                <li className="nav-item">
                    <Link to="/dashboard" className="nav-link">
                        <Icon.Layers witdh="24" heigth="24" className="mr-2 feather" />
                        Integrations
                    </Link>
                </li >
            </ul >

            <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                <span>Saved reports</span>
                <Link to="/dashboard" className="link-secondary" aria-label="Add a new report">
                    <Icon.PlusCircle witdh="24" heigth="24" className="mr-2 feather" />
                </Link>
            </h6 >
            <ul className="nav flex-column mb-2">
                <li className="nav-item">
                    <Link to="/dashboard" className="nav-link">
                        <Icon.FileText witdh="24" heigth="24" className="mr-2 feather" />
                        Current month
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/dashboard" className="nav-link">
                        <Icon.FileText witdh="24" heigth="24" className="mr-2 feather" />
                        Last quarter
                    </Link>
                </li >
                <li className="nav-item">
                    <Link to="/dashboard" className="nav-link">
                        <Icon.FileText witdh="24" heigth="24" className="mr-2 feather" />
                        Social engagement
                    </Link>
                </li >
                <li className="nav-item">
                    <Link to="/dashboard" className="nav-link">
                        <Icon.FileText witdh="24" heigth="24" className="mr-2 feather" />
                        Year-end sale
                    </Link>
                </li >
            </ul >
        </div >
    </nav >
)

export default Nav;