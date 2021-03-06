import { Table,Button,FormControl,Form,Container,FloatingLabel } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { Link,useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { read,list,update } from "../../api/productAPI";
import { getCartItems, setCartItems } from "../../cart";
import { toast } from "react-toastify";


export default function ProductDetail ({setCart}) {
    var {id} = useParams();
    const [relatedProducts, setRelatedProducts] = useState([]);
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
        read(id).then((response) => {
            setProduct(response.data);
            var params = "category="+response.data.category;
            list(params).then((res) =>{
                var newArr = res.data.filter((item) => item.id!==response.data.id)
                setRelatedProducts(newArr);
            });
            setTimeout(() => {
                const dataPatch = {
                    id: id,
                    view: ++response.dataview,
                }
                update(dataPatch);
            }, 5000);
        });
    }, [id]);
    function formatCash(str) {
        str = `${str}`;
        return str.split('').reverse().reduce((prev, next, index) => {
            return ((index % 3) ? next : (next + ',')) + prev
        })
    }
    function addToCart(e) {
        e.preventDefault();
        const newProduct = {
            ...product,
            qty: quantity
        };
        let cartItems = getCartItems();
        var existProduct = cartItems.find(
          (product) => product.id === newProduct.id
        );
        if (existProduct) {
          existProduct.qty += quantity;
        } else {
          cartItems = [...cartItems, newProduct];
        }
        setCartItems(cartItems);
        // // Chay thong bao thanh cong
        setCart(getCartItems());
        toast.success("B???n ???? th??m th??nh c??ng v??o gi??? h??ng !", {
            autoClose: 3000,
          });
    }
    return (
        <Container>
            <main className="product-detail-page mt-5">
                <div id="toasts">
                </div>
                <div className="conten-product-detail">
                    <div className="container">
                        <h2>Th??ng tin s???n ph???m</h2>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <img src={product.imager} alt="" style={{maxWidth: "310px", objectFit: "cover"}}/>
                            </div>
                            <div className="col-lg-6">
                                <h3 className="title-product">{product.name}</h3>
                                <div className="description">
                                    <p><span className="price">{formatCash(product.price-(product.price*product.discount/100))} ??</span><span className="price-root">{formatCash(product.price)} ??</span> </p>
                                    <p>{product.description_short}</p>
                                    <div className="input-order">
                                        <form action="" >
                                            <div className="quantity mt-3">
                                                <h4 >S??? L?????ng: </h4>
                                                <div className="input">
                                                    <button className="bnt-plus" type="button"><FontAwesomeIcon icon={faPlus} onClick={() => remoteQty(true)}/></button>
                                                    <input type="text" id="qty" value={quantity} min="1" max="99"/>
                                                    <button className="bnt-minus" type="button"><FontAwesomeIcon icon={faMinus} onClick={() => remoteQty(false)}/></button>
                                                </div>
                                                <div className="mt-1 text-danger error"></div>
                                                <div className="bnt-order mt-3">
                                                    <button className="bnt-buy-now" >Mua Ngay</button>
                                                    <button  className="bnt-add-cart" onClick={(e) => addToCart(e)}>Th??m V??o Gi??? H??ng</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <h4>Th??ng tin chi ti???t</h4>
                        <p dangerouslySetInnerHTML={{ __html: product.description }} />
                    </div>
                </div>
                <h4>C??c s???n ph???m li??n quan</h4>
                <hr />
                <div className="related_products row">
                    {
                        relatedProducts.map((data,index) => {
                            return (
                                <div className="product-item col-lg-3 col-md-2" key={index}>
                                    <div className="product-image">
                                        <Link to={"/product/"+data.id}>
                                            <img className="img-primary" src={data.imager}/>
                                        </Link>
                                        <div className="icon-on-image-product">
                                            <Link to={"/product/"+data.id}>
                                            <img className="icon-gif-cart" src={process.env.PUBLIC_URL + '/assets/images/addToCart3.gif'} alt="" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="product-information">
                                        <Link to={"/product/"+data.id}>
                                            <p>{data.name}</p>
                                            <div className="box-price">
                                                <span className="price-primary">{formatCash(data.price-(data.price*data.discount/100))} ??</span>
                                                <span className="price-sub">{formatCash(data.price)} ??</span>
                                            </div>
                                        </Link>
                                    </div>
                                    <span className="product-sale">-{formatCash(data.discount)} %</span>
                                </div>
                            );
                        })
                    }
                </div>
            </main>
        </Container>
        );
}
