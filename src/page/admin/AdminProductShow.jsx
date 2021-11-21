import { Table,Button,Modal,Container,Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ToastContainer} from 'react-toastify';


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
          <h2 className="text-center p-3 mb-3">Danh sách sản phẩm</h2>
          <hr className="bg-secondary"/>
          <Link to={"/admin/product/create"}><Button variant="success" className="mt-2 mb-2">Thêm sản phẩm</Button></Link>
          <Table className="list-products">
            <thead className="bg-Info text-white">
              <tr>
                <th>Tên sản phẩm</th>
                <th>Hình ảnh</th>
                <th>Đơn giá</th>
                <th>Giảm giá</th>
                <th>Mô tả</th>
                <th colSpan="3"></th>
              </tr>
            </thead>
            <tbody>
            {
              products.map((item, index) => {
                return (
                    <tr key={index}>
                      <td>{item.name}</td>
                      <td><img src={item.imager} width="100" /></td>
                      <td>{item.price}</td>
                      <td>{item.discount} %</td>
                      <td>{item.description_short}</td>
                      <td><Link to={"/product/"+item.id}><Button variant="success" className="d-block m-auto">Chi Tiết</Button></Link></td>
                      <td><Link to={"/admin/product/"+item.id+'/edit'}><Button variant="primary" className="d-block m-auto">Sửa</Button></Link></td>
                      <td><Button variant="danger" onClick={() => handleShow(item.id)} >Xóa</Button></td>
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
          <ToastContainer />
        </Container>
    );
  };
  export default AdminProductShow;
  