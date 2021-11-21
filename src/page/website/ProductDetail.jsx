import { Table,Button,FormControl,Form,Container,FloatingLabel } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { Link,useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { read } from "../../api/productAPI";


export default function ProductDetail () {
    var {id} = useParams();
    const [product, setProduct] = useState([]);
    const [quantity,setQuantity] = useState(1);
    const remoteQty = (boolean) => {
        if (quantity < 100 && boolean) {
            setQuantity(quantity+1);
        }
        if (quantity > 1&& !boolean) {
            setQuantity(quantity-1);
        }
    }
    useEffect(() => {
        read(id).then((response) => setProduct(response.data));
    }, []);
    function formatCash(str) {
        str = `${str}`;
        return str.split('').reverse().reduce((prev, next, index) => {
            return ((index % 3) ? next : (next + ',')) + prev
        })
    }
    
    return (
        <Container>
            <main className="product-detail-page mt-5">
                <div id="toasts">
                </div>
                <div className="conten-product-detail">
                <div className="container">
                    <h2>Thông tin sản phẩm</h2>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <img src={product.imager} alt=""/>
                        </div>
                        <div className="col-lg-6">
                            <h3 className="title-product">{product.name}</h3>
                            <div className="description">
                                <p><span className="price">{formatCash(product.price-(product.price*product.discount/100))} đ</span><span className="price-root">{formatCash(product.price)} đ</span> </p>
                                <p>{product.description_short}</p>
                                <div className="input-order">
                                    <form action="" >
                                        <div className="quantity mt-3">
                                            <h4 >Số Lượng: </h4>
                                            <div className="input">
                                                <button className="bnt-plus" type="button"><FontAwesomeIcon icon={faPlus} onClick={() => remoteQty(true)}/></button>
                                                <input type="text" id="qty" value={quantity} min="1" max="99"/>
                                                <button className="bnt-minus" type="button"><FontAwesomeIcon icon={faMinus} onClick={() => remoteQty(false)}/></button>
                                            </div>
                                            <div className="mt-1 text-danger error"></div>
                                            <div className="bnt-order mt-3">
                                                <button className="bnt-buy-now" >Mua Ngay</button>
                                                <button  className="bnt-add-cart" >Thêm Vào Giỏ Hàng</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <h4>Thông tin chi tiết</h4>
                    <p>{product.description}</p>
                </div>
                </div>
            </main>
        </Container>
        );
}
