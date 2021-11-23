import { Button,Form,Container,FloatingLabel } from "react-bootstrap";
import { Link,useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import UploadImage from "../../components/UploadImage";
import 'react-toastify/dist/ReactToastify.css';

const CreateProduct = ({post}) => {
    let navigate = useNavigate();
    const {register, handleSubmit, formState: { errors}} = useForm();

    const onSubmitCreate = async (data) => {
        data.price =  parseInt(data.price);
        data.discount =  parseInt(data.discount);
        await UploadImage(data.imager[0]).then((response) => {
            data.imager = response.url;
        });
        post(data);
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
                    <Form.Control type="text" className="val-name" {...register("name", { required: true })} placeholder="Nhập tên sản phẩm"/>
                    {errors.name && <span className="font-italic text-danger error-empty-form">Vui lòng nhập tên sản phẩm</span>}
                </Form.Group>
                <Form.Group className="mb-1" controlId="formBasicPassword">
                    <Form.Label>Hình ảnh</Form.Label>
                    <Form.Control type="file" className="val-image" {...register("imager", { required: true })} placeholder="Nhập hình ảnh" />
                    {errors.imager && <span className="font-italic text-danger error-empty-form">Vui lòng nhập hình ảnh</span>}
                </Form.Group>
                <Form.Group className="mb-1" id="form-add" controlId="formBasicEmail">
                    <Form.Label id="">Đơn giá </Form.Label>
                    <Form.Control type="number" className="val-price" {...register("price", { required: true })} placeholder="Nhập đơn giá" />
                    {errors.price && <span className="font-italic text-danger error-empty-form">Vui lòng nhập đơn giá</span>}
                </Form.Group>
                <Form.Group className="mb-1" id="form-add" controlId="formBasicEmail">
                    <Form.Label id="">Giảm giá</Form.Label>
                    <Form.Control type="number" className="val-discount" {...register("discount", { required: true })}placeholder="Nhập giảm giá" />
                    {errors.discount && <span className="font-italic text-danger error-empty-form">Vui lòng nhập giảm giá</span>}
                </Form.Group>
                <Form.Group className="mb-1" id="form-add" controlId="formBasicEmail">
                    <Form.Label id="">Thông tin sản phẩm</Form.Label>
                </Form.Group>
                <FloatingLabel controlId="floatingTextarea" label="Mô tả ngắn" className="mb-1">
                    <Form.Control as="textarea" {...register("description_short", { required: true })} placeholder="Nhập mô tả ngắn" />
                    {errors.description_short && <span className="font-italic text-danger error-empty-form">Vui lòng nhập mô tả ngắn</span>}
                </FloatingLabel>
                <FloatingLabel controlId="floatingTextarea2" label="Mô tả chi tiết">
                    <Form.Control as="textarea" {...register("description", { required: true })} placeholder="Nhập mô tả chi tiết" style={{ height: '100px' }} />
                    {errors.description && <span className="font-italic text-danger error-empty-form">Vui lòng nhập mô tả chi tiết</span>} 
                </FloatingLabel>
                <Button variant="primary" type="submit" className="mt-3 bnt-submit-form">
                    Thêm mới
                </Button>
            </Form>
            <ToastContainer />
        </Container>
    );
}
export default CreateProduct;

