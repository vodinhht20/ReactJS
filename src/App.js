import 'bootstrap/dist/css/bootstrap.min.css';
import LayoutWebsite from './layout/LayoutWebsite';
import LayoutAdmin from './layout/LayoutAdmin';
import Home from './components/Home';
import { BrowserRouter, Routes,Route,Link,Outlet, Navigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import AdminProductShow from "./components/admin/show/AdminProductShow";
import CreateProduct from "./components/admin/create/CreateProduct";

import { list, remove, create} from "./api/productAPI";




function App() {
  const [products,setProducts] = useState([]);
  useEffect(() => {
    list().then((response => setProducts(response.data)))
  },[])
  const onHandleRemove = (id) => {
    remove(id).then(() => {
      const newProducts = products.filter((item) => item.id !== id);
      setProducts(newProducts);
    });
  }
const onSubmitCreate = () => {
  var valImage = document.querySelector('.val-image').value;
  var valName = document.querySelector('.val-name').value;
  var valprice = document.querySelector('.val-price').value;
  var valdescshort = document.querySelector('.val-desc-short').value;
  var valdesc = document.querySelector('.val-desc').value;
  var valdiscount = document.querySelector('.val-discount').value;
  var post = {
    name: valName,
    image: valImage,
    price: valprice,
    description_short: valdescshort,
    description:valdesc,
    discount:valdiscount,
  }
  create(post).then((response) => {
    setProducts(response.data);
    alert("Tạo sản phẩm thành công !");
    window.location = '/admin/product';
  } )
}


  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutWebsite />}>
            <Route index element={<Home products={products}/>} />
            <Route path="product" element={<div>sản phẩm</div>}/>
            <Route path="category" element={<div>Danh muc san pham</div>} />
            <Route path="product/:id" element={<h5>San pham chi tie</h5>} />
          </Route>
          <Route path="admin/*" element={<LayoutAdmin />}>
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<div>Chào Mừng Bạn Đến với trang quản trị</div>} />
            <Route path="products" element={<AdminProductShow products={products} onRemove={onHandleRemove} />} />
            <Route path="category" element={<div>Quản Trị Loại sản phẩm</div>} />
            <Route path="product/create" element={<CreateProduct post={onSubmitCreate}/>} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
