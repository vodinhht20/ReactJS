import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes,Route,Link,Outlet, Navigate, useParams} from "react-router-dom";
import { list, remove, create,update} from "./api/productAPI";
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import {isAuthenticate} from "./authenticate";


import AdminProductShow from "./page/admin/AdminProductShow"; 
import CreateProduct from "./page/admin/CreateProduct"; 
import Dashboard from "./page/admin/Dashboard";
import Home from './page/website/Home';
import ProductDetail from './page/website/ProductDetail';
import LayoutWebsite from './layout/LayoutWebsite';
import LayoutAdmin from './layout/LayoutAdmin';
import Login from './page/website/Login';
import Signup from './page/website/Signup';
import ShowEditProduct from "./page/admin/ShowEditProduct";
import PrivateAdmin from "./page/website/PrivateAdmin";
import Error404 from "./page/website/Error404";
import UploadFile from "./components/UploadFile";


function App() {

  const [auth, setAuth] = useState(isAuthenticate);
  const [products,setProducts] = useState([]);

  const onChangeLogin = (auth) => {
    setAuth(auth);
  }
  useEffect(() => {
    list().then((response => setProducts(response.data)))
  },[])
  const onHandleRemove = (id) => {
    remove(id).then(() => {
      const newProducts = products.filter((item) => item.id !== id);
      setProducts(newProducts);
      toast.success("Đã xóa sản phẩm !",{
        autoClose: 3000
    });
    });
  }
  const onHandleAdd = (post) => {
    create(post)
    .then((response) => {
      setProducts([...products,response.data]);
    })
    .catch((error) => {
      toast.error("Tạo sản phẩm thất bại vui lòng thử lại !");
    })
  }
  const onHandleUpDate = (post) => {
    update(post)
      .then((response) => {
        var newProduct = products.map(item => {
          if(item.id===post.id) {
            console.log(post);
            return post;
          }
          return item;
        });
        setProducts(newProduct);
        toast.success("Cập nhật thành công !",{
              autoClose: 3000
          });
      })
      .catch((error) => {
        toast.error("Cập nhật thất bại vui lòng thử lại !");
      })
    
  }
return (
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutWebsite auth={auth} setAuth={setAuth}/>}>
          <Route index element={<Home products={products} />} />
          <Route path="signup" element={<Signup setAuth={onChangeLogin}/>} />
          <Route path="login" element={<Login setAuth={onChangeLogin}/>} />
          <Route path="product" element={<div>sản phẩm</div>}/>
          <Route path="category" element={<div>Danh muc san pham</div>} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="upload-imager" element={<UploadFile />} />

          <Route path="*" element={<Error404 />} />
        </Route>
        <Route path="admin/*" element={<PrivateAdmin ><LayoutAdmin auth={auth} setAuth={setAuth}/></PrivateAdmin>}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products" element={<AdminProductShow products={products} onRemove={onHandleRemove} />} />
          <Route path="product/create" element={<CreateProduct post={onHandleAdd}/>} />
          <Route path="product/:id/edit" element={<ShowEditProduct post={onHandleUpDate}/>} />
          <Route path="category" element={<div>Quản Trị Loại sản phẩm</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
);
}

export default App;
