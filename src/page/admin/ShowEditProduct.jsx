import { Link,useParams,useNavigate } from "react-router-dom";
import { read } from "../../api/productAPI";
import { useForm } from "react-hook-form";
import { useEffect,useState} from "react";
import { ToastContainer, toast } from 'react-toastify';
import { Table,Button,FormControl,Form,Container,FloatingLabel } from "react-bootstrap";
import { CKEditor } from '@ckeditor/ckeditor5-react';

import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


const ShowEditProduct = ({post, categories}) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [textarea, setTextarea] = useState("");
    let navigate = useNavigate();
    const onUpdate = (data) => {
        data.price = parseInt(data.price);
        data.discount = parseInt(data.discount);
        post({ id, ...data,description: textarea });
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
                    <Form.Control type="text" className="val-name" {...register("name", { required: true, maxLength: 100 })} defaultValue={product.name} placeholder="Nhập tên sản phẩm" />
                    {errors.name?.type === 'required' && <span className="font-italic text-danger error-empty-form">Tên sản phẩm không được để trống</span>}
                    {errors.name?.type === 'maxLength' && <span className="font-italic text-danger error-empty-form">Tên sản phẩm không được quá 100 ký tự</span>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Hình ảnh</Form.Label>
                    <Form.Control type="text" className="val-image" {...register("imager", { required: true })} defaultValue={product.imager} placeholder="Nhập hình ảnh" />
                    {errors.imager && <span className="font-italic text-danger error-empty-form">Vui lòng nhập hình ảnh</span>}
                </Form.Group>
                <Form.Group className="mb-3" id="form-add" controlId="formBasicEmail">
                    <Form.Label id="">Đơn giá </Form.Label>
                    <Form.Control type="number" className="val-price" {...register("price", { required: true,min: 0 })} defaultValue={product.price} placeholder="Nhập đơn giá" />
                    {errors.price?.type === 'required'  && <span className="font-italic text-danger error-empty-form">Vui lòng nhập đơn giá</span>}
                    {errors.price?.type === 'min'  && <span className="font-italic text-danger error-empty-form">Không được nhập số âm</span>}
                </Form.Group>
                <Form.Group className="mb-3" id="form-add" controlId="formBasicEmail">
                    <Form.Label id="">Giảm giá</Form.Label>
                    <Form.Control type="number" className="val-discount" {...register("discount", { required: true,min: 0,max:100 })} defaultValue={product.discount} placeholder="Nhập tên sản phẩm" />
                    {errors.discount?.type === 'required'  && <span className="font-italic text-danger error-empty-form">vui lòng nhập đủ giảm giá</span>}
                    {errors.discount?.type === 'min'  && <span className="font-italic text-danger error-empty-form">Giảm giá phải lớn hơn 0</span>}
                    {errors.discount?.type === 'max'  && <span className="font-italic text-danger error-empty-form">Giảm giá không được quá 100 %</span>}
                </Form.Group>
                <Form.Group className="mb-1" id="form-add" controlId="formBasicEmail">
                    <Form.Label id="">Loại sản phẩm</Form.Label>
                    <Form.Select {...register("category", { required: true})} defaultValue={product.category}>
                        <option value> ---- Lựa chọn loại sản phẩm -----</option>
                        {categories.map(item => {
                            return (<option value={item.id}>{item.name}</option>)
                        })}
                    </Form.Select>
                    {errors.category && <span className="font-italic text-danger error-empty-form">Vui chọn loại sản phẩm</span>}
                </Form.Group>
                <Form.Group className="mb-3" id="form-add" controlId="formBasicEmail">
                    <Form.Label id="">Thông tin sản phẩm</Form.Label>
                </Form.Group>
                <FloatingLabel controlId="floatingTextarea" label="Mô tả ngắn" className="mb-3">
                    <Form.Control as="textarea" placeholder="Nhập mô tả ngắn" {...register("description_short", { required: true, maxLength: 500 })} defaultValue={product.description_short}/>
                    {errors.description_short?.type === 'required' && <span className="font-italic text-danger error-empty-form">Vui lòng nhập mô tả ngắn</span>}
                    {errors.description_short?.type === 'maxLength' && <span className="font-italic text-danger error-empty-form">Mô tả ngắn không được quá 500 ký tự</span>}
                </FloatingLabel>
                <Form.Group className="mb-1" id="form-add" controlId="formBasicEmail">
                    <Form.Label id="">Mô tả chi tiết</Form.Label>
                    <CKEditor editor={ ClassicEditor } data={product.description}onChange={ ( event, editor ) => {
                        setTextarea(editor.getData());
                    }}/>
                </Form.Group>
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

