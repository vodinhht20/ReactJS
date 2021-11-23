import { faSort,faSortDown,faSortUp,faSortAlphaDown,faSortAlphaUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { list } from "../../api/productAPI";
import { useState, useEffect } from "react";
import {Button, Container, Form } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import { Pagination,Table } from 'antd';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const AdminProductShow = ({ products, onRemove }) => {

  const [filter, setFilter] = useState(products);
  const [iconFilter, setIconFilter] = useState(faSort);

  useEffect(() => {
    setFilter(products)
  },[products])

  const onHandleSort = (e) => {
    if (e.target.value==1) {
      list("_sort=name&_order=asc").then((response) => {
        setFilter(response.data);
        setIconFilter(faSortAlphaDown);
      })
    } else if(e.target.value==2) {
      list("_sort=name&_order=desc").then((response) => {
        setFilter(response.data);
        setIconFilter(faSortAlphaUp);
      })
    } else if (e.target.value==3) {
      list("_sort=price&_order=asc").then((response) => {
        setFilter(response.data);
        setIconFilter(faSortDown);
      })
    } else if (e.target.value==4) {
      list("_sort=price&_order=desc").then((response) => {
        setFilter(response.data);
        setIconFilter(faSortUp);
      })
    } else {
      list("").then((response) => {
        setFilter(response.data);
        setIconFilter(faSort);
      })
    }
  }
  function formatCash(str) {
    str = `${str}`;
      return str.split('').reverse().reduce((prev, next, index) => {
          return ((index % 3) ? next : (next + ',')) + prev
      })
  }

  const handleShow = (idProduct) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Xác nhận xóa',
      text: "Hành động này không thể thể khôi phục",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Xác nhận',
      cancelButtonText: 'Hủy bỏ',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        onRemove(idProduct);

        swalWithBootstrapButtons.fire(
          'Đã xóa',
          'Bạn đã xóa thành công sản phẩm này',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Hủy bỏ',
          'Bạn đã hủy lệnh này',
          'error'
        )
      }
    })
    // const onChangePage = () => {
    //   console.log("đá");
    // }
  };

  const collumns = [
    {
      key: "1",
      title: "Tên sản phẩm",
      dataIndex: "name"
    }, {
      key: "2",
      title: "Hình ảnh",
      dataIndex: "imager",
      render: (imager) => {
        return <img src={imager}/>;
      }
    }, {
      key: "3",
      title: "Đơn giá",
      dataIndex: "price"
    }, {
      key: "4",
      title: "Giảm giá",
      dataIndex: "discount"
    }, {
      key: "5",
      title: "Mô tả ngắn",
      dataIndex: "description_short"
    }
  ]


  return (
    <Container>
      <h2 className="text-center p-3 mb-3">Danh sách sản phẩm</h2>
      <hr className="bg-secondary" />
      <div className="row justify-content-between align-items-center">
        <Link to={"/admin/product/create"} className="col-md-6 col-lg-6" >
          <Button variant="success" className="mt-2 mb-2">
            Thêm sản phẩm
          </Button>
        </Link>
        <div className="box_select d-flex col-md-6 col-lg-6 justify-content-end align-items-center">
          <lable className="me-sm-2" htmlFor="inlineFormCustomSelect" >
            Sắp xếp <FontAwesomeIcon icon={iconFilter}/> :
          </lable>
          <Form.Select className="me-sm-2" id="inlineFormCustomSelect" style={{width: "200px"}} onChange={(e) => onHandleSort(e)}>
            <option value="">---- Lựa chọn sắp xếp ----</option>
            <option value="1">Tên A - Z</option>
            <option value="2">Tên Z - A</option>
            <option value="3">Đơn giá tăng dần</option>
            <option value="4">Đơn giá giảm dần</option>
          </Form.Select>
        </div>
      </div>
      <Table>
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
          {filter.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.name}</td>
                <td>
                  <img src={item.imager} width="100" />
                </td>
                <td>{formatCash(item.price)} đ</td>
                <td>{item.discount} %</td>
                <td>{item.description_short}</td>
                <td>
                  <Link to={"/product/" + item.id}>
                    <Button variant="success" className="d-block m-auto">
                      Chi Tiết
                    </Button>
                  </Link>
                </td>
                <td>
                  <Link to={"/admin/product/" + item.id + "/edit"}>
                    <Button variant="primary" className="d-block m-auto">
                      Sửa
                    </Button>
                  </Link>
                </td>
                <td>
                  <Button variant="danger" onClick={() => handleShow(item.id)}>
                    Xóa
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Pagination defaultCurrent={1} defaultPageSize={2} onChange={2,2} total={filter.length} />
      <ToastContainer />
    </Container>
  );
};
export default AdminProductShow;
