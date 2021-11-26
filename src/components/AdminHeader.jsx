import "bootstrap/dist/css/bootstrap.min.css";
import { Link,Outlet,useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Admin.css";

export default function AdminHeader({auth, setAuth}) {
  const [acvtiveNav, setActiveNav] = useState(true);
  const newClass = acvtiveNav ? "sidebar open" : "sidebar";
  let navigate = useNavigate();

  function logOut() {
    navigate("/login", { replace: true });
    setAuth(false);
  }
  return (
    <div>
      <div className={newClass} >
        <div className="logo-details">
          <div className="logo_name">
            <Link to={"/"}><img
              src={process.env.PUBLIC_URL + '/assets/images/logo.png'}
              width="150"
              alt=""
            /></Link>
          </div>
          <i className="bx bx-menu" id="btn" onClick={() =>  setActiveNav(!acvtiveNav)}></i>
        </div>
        <ul className="nav-list">
          <li>
            <i className="bx bx-search"></i>
            <input type="text" placeholder="Search..." />
            <span className="tooltip">Search</span>
          </li>
          <li>
            <Link to={"/admin"} >
              <i className="bx bx-grid-alt"></i>
              <span className="links_name">Cpanel</span>
            </Link>
            <span className="tooltip">Cpanel</span>
          </li>
          <li>
            <Link to={"/admin/products"} >
              <i className='bx bxs-box'></i>
              <span className="links_name">Sản Phẩm</span>
            </Link>
            <span className="tooltip">Sản Phẩm</span>
          </li>
          <li>
            <Link to={"/admin/category"} >
              <i class='bx bxs-category'></i>
              <span className="links_name">Loại Sản Phẩm</span>
            </Link>
            <span className="tooltip">Loại Sản Phẩm</span>
          </li>
          <li>
            <Link to={"/admin/users"} >
              <i className="bx bx-user"></i>
              <span className="links_name">User</span>
            </Link>
            <span className="tooltip">User</span>
          </li>
          <li>
            <Link to={"/admin/orders"} >
              <i className="bx bx-cart-alt"></i>
              <span className="links_name">Giỏ hàng</span>
            </Link>
            <span className="tooltip">Giỏ hàng</span>
          </li>
          <li>
            <Link to={"/admin/setting"} >
              <i className="bx bx-cog"></i>
              <span className="links_name">Setting</span>
            </Link>
            <span className="tooltip">Setting</span>
          </li>
          <li className="profile">
            <div className="profile-details">
              <img src={auth.photoURL} alt="profileImg" />
              <div className="name_job">
                <div className="name">{auth.displayName}</div>
                <div className="job">Web Backend</div>
              </div>
            </div>
            <i className="bx bx-log-out" id="log_out" onClick={() => logOut()}></i>
          </li>
        </ul>
      </div>
      <section className="home-section">
        <Outlet />
      </section>
    </div>
  );
}
