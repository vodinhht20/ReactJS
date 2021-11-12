import { Table,Button,FormControl,Form,Container,FloatingLabel } from "react-bootstrap";
import { Link } from "react-router-dom";



const CreateProduct = ({post}) => {
    return (
        <Container>
            <nav aria-label="breadcrumb mb-3">
                <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to={"/admin/dashboard"}>Dashboard</Link></li>
                <li className="breadcrumb-item" aria-current="page"><Link to={"/admin/products"}>Sản phẩm</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Thêm sản phẩm</li>
                </ol>
            </nav>
            <Form onSubmit={(e) => {e.preventDefault(); post();}} className="mt-3 mb-3">
                <h3 className="text-center mt-3 mb-3">Thêm sản phẩm</h3>
                <Form.Group className="mb-3" idName="form-add" controlId="formBasicEmail">
                    <Form.Label idName="">Tên sản phẩm</Form.Label>
                    <Form.Control type="text" className="val-name" placeholder="Nhập tên sản phẩm" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Hình ảnh</Form.Label>
                    <Form.Control type="text" className="val-image" placeholder="Nhập hình ảnh" />
                </Form.Group>
                <Form.Group className="mb-3" idName="form-add" controlId="formBasicEmail">
                    <Form.Label idName="">Đơn giá </Form.Label>
                    <Form.Control type="number" className="val-price" placeholder="Nhập tên sản phẩm" />
                </Form.Group>
                <Form.Group className="mb-3" idName="form-add" controlId="formBasicEmail">
                    <Form.Label idName="">Giảm giá</Form.Label>
                    <Form.Control type="number" className="val-discount" placeholder="Nhập tên sản phẩm" />
                </Form.Group>
                <Form.Group className="mb-3" idName="form-add" controlId="formBasicEmail">
                    <Form.Label idName="">Thông tin sản phẩm</Form.Label>
                </Form.Group>
                <FloatingLabel controlId="floatingTextarea" label="Mô tả ngắn" className="mb-3">
                    <Form.Control as="textarea" placeholder="Nhập mô tả ngắn" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingTextarea2" label="Mô tả chi tiết">
                    <Form.Control as="textarea" className="val-desc-short" placeholder="Nhập mô tả chi tiết" style={{ height: '100px' }} />
                </FloatingLabel>
                
                <Button variant="primary" type="submit" className="mt-3">
                    Thêm mới
                </Button>
            </Form>
        </Container>
    );
}
export default CreateProduct;

