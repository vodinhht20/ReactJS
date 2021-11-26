import { Link,useParams,useNavigate } from "react-router-dom";
import { readCate,updateCate } from "../../api/categoryAPI";
import { useForm } from "react-hook-form";
import { useEffect,useState} from "react";
import { ToastContainer, toast } from 'react-toastify';
import { Table,Button,FormControl,Form,Container,FloatingLabel } from "react-bootstrap";

import Swal from 'sweetalert2'



const ShowEditCategory = ({ categories, setCategories}) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { id } = useParams();
    const [categoryData, setCategoryData] = useState([]);
    
    let navigate = useNavigate();
    const onUpdate = (data) => {
        updateCate({ id: id, ...data }).then(response => {
            const dataNew = categories.map(item => {
                if(item.id===response.data.id) {
                  return response.data;
                }
                return item;
            });
            setCategories(dataNew);
            Swal.fire({
                icon: 'success',
                title: 'Bạn đã cập nhật thành công !',
                showConfirmButton: false,
                timer: 1500
              })
        });
    };
    useEffect(() => {
        readCate(id).then((response) => {
            setCategoryData(response.data);
            reset(response.data);
          });   
    }, [id]);

    return (
        <Container>
            <h3 className="text-center p-3 mb-3">Thay đổi thông tin</h3>
            <hr className="bg-secondary"/>
            <Form onSubmit={handleSubmit(onUpdate)} className="mt-3 mb-3">
                <h4 className="text-center mt-3 mb-3">{categoryData.name}</h4>
                <Form.Group className="mb-3" id="form-add" controlId="formBasicEmail">
                    <Form.Label id="">Tên loại sản phẩm</Form.Label>
                    <Form.Control type="text" className="val-name" {...register("name", { required: true })} defaultValue={categoryData.name} placeholder="Nhập tên sản phẩm" />
                    {errors.name && <span className="font-italic text-danger error-empty-form">Vui lòng nhập tên loại sản phẩm</span>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Hình ảnh</Form.Label>
                    <Form.Control type="text" className="val-image" {...register("imgager", { required: true })} defaultValue={categoryData.imgager} placeholder="Nhập hình ảnh" />
                    {errors.imgager && <span className="font-italic text-danger error-empty-form">Vui lòng nhập hình ảnh</span>}
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
export default ShowEditCategory;

