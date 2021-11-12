import { Table,Button,FormControl,Form } from "react-bootstrap";
import { Link } from "react-router-dom";



const CreateProduct = ({post}) => {
    return (
        <Form onSubmit={(e) => {e.preventDefault(); post();}}>
            <h3 className="text-center mt-3 mb-3">Thêm sản phẩm</h3>
            <Form.Group className="mb-3" idName="form-add" controlId="formBasicEmail">
                <Form.Label idName="">Tên sản phẩm</Form.Label>
                <Form.Control type="text" className="val-name" placeholder="Nhập tên sản phẩm" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Hình ảnh</Form.Label>
                <Form.Control type="text" className="val-image" placeholder="Nhập hình ảnh" />
            </Form.Group>
            <Button variant="primary" type="submit" >
                Thêm mới
            </Button>
        </Form>
    );
}
export default CreateProduct;

