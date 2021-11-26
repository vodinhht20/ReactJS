import { Link,useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { list } from "../../api/productAPI";
import { readCate } from "../../api/categoryAPI";



export default function Category() {
    var {id} = useParams();
    const [producsList, setProductsList] = useState([]);
    const [categoryData,setCategoryData] = useState([]);
    useEffect(() => {
        list("category="+id).then((response) => {
            setProductsList(response.data);
        });
        readCate(id).then((response) => {
            setCategoryData(response.data);
        })
    },[id]);
    function formatCash(str) {
        str = `${str}`;
        return str.split('').reverse().reduce((prev, next, index) => {
            return ((index % 3) ? next : (next + ',')) + prev
        })
    }
    return (
            <div className="container">
                <h4 className="mt-2 text-center">Danh mục sản phẩm: {categoryData.name}</h4>
                <hr />
                <div className="related_products row">
                    {
                        producsList.map((data,index) => {
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
                                                <span className="price-primary">{formatCash(data.price-(data.price*data.discount/100))} đ</span>
                                                <span className="price-sub">{formatCash(data.price)} đ</span>
                                            </div>
                                        </Link>
                                    </div>
                                    <span className="product-sale">-{formatCash(data.discount)} %</span>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
    )
}