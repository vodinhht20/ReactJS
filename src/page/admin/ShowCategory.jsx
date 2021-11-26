import { EditOutlined } from '@ant-design/icons';
import { Switch } from 'antd';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {Button, Container, Form } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import { Pagination,Table } from 'antd';
import {updateCate} from "../../api/categoryAPI";

import Swal from 'sweetalert2'
const ShowCategory = ({ categories,setCategories}) => {

  const [filter, setFilter] = useState(categories);



  useEffect(() => {
    setFilter(categories)
  },[categories])


  const handleClick = (idCate,status) => {
    
        updateCate({id:idCate,active: !status});
        const dataNew = categories.map(item => {
          if(item.id===idCate) {
            var itemNew = {
              ...item,
              active: !status
            }
            return itemNew;
          }
          return item;
        })
        setCategories(dataNew);
        Swal.fire({
          icon: 'success',
          title: 'Bạn đã chuyển trạn thái thành công',
          showConfirmButton: false,
          timer: 1500
        })
  }

  const collumns = [
    {
      key: "1",
      title: "Tên loại sản phẩm",
      dataIndex: "name",
    }, {
      key: "2",
      title: "Hình ảnh",
      dataIndex: "imgager",
      render: (imgager) => {
        return <img src={imgager} style={{width: 100}}/>;
      }
    }, {
      key: "3",
      title: "Trạng thái",
      render: (record) => {
          return <Switch checkedChildren="Bật" onClick={() => handleClick(record.id,record.active)} unCheckedChildren="Tắt" checked={record.active} />
      },
      filters: [
        {text: "Hoạt động", value:true},
        {text: "Đã tắt", value:false}
      ],
      onFilter: (value,record) => {
        return record.active === value;
      }
    }
    , {
      key: "4",
      title: "Action",
      render: (record) => {
        return <div style={{minWidth: "70px", display: "flex", justifyContent: "space-between"}}>
          <Link to={`/admin/category/${record.id}/edit`}><EditOutlined style={{color: "#096dd9", cursor: "pointer", fontSize: "23px"}} title="Sửa"/></Link>
        </div>
      }
    }

  ]
  return (
    <Container>
      <h2 className="text-center p-3 mb-3">Danh sách loại sản phẩm</h2>
      <hr className="bg-secondary" />
      <div className="row justify-content-between align-items-center">
        <Link to={"/admin/category/create"} className="col-md-6 col-lg-6" >
          <Button variant="success" className="mt-2 mb-2">
            Thêm loại sản phẩm
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
export default ShowCategory;
