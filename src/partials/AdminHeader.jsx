import '../App.css';
export default function AdminHeader() {
  return (
    <header>
      <div className="header__top">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 time_contact">
              <div className="">
                <p>
                  <i className="fas fa-clock"></i>
                  <span>Th2 - CN 9:00 AM - 21:00 PM</span>
                </p>
                <p>
                  <i className="fas fa-phone"></i>
                  <a href="tel:19006750">1900 6750</a>
                </p>
                <p>
                  <i className="fas fa-envelope"></i>
                  <a href="mailto:ego.deploy@gmail.com">vodinh.deploy@gmail.com</a>
                </p>
              </div>
            </div>
            <div className="col-md-12 col-lg-3 login_contact">
              <div className="login">
                <a href="">Đăng Nhập</a>/<a href="">Đăng Ký</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-main">
        <div className="container">
          <div className="row">
            <div className="col-sm-2 col-md-2 bnt__nav_bars">
              <i className="fas fa-bars"></i>
            </div>
            <div className="col-sm-8 col-md-8 col-lg-2 logo">
              <img src={require('../assets/images/logo.png').default} alt="logo" />
            </div>
            <div className="col-lg-7 navbars_pc">
              <ul className="item-big">
                <li className="nav-item">
                  <a href="/">Trang Chủ</a>
                </li>
                <li className="nav-item">
                  <a href="/intro">Giới Thiệu</a>
                </li>
                <li className="nav-item">
                  <a href="">
                    Đặt Lịch Hẹn <i className="fas fa-angle-down"></i>
                  </a>
                  <ul className="item-small">
                    <li>
                      <a href="">Tầm Soát Ung Thư</a>
                    </li>
                    <li>
                      <a href="">Mô Học</a>
                    </li>
                    <li>
                      <a href="">Khám Tổng Quát</a>
                    </li>
                    <li>
                      <a href="">Xét Nghiệm Máu</a>
                    </li>
                    <li>
                      <a href="">Xét Nghiệm Di Truyền</a>
                    </li>
                    <li>
                      <a href="">Tế Bào Học</a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="">
                    Sản Phẩm <i className="fas fa-angle-down"></i>
                  </a>
                  <ul className="item-small">
                    <li>
                      <a href="/product/create">Thêm Sản Phẩm</a>
                    </li>
                    <li>
                      <a href="/me">Danh Sách Sản Phẩm</a>
                      <i className="fas fa-angle-right"></i>
                    </li>
                    <li>
                      <a href="">Phụ Kiện Ý Tế</a>
                    </li>
                    <li>
                      <a href="">Máy Chụp X Quang</a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="">Tin Tức</a>
                </li>
                <li className="nav-item">
                  <a href="">Liên Hệ</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-2 col-md-2 col-lg-3 cartsearch">
              <div className="search">
                <form action="">
                  <input
                    type="text"
                    name=""
                    className="inp__search"
                    idName=""
                    placeholder="Tìm Kiếm ..."
                  />
                  <button>
                    <i className="fas fa-search"></i>
                  </button>
                </form>
              </div>
              <div className="cart">
                <i className="fas fa-cart-arrow-down"></i>
                <span>Giỏ hàng</span>
                <sub>0</sub>
              </div>
            </div>
            <div className="navbars_overlay"></div>
            <div className="navbars_mobile">
              <div className="login_user">
                <img alt="" />
                <span>Võ Định</span>
              </div>
              <div className="search">
                <form action="">
                  <label for="">Tìm Kiếm: </label>
                  <input
                    type="text"
                    className="inp__search"
                    placeholder="Tìm Kiếm ..."
                  />
                  <button>
                    <i className="fas fa-search"></i>
                  </button>
                </form>
              </div>
              <ul className="item-big">
                <li className="nav-item">
                  <a href="/">Trang Chủ</a>
                </li>
                <li className="nav-item">
                  <a href="/intro">Giới Thiệu</a>
                </li>
                <li className="nav-item">
                  <a href="">Đặt Lịch Hẹn</a>
                  <ul className="item-small">
                    <li>
                      <a href="">Tầm Soát Ung Thư</a>
                    </li>
                    <li>
                      <a href="">Mô Học</a>
                    </li>
                    <li>
                      <a href="">Khám Tổng Quát</a>
                    </li>
                    <li>
                      <a href="">Xét Nghiệm Máu</a>
                    </li>
                    <li>
                      <a href="">Xét Nghiệm Di Truyền</a>
                    </li>
                    <li>
                      <a href="">Tế Bào Học</a>
                    </li>
                  </ul>
                  <i className="bnt_show_nav-children fas fa-plus-circle"></i>
                </li>
                <li className="nav-item">
                  <a href="">Sản Phẩm</a>
                  <ul className="item-small">
                    <li>
                      <a href="/product/create">Thêm Sản Phẩm</a>
                    </li>
                    <li>
                      <a href="/me">Danh Sách Sản Phẩm</a>
                    </li>
                    <li>
                      <a href="">Phụ Kiện Ý Tế</a>
                    </li>
                    <li>
                      <a href="">Máy Chụp X Quang</a>
                    </li>
                  </ul>
                  <i className="bnt_show_nav-children fas fa-plus-circle"></i>
                </li>
                <li className="nav-item">
                  <a href="">Tin Tức</a>
                </li>
                <li className="nav-item">
                  <a href="">Liên Hệ</a>
                </li>
              </ul>
              <div className="bnt__close_navbars">
                <i className="fas fa-times"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

  );
}
