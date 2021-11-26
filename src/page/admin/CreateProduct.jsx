import { Button,Form,Container,FloatingLabel } from "react-bootstrap";
import { Link,useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import UploadImage from "../../components/UploadImage";
import 'react-toastify/dist/ReactToastify.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const CreateProduct = ({post,categories}) => {
    let navigate = useNavigate();
    const {register, handleSubmit, formState: { errors}} = useForm();
    const [textarea, setTextarea] = useState("");
    const onSubmitCreate = async (data) => {
        data.price =  parseInt(data.price);
        data.discount =  parseInt(data.discount);
        data.category = parseInt(data.category);
        await UploadImage(data.imager[0]).then((response) => {
            data.imager = response.url;
        });
        post({...data,description: textarea,view: 1});
        toast.success("Tạo sản phẩm thành công !",{
            onClose: () => navigate("/admin/products/", { replace: true }),
            autoClose: 3000
        });
    }
    return (
        <Container className="pb-5">
            <h3 className="text-center p-3 mb-3">Tạo sản phẩm</h3>
            <hr className="bg-secondary"/>
            <Form onSubmit={handleSubmit(onSubmitCreate)} className="mt-3 mb-3">
                <Form.Group className="mb-1" id="form-add" controlId="formBasicEmail">
                    <Form.Label id="">Tên sản phẩm</Form.Label>
                    <Form.Control type="text" className="val-name" {...register("name", { required: true, maxLength: 30 })} placeholder="Nhập tên sản phẩm"/>
                    {errors.name && <span className="font-italic text-danger error-empty-form">Vui lòng nhập tên sản phẩm</span>}
                </Form.Group>
                <Form.Group className="mb-1" controlId="formBasicPassword">
                    <Form.Label>Hình ảnh</Form.Label>
                    <Form.Control type="file" className="val-image" {...register("imager", { required: true })} placeholder="Nhập hình ảnh" />
                    {errors.imager && <span className="font-italic text-danger error-empty-form">Vui lòng nhập hình ảnh</span>}
                </Form.Group>
                <Form.Group className="mb-1" id="form-add" controlId="formBasicEmail">
                    <Form.Label id="">Đơn giá </Form.Label>
                    <Form.Control type="number" className="val-price" {...register("price", { required: true,min: 0 })} placeholder="Nhập đơn giá" />
                    {errors.price && <span className="font-italic text-danger error-empty-form">Vui lòng nhập đơn giá</span>}
                </Form.Group>
                <Form.Group className="mb-1" id="form-add" controlId="formBasicEmail">
                    <Form.Label id="">Giảm giá</Form.Label>
                    <Form.Control type="number" className="val-discount" {...register("discount", { required: true,min: 0,max:100 })}placeholder="Nhập giảm giá" />
                    {errors.discount && <span className="font-italic text-danger error-empty-form">Vui lòng nhập giảm giá</span>}
                </Form.Group>
                <Form.Group className="mb-1" id="form-add" controlId="formBasicEmail">
                    <Form.Label id="">Loại sản phẩm</Form.Label>
                    <Form.Select {...register("category", { required: true})}>
                        <option value> ---- Lựa chọn loại sản phẩm -----</option>
                        {categories.map(item => {
                            return (<option value={item.id}>{item.name}</option>)
                        })}
                    </Form.Select>
                    {errors.category && <span className="font-italic text-danger error-empty-form">Vui chọn loại sản phẩm</span>}
                </Form.Group>
                <Form.Group className="mb-1" id="form-add" controlId="formBasicEmail">
                    <Form.Label id="">Thông tin sản phẩm</Form.Label>
                </Form.Group>
                <FloatingLabel controlId="floatingTextarea" label="Mô tả ngắn" className="mb-1">
                    <Form.Control as="textarea" {...register("description_short", { required: true, maxLength: 200 })} placeholder="Nhập mô tả ngắn" />
                    {errors.description_short && <span className="font-italic text-danger error-empty-form">Vui lòng nhập mô tả ngắn</span>}
                </FloatingLabel>
                <Form.Group className="mb-1" id="form-add" controlId="formBasicEmail">
                    <Form.Label id="">Mô tả chi tiết</Form.Label>
                    <CKEditor editor={ ClassicEditor } onChange={ ( event, editor ) => {
                        setTextarea(editor.getData());
                    }}/>
                </Form.Group>
                <Button variant="primary" type="submit" className="mt-3 bnt-submit-form">
                    Thêm mới
                </Button>
            </Form>
            <ToastContainer />
        </Container>
    );
}
export default CreateProduct;

