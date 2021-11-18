import "bootstrap/dist/css/bootstrap.min.css";
import { Link,Outlet } from "react-router-dom";
import "./Admin.css";

export default function AdminHeader() {
  let sidebar = document.querySelector(".sidebar");
  let closeBtn = document.querySelector("#btn");
  let searchBtn = document.querySelector(".bx-search");
  const menuBtnChange = () => {
    if (sidebar.classList.contains("open")) {
      closeBtn.classList.replace("bx-menu", "bx-menu-alt-right"); //replacing the iocns class
    } else {
      closeBtn.classList.replace("bx-menu-alt-right", "bx-menu"); //replacing the iocns class
    }
  };
  return (
    <div>
      <div className="sidebar" >
        <div className="logo-details">
          <div className="logo_name">
            <img
              src="https://ap.poly.edu.vn/images/logo.png"
              width="150"
              alt=""
            />
          </div>
          <i
            className="bx bx-menu"
            id="btn"
            onClick={() => {
              sidebar.classList.toggle("open");
              menuBtnChange();
            }}
          ></i>
        </div>
        <ul className="nav-list">
          <li>
            <i
              className="bx bx-search"
              onClick={() => {
                sidebar.classList.toggle("open");
                menuBtnChange();
              }}
            ></i>
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
              <i class='bx bxs-box'></i>
              <span className="links_name">Sản Phẩm</span>
            </Link>
            <span className="tooltip">Sản Phẩm</span>
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
              <img src={require('../assets/images/myavata.jpg').default} alt="profileImg" />
              <div className="name_job">
                <div className="name">Võ Định</div>
                <div className="job">Web Backend</div>
              </div>
            </div>
            <i className="bx bx-log-out" id="log_out"></i>
          </li>
        </ul>
      </div>
      <section className="home-section">
        <Outlet />
      </section>
    </div>
  );
}
