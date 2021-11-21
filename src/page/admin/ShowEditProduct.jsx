import { Table,Button,FormControl,Form,Container,FloatingLabel } from "react-bootstrap";
import { Link,useParams,useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { useForm } from "react-hook-form";
import { useEffect,useState} from "react";
import { read } from "../../api/productAPI";



const ShowEditProduct = ({post}) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { id } = useParams();
    const [product, setProduct] = useState({});

    let navigate = useNavigate();
    const onUpdate = (data) => {
        post({ id, ...data });
    };
    useEffect(() => {
        read(id).then((response) => {
            setProduct(response.data);
            reset(response.data);
          });   
    }, [id]);
    return (
        <Container>
            <h3 className="text-center p-3 mb-3">Thay đổi thông tin</h3>
            <hr className="bg-secondary"/>
            <Form onSubmit={handleSubmit(onUpdate)} className="mt-3 mb-3">
                <h4 className="text-center mt-3 mb-3">{product.name}</h4>
                <Form.Group className="mb-3" id="form-add" controlId="formBasicEmail">
                    <Form.Label id="">Tên sản phẩm</Form.Label>
                    <Form.Control type="text" className="val-name" {...register("name", { required: true })} defaultValue={product.name} placeholder="Nhập tên sản phẩm" />
                    {errors.name && <span className="font-italic text-danger error-empty-form">Vui lòng nhập tên sản phẩm</span>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Hình ảnh</Form.Label>
                    <Form.Control type="text" className="val-image" {...register("imager", { required: true })} defaultValue={product.imager} placeholder="Nhập hình ảnh" />
                    {errors.imager && <span className="font-italic text-danger error-empty-form">Vui lòng nhập hình ảnh</span>}
                </Form.Group>
                <Form.Group className="mb-3" id="form-add" controlId="formBasicEmail">
                    <Form.Label id="">Đơn giá </Form.Label>
                    <Form.Control type="number" className="val-price" {...register("price", { required: true })} defaultValue={product.price} placeholder="Nhập tên sản phẩm" />
                    {errors.price && <span className="font-italic text-danger error-empty-form">Vui lòng nhập đơn giá</span>}
                </Form.Group>
                <Form.Group className="mb-3" id="form-add" controlId="formBasicEmail">
                    <Form.Label id="">Giảm giá</Form.Label>
                    <Form.Control type="number" className="val-discount" {...register("discount", { required: true })} defaultValue={product.discount} placeholder="Nhập tên sản phẩm" />
                    {errors.discount && <span className="font-italic text-danger error-empty-form">Vui lòng nhập giảm giá</span>}
                </Form.Group>
                <Form.Group className="mb-3" id="form-add" controlId="formBasicEmail">
                    <Form.Label id="">Thông tin sản phẩm</Form.Label>
                </Form.Group>
                <FloatingLabel controlId="floatingTextarea" label="Mô tả ngắn" className="mb-3">
                    <Form.Control as="textarea" placeholder="Nhập mô tả ngắn" {...register("description_short", { required: true })} defaultValue={product.description_short}/>
                    {errors.description_short && <span className="font-italic text-danger error-empty-form">Vui lòng nhập mô tả ngắn</span>}
                </FloatingLabel>
                <FloatingLabel controlId="floatingTextarea2" label="Mô tả chi tiết">
                    <Form.Control as="textarea" className="val-desc-short" {...register("description", { required: true })}  defaultValue={product.description} placeholder="Nhập mô tả chi tiết" style={{ height: '100px' }} />
                    {errors.description && <span className="font-italic text-danger error-empty-form">Vui lòng nhập mô tả chi tiết</span>} 
                </FloatingLabel>
                <div className="d-flex justify-content-center align-items-center mt-3 grid-collum-bnt">
                    <Button variant="primary" type="submit" >
                        Cập nhật
                    </Button>
                    <Button variant="dark" type="button" onClick={() => navigate(-1)}>
                        Quay lại
                    </Button>
                </div>
            </Form>
            <ToastContainer />
        </Container>
    );
}
export default ShowEditProduct;

