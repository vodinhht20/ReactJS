import "../App.css";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { signin, signup } from "../api/authAPI";
import { Link,useNavigate } from "react-router-dom";

export default function Signup() {
    const {register, handleSubmit, formState: { errors}} = useForm();
    let navigate = useNavigate();
    const onSubmitSignin = (data) => {
        signup(data)
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
    const siginGoogle = () => {
        alert("ok");
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
                    <span>hoặc đăng ký bằng</span>
                </div>

                <div className="login-social-network mt-5 mb-5">
                    <a onClick={() => siginGoogle()} className="login-facebook"><img src={require('../assets/images/fb-btn.svg').default} alt="" /></a>
                    <a href="" className="login-google"><img src={require('../assets/images/gp-btn.svg').default} alt="" /></a>
                </div>
            </div>
        </div>
    </main>
    );
}