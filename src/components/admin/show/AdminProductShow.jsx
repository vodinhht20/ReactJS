import { Table,Button,Modal,Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

const AdminProductShow = ({ products, onRemove }) => {

  const [show, setShow] = useState(false);
  const [idDelete, setIdDelete] = useState(0);
  
  const handleClose = () => setShow(false);
  const handleConfirmDelete = (id) => {
    onRemove(id);
    return setShow(false);
  };


  const handleShow = (id) => {
    setIdDelete(id);
    return setShow(true);
  };
  

    return (
        <Container>
          <nav aria-label="breadcrumb mb-3">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to={"/admin/dashboard"}>Dashboard</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Sản Phẩm</li>
            </ol>
          </nav>
          <Link to={"/admin/product/create"}><Button variant="success" className="mt-2 mb-2">Thêm sản phẩm</Button></Link>
          <Table striped bordered hover variant="dark" className="rounded">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Avatar</th>
                <th>CreatedAt</th>
                <th colSpan="3"></th>
              </tr>
            </thead>
            <tbody>
            {
              products.map((item, index) => {
                return (
                    <tr key={index}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td><img src={item.imager} width="100" /></td>
                      <td>{item.createdAt}</td>
                      <td><Link to={"/product/"+item.id}><Button variant="success" className="d-block m-auto">Chi Tiết</Button></Link></td>
                      <td><Button variant="primary" className="d-block m-auto">Sửa</Button></td>
                      <td><Button variant="danger" className="d-block m-auto" onClick={() => handleShow(item.id)} >Xóa</Button></td>
                  </tr>
                )
              })
            }
            </tbody>
          </Table>
          <>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Thống báo</Modal.Title>
              </Modal.Header>
              <Modal.Body>Bạn có muốn xóa sản phẩm này không? Hành động này không thể khôi phục !</Modal.Body>
              <Modal.Footer>
                <Button variant="danger" onClick={() => handleConfirmDelete(idDelete)}>
                  Xác nhận
                </Button>
                <Button variant="secondary" onClick={handleClose}>
                  Đóng
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        </Container>
    );
  };
  export default AdminProductShow;
  