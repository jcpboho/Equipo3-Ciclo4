import Header from "components/Admin/Header";
import Nav from "components/Admin/Nav";
import * as Icon from 'react-feather';

const Products = () => (
    <div className="dashboard">

        <Header />

        <div className="container-fluid">
            <div className="row">

                <Nav />

                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <div
                        className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h1 className="h2">Products</h1>
                        <div className="btn-toolbar mb-2 mb-md-0">
                            <div className="btn-group me-2">
                                <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
                                <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
                            </div>
                            <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
                                <Icon.Calendar witdh="24" heigth="24" className="mr-2 feather" />
                                This week
                            </button>
                        </div>
                    </div>
                    <div className="table-responsive">
                        <table className="table table-striped table-sm">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Header</th>
                                    <th scope="col">Header</th>
                                    <th scope="col">Header</th>
                                    <th scope="col">Header</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1,001</td>
                                    <td>random</td>
                                    <td>data</td>
                                    <td>placeholder</td>
                                    <td>text</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
        </div>


    </div>
)

export default Products;