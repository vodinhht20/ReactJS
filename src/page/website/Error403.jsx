import { Link } from "react-router-dom";

export default function Error403() {
    return (
        <div className="box_error_403">
            <div class="container">
            <div class="forbidden-sign"></div>
            <h1>Truy cập vào trang này bị hạn chế</h1>
            <p>Bạn không có quyền truy cập trang này. Vui lòng chuyển hướng !</p>
            <Link to={"/"} class="link_404">Trang chủ</Link>
        </div>
        </div>
    );
}