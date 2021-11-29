import { createCate } from "../../api/categoryAPI";
import { Button,Form,Container,FloatingLabel } from "react-bootstrap";
import { Link,useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import UploadImage from "../../components/UploadImage";
import 'react-toastify/dist/ReactToastify.css';

const CreateCategory = ({categories,setCategories}) => {
    let navigate = useNavigate();
    const {register, handleSubmit, formState: { errors}} = useForm();

    const onSubmitCreate = async (data) => {
        await UploadImage(data.imgager[0]).then((response) => {
            data.imgager = response.url;
        });
        createCate({...data,active: true}).then(response => {
            setCategories([...categories,response.data])
        }); 
        console.log(data)
        toast.success("Tạo loại sản phẩm thành công !",{
            onClose: () => navigate("/admin/category/", { replace: true }),
            autoClose: 3000
        });
    }
    return (
        <Container className="pb-5">
            <h3 className="text-center p-3 mb-3">Tạo loại sản phẩm</h3>
            <hr className="bg-secondary"/>
            <Form onSubmit={handleSubmit(onSubmitCreate)} className="mt-3 mb-3">
                <Form.Group className="mb-1" id="form-add" controlId="formBasicEmail">
                    <Form.Label id="">Tên loại sản phẩm</Form.Label>
                    <Form.Control type="text" className="val-name" {...register("name", { required: true, maxLength: 100 })} placeholder="Nhập tên sản phẩm"/>
                    {errors.name?.type === 'required' && <span className="font-italic text-danger error-empty-form">Tên loại sản phẩm không được để trống</span>}
                    {errors.name?.type === 'maxLength' && <span className="font-italic text-danger error-empty-form">Tên loại sản phẩm không được quá 100 ký tự</span>}

                </Form.Group>
                <Form.Group className="mb-1" controlId="formBasicPassword">
                    <Form.Label>Hình ảnh</Form.Label>
                    <Form.Control type="file" className="val-image" {...register("imgager", { required: true })} placeholder="Nhập hình ảnh" />
                    {errors.imgager && <span className="font-italic text-danger error-empty-form">Vui lòng nhập hình ảnh</span>}
                </Form.Group>
                <Button variant="primary" type="submit" className="mt-3 bnt-submit-form">
                    Thêm mới
                </Button>
            </Form>
            <ToastContainer />
        </Container>
    );
}
export default CreateCategory;

