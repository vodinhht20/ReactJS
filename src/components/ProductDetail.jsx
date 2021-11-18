import { Table,Button,FormControl,Form,Container,FloatingLabel } from "react-bootstrap";
import { Link,useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { read } from "../api/productAPI";


export default function ProductDetail () {
    var {id} = useParams();
    const [product, setProduct] = useState([]);
    useEffect(() => {
        read(id).then((response) => setProduct(response.data));
    }, []);
    return (
        <Container>
            <main class="product-detail-page mt-5">
                <div id="toasts">
                </div>
                <div class="conten-product-detail">
                </div>
            </main>
        </Container>
        );
}