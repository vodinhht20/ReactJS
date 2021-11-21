import "../../App.css";
import { authenticate } from "../../authenticate";
import { toast } from 'react-toastify';
import { useForm } from "react-hook-form";
import { signin, signup } from "../../api/authAPI";
import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import LoginGoogle from "../../firebase/LoginGoogle";
import LoginFacebook from "../../firebase/LoginFacebook";

export default function Signup() {
    const {register, handleSubmit, formState: { errors}} = useForm();
    let navigate = useNavigate();
    const onSubmitSignin = (data) => {
        const dataNew = {...data,role: 0}
        signup(dataNew)
            .then(response => {
                toast.success("Đăng ký thành công vui lòng đăng nhập !",{
                    autoClose: 2000,
                    onClose: () => navigate("/login", { replace: true })
                });
            })
            .catch( error => {
                toast.error("Tạo tài khoản thất bại vui lòng thử lại !");
            });
    }


    const [displayBox,setDisplayBox] = useState("none");
    // login google
    const loginGoogle = () => {
        LoginGoogle().then((response => response.user))
        .then((user) =>authenticate({...user,role: 0}))
        .then(() => {
            setDisplayBox("flex");
            setTimeout(()=>{
                toast.success("Chào mừng bạn đến Ego Medical Center !",{
                    autoClose: 3000
                });
                navigate("/", { replace: true });
                setDisplayBox("none");
            },5000)
        });
    }
    //login loginFacebook

    const loginFacebook = () => {
        LoginFacebook();
    }
    return (
        <main className="account-page">
        <div className="container">
            <div className="account-main">
                <div className="tab-account">
                    <ul>
                        <li><Link to={"/login"}>Đăng Nhập</Link></li>
                        <li className="active"><Link to={"/signup"}>Đăng ký</Link></li>
                    </ul>
                </div>
                <div className="form-login">
                    <form id="login" onSubmit={handleSubmit(onSubmitSignin)}>
                        <div className="form-group">
                            <label htmlFor="accEmail">Email</label>
                            <input type="text" className="form-control" id="accEmail" {...register("email", { required: true })} placeholder="Nhập địa chỉ email" />
                            {errors.email && <span className="font-italic text-danger error-empty-form">Vui lòng nhập email</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="accPassword">Mật Khẩu</label>
                            <input type="password" className="form-control" id="accPassword" {...register("password", { required: true })} placeholder="Nhập mật khẩu" />
                            {errors.password && <span className="font-italic text-danger error-empty-form">Vui lòng nhập mật khẩu</span>}
                        </div>
                        <div className="form-group">
                            <Link to={"/login"}>Đã có tài khoản ?</Link>
                        </div>
                        <button type="submit" className="btn btn-dark">Đăng ký</button>
                    </form>
                    <div id="notify"></div>
                </div>
                <div className="line-break mt-4">
                    <span>hoặc đăng nhập bằng</span>
                </div>
                <div className="login-social-network mt-5 mb-5">
                    <a onClick={() => loginFacebook()} className="login-facebook"><img src={process.env.PUBLIC_URL + '/assets/images/fb-btn.svg'} alt="" /></a>
                    <a  onClick={() => loginGoogle()} className="login-google"><img src={process.env.PUBLIC_URL + '/assets/images/gp-btn.svg'} alt="" /></a>
                </div>
            </div>
        </div>
        <div className="box_overlay_load" style={{display: displayBox}}>
            <div className="iconload">
                <img src={process.env.PUBLIC_URL + '/assets/images/icon_load001.gif'} alt="" />
                <p>Vui lòng chờ . . .</p>
            </div>
        </div>
    </main>
    );
}