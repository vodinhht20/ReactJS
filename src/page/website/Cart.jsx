import { Link } from "react-router-dom";
import { Table,Form, InputNumber  } from 'antd';

export default function Cart({cart}) {

    const onNumberChange = (value) => {
        console.log(value);
    }

    const collumns = [{
        key: "name",
        title: "Tên sản phẩm",
        dataIndex: "name",
        render: (name) => {
            return <p style={{maxWidth: "300px"}}>{name}</p>
        }
    }, {
        key: "price",
        title: "Đơn giá",
        dataIndex: "price",
    }, {
        key: "imager",
        title: "Hình ảnh",
        dataIndex: "imager",
        render: (imager) => {
            return <img src={imager} width="150"/>
        }
    }, {
        key: "qty",
        title: "Số lượng",
        dataIndex: "qty",
        render: (qty) => {
            return(
                <Form.Item  rules={[{ type: 'number', min: 1, max: 99 }]} >
                    <InputNumber onChange={onNumberChange} value={qty} />
                </Form.Item>
            );
        }
    }

]
    return (
        <div className="container">
            <h1>Giỏ hàng</h1>
            <div className="container">
                <div className="conten-product-detail">
                <Table columns={collumns} dataSource={cart} pagination={true}>
                </Table>
                    <div className="bnt-order-now d-flex flex-row-reverse mt-3">
                        <Link to={"/order"} className="btn btn-primary">Đặt Hàng Ngay</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}