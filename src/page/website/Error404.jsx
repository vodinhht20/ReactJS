import { Link } from "react-router-dom";

export default function Error404() {
    return (
        <section class="page_404">
            <div class="container">
                <div class="row">	
                <div class="col-sm-12 ">
                <div class="col-sm-12 col-sm-offset-1  text-center">
                <div class="four_zero_four_bg">
                </div>
                <div class="contant_box_404">
                <h3 class="h2">
                    Trang bạn truy cập không tồn tại
                </h3>
                <p>Trang bạn cố gắng truy cập không tồn tại hoặc đã bị chết</p>
                <Link to={"/"} class="link_404">Trang chủ</Link>
            </div>
                </div>
                </div>
                </div>
            </div>
        </section>
    );
}