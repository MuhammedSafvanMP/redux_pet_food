import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { globalContext } from "../context/GlobalContext";


export default function Users() {

  
  const [, , , , ,user] = useContext(globalContext);
 
  return (
    <div className="container-fluid">
      <div className="row">
        <nav
          id="sidebarMenu"
          className="col-md-3 col-lg-2 d-md-block bg-light sidebar"
        >
          <div className="position-sticky pt-3">
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page">
                  <span data-feather="home"></span>
                  Admin
                </a>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <span data-feather="file"></span>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <NavLink to="/users" className="nav-link">
                  <span data-feather="file"></span>
                  Users
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/products" className="nav-link">
                  <span data-feather="shopping-cart"></span>
                  Products
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>

        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Dashboard</h1>
          </div>

          <div className="table-responsive">
            <table className="table table-striped table-sm">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                </tr>
              </thead>
              <tbody>
                {user &&
                  user.map((user) => {
                    return (
                      <>
                        <tr key={user}>
                          <td><FaRegUser /></td>
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}
