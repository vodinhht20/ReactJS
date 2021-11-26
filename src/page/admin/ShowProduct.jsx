import { DeleteOutlined, EditOutlined, SearchOutlined } from '@ant-design/icons';
import { faSort,faSortDown,faSortUp,faSortAlphaDown,faSortAlphaUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { list } from "../../api/productAPI";
import { useState, useEffect } from "react";
import {Button, Container, Form } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import { Pagination,Table,Input,Tooltip,Button as ButtonAntd } from 'antd';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const ShowProduct = ({ products, onRemove }) => {

  const [filter, setFilter] = useState(products);

  useEffect(() => {
    setFilter(products)
  },[products])

  function formatCash(str) {
    str = `${str}`;
      return str.split('').reverse().reduce((prev, next, index) => {
          return ((index % 3) ? next : (next + ',')) + prev
      })
  }
  const handleShow = (idProduct) => {
    Swal.fire({
      title: 'Xác nhận xóa',
      text: "Hành động này không thể thể khôi phục",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Xác nhận'
    }).then((result) => {
      if (result.isConfirmed) {
        onRemove(idProduct);
        Swal.fire(
          'Đã xóa !',
          'Bạn đã xóa thành công sản phẩm này',
          'success'
        )
      }
    })
  };

  const collumns = [
    {
      key: "1",
      title: "Tên sản phẩm",
      dataIndex: "name",
      filterDropdown: ({setSelectedKeys,selectedKeys,confirm}) => {
        return (
          <div style={{display: "flex"}}>
            <Input autoFocus placeholder="Nhập từ khóa"
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : []);
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
            ></Input>
            {/* <Tooltip title="search"> */}
              <ButtonAntd type="primary" onClick={() => confirm()} shape="circle" icon={<SearchOutlined />} size="large" />
            {/* </Tooltip> */}
          </div>
        );
      },
      filterIcon: () => {
        return <SearchOutlined/>;
      },
      onFilter: (value,record) => {
        return record.name.toLowerCase().includes(value.toLowerCase());
      }
    }, {
      key: "2",
      title: "Hình ảnh",
      dataIndex: "imager",
      render: (imager) => {
        return <img src={imager} style={{width: 100}}/>;
      }
    }, {
      key: "3",
      title: "Đơn giá",
      dataIndex: "price",
      render: (price) => {
        return `${formatCash(price)} đ`;
      },
      sorter: (sorter1, sorter2) => {
        return sorter1.price > sorter2.price
      }
    }, {
      key: "4",
      title: "Giảm giá",
      dataIndex: "discount",
      render: (discount) => {
        return discount+" %";
      }
    }, {
      key: "5",
      title: "Loại hàng",
      dataIndex: "category",
      render: (category) => {
        if (category=== 1) {
          return "Thiết bị y tế";
        }else if (category=== 2) {
          return "Thuốc trị ngoài da";
        }else if (category=== 3) {
          return "Thuốc chữa bệnh";
        }else if (category=== 4) {
          return "Dụng cụ y tế";
        }else if (category=== 5) {
          return "Thiết bị nội soi";
        } else {
          return "Thiết bị khác";
        }
      },
      filters: [
        {text: "Thiết bị y tế", value:1},
        {text: "Thuốc trị ngoài da", value:2},
        {text: "Thuốc chữa bệnh", value:3},
        {text: "Thiết bị nội soi", value:4},
        {text: "Thiết bị khác", value:5}
      ],
      onFilter: (value,record) => {
        return record.category === value;
      }
    }, {
      key: "6",
      title: "Mô tả ngắn",
      dataIndex: "description_short",
      render: (description_short) => {
        return <div style={{maxWidth: "250px"}} className="max-row-text">{description_short}</div>
      }
    }
    , {
      key: "7",
      title: "Action",
      render: (record) => {
        return <div style={{minWidth: "70px", display: "flex", justifyContent: "space-between"}}>
          <Link to={`/admin/product/${record.id}/edit`}><EditOutlined style={{color: "#096dd9", cursor: "pointer", fontSize: "23px"}} title="Sửa"/></Link>
          <DeleteOutlined onClick={() =>handleShow(record.id)} style={{color: "#f5222d", marginLeft: "3px", cursor: "pointer", fontSize: "23px"}} title="Xóa"/>
        </div>
      }
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
      </div>
      <Table 
        columns={collumns}
        dataSource={filter}
        pagination={true}
      >
      </Table>
      <ToastContainer />
    </Container>
  );
};
export default ShowProduct;
