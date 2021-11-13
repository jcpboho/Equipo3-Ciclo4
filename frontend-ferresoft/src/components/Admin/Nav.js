
import * as Icon from 'react-feather';
import { NavLink } from 'react-router-dom';

const Nav = () => (

    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
        <div className="position-sticky pt-3">
            <ul className="nav flex-column">
                <li className="nav-item">
                    <NavLink activeClassName="active" to="/admin/dashboard" className="nav-link" aria-current="page">
                        <Icon.Home witdh="24" heigth="24" className="mr-2 feather" />
                        Dashboard
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink activeClassName="active" to="/orders" className="nav-link">
                        <Icon.File witdh="24" heigth="24" className="mr-2 feather" />
                        Orders
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink activeClassName="active" to="/admin/products" className="nav-link">
                        <Icon.ShoppingCart witdh="24" heigth="24" className="mr-2 feather" />
                        Products
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink activeClassName="active" to="/admin/customers" className="nav-link">
                        <Icon.Users witdh="24" heigth="24" className="mr-2 feather" />
                        Customers
                    </NavLink>
                </li >
                <li className="nav-item">
                    <NavLink activeClassName="active" to="/admin/reports" className="nav-link">
                        <Icon.BarChart2 witdh="24" heigth="24" className="mr-2 feather" />
                        Reports
                    </NavLink>
                </li >
                <li className="nav-item">
                    <NavLink activeClassName="active" to="/admin/integrations" className="nav-link">
                        <Icon.Layers witdh="24" heigth="24" className="mr-2 feather" />
                        Integrations
                    </NavLink>
                </li >
            </ul >

            <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                <span>Saved reports</span>
                <NavLink activeClassName="active" to="/admin/savedreports" className="link-secondary" aria-label="Add a new report">
                    <Icon.PlusCircle witdh="24" heigth="24" className="mr-2 feather" />
                </NavLink>
            </h6 >
            <ul className="nav flex-column mb-2">
                <li className="nav-item">
                    <NavLink activeClassName="active" to="/admin/currentmonth" className="nav-link">
                        <Icon.FileText witdh="24" heigth="24" className="mr-2 feather" />
                        Current month
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink activeClassName="active" to="/admin/lastquarter" className="nav-link">
                        <Icon.FileText witdh="24" heigth="24" className="mr-2 feather" />
                        Last quarter
                    </NavLink>
                </li >
                <li className="nav-item">
                    <NavLink activeClassName="active" to="/admin/socialengagement" className="nav-link">
                        <Icon.FileText witdh="24" heigth="24" className="mr-2 feather" />
                        Social engagement
                    </NavLink>
                </li >
                <li className="nav-item">
                    <NavLink activeClassName="active" to="/admin/yearendsale" className="nav-link">
                        <Icon.FileText witdh="24" heigth="24" className="mr-2 feather" />
                        Year-end sale
                    </NavLink>
                </li >
            </ul >
        </div >
    </nav >
)

export default Nav;