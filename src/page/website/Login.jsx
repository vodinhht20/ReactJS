import "../../App.css";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { authenticate } from "../../authenticate";
import { signin } from "../../api/authAPI";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import LoginGoogle from "../../firebase/LoginGoogle";
import LoginGithub from "../../firebase/LoginGithub";

export default function Login({ setAuth }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let navigate = useNavigate();
  const onSubmitSignin = (data) => {
    signin(data)
      .then((response) => {
        toast.success("Chào mừng bạn đến Ego Medical Center !", {
          autoClose: 3000,
        });
        authenticate(response.data.user);
        setAuth(response.data.user);
        if (response.data.user.role && response.data.user.role === 1) {
          navigate("/admin", { replace: true });
        } else {
          navigate("/", { replace: true });
        }
      })
      .catch((error) => {
        toast.error("Vui lòng kiểm tra email hoặc password !");
      });
  };

  // login google
  const [displayBox, setDisplayBox] = useState("none");
  const loginGoogle = () => {
    LoginGoogle()
      .then((response) => response.user)
      .then((user) => {
        authenticate({ ...user, role: 0 });
        setAuth({ ...user, role: 0 });
      })
      .then(() => {
        setDisplayBox("flex");
        setTimeout(() => {
          toast.success("Chào mừng bạn đến Ego Medical Center !", {
            autoClose: 3000,
          });
          navigate("/", { replace: true });
          setDisplayBox("none");
        }, 5000);
      });
  };

  
  const loginGithub = () => {
    LoginGithub()
      .then((response) => response.user)
      .then((user) => {
        authenticate({ ...user, role: 0 });
        setAuth({ ...user, role: 0 });
      })
      .then(() => {
        setDisplayBox("flex");
        setTimeout(() => {
          toast.success("Chào mừng bạn đến Ego Medical Center !", {
            autoClose: 3000,
          });
          navigate("/", { replace: true });
          setDisplayBox("none");
        }, 5000);
      });
  };
  return (
    <main className="account-page">
      <div className="container">
        <div className="account-main">
          <div className="tab-account">
            <ul>
              <li className="active">
                <Link to={"/login"}>Đăng nhập</Link>
              </li>
              <li>
                <Link to={"/signup"}>Đăng ký</Link>
              </li>
            </ul>
          </div>
          <div className="form-login">
            <form id="login" onSubmit={handleSubmit(onSubmitSignin)}>
              <div className="form-group">
                <label htmlFor="accEmail">Email</label>
                <input
                  type="text"
                  className="form-control"
                  id="accEmail"
                  {...register("email", { required: true })}
                  placeholder="Nhập địa chỉ email"
                />
                {errors.email && (
                  <span className="font-italic text-danger error-empty-form">
                    Vui lòng nhập email
                  </span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="accPassword">Mật Khẩu</label>
                <input
                  type="password"
                  className="form-control"
                  id="accPassword"
                  {...register("password", { required: true })}
                  placeholder="Nhập mật khẩu"
                />
                {errors.password && (
                  <span className="font-italic text-danger error-empty-form">
                    Vui lòng nhập mật khẩu
                  </span>
                )}
              </div>
              <div className="form-group">
                <a href="">Quên mật khẩu ?</a>
              </div>
              <button type="submit" className="btn btn-dark">
                Đăng nhập
              </button>
            </form>
            <div id="notify"></div>
          </div>
          <div className="line-break mt-4">
            <span>hoặc đăng nhập bằng</span>
          </div>

          <div className="login-social-network mt-5 mb-5">
            <a className="login-google" onClick={() => loginGoogle()}>
              <img
                src={process.env.PUBLIC_URL + "/assets/images/gp-btn.svg"}
                alt=""
              />
            </a>
            <a className="login-google" onClick={() => loginGithub()}>
              <img
                src={
                  process.env.PUBLIC_URL + "/assets/images/github-btn-svg.svg"
                }
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
      <div className="box_overlay_load" style={{ display: displayBox }}>
        <div className="iconload">
          <img
            src={process.env.PUBLIC_URL + "/assets/images/icon_load001.gif"}
            alt=""
          />
          <p>Vui lòng chờ . . .</p>
        </div>
      </div>
    </main>
  );
}
