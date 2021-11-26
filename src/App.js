import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { BrowserRouter, Routes,Route,Link,Outlet, Navigate, useParams} from "react-router-dom";
import { list, remove, create,update} from "./api/productAPI";
import { listCate, removeCate, createCate,updateCate} from "./api/categoryAPI";
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import {isAuthenticate} from "./authenticate";


import CreateProduct from "./page/admin/CreateProduct";
import CreateCate from "./page/admin/CreateCategory";
import Category from "./page/website/Category";
import Dashboard from "./page/admin/Dashboard";
import Home from './page/website/Home';
import Error404 from "./page/website/Error404";
import ShowProduct from "./page/admin/ShowProduct";
import ShowCategory from "./page/admin/ShowCategory";
import ShowEditProduct from "./page/admin/ShowEditProduct";
import ShowEditCategory from "./page/admin/ShowEditCategory";
import Signup from './page/website/Signup';
import ProductDetail from './page/website/ProductDetail';
import PrivateAdmin from "./page/website/PrivateAdmin";
import LayoutWebsite from './layout/LayoutWebsite';
import Login from './page/website/Login';
import LayoutAdmin from './layout/LayoutAdmin';


function App() {

  const [auth, setAuth] = useState(isAuthenticate);
  const [products,setProducts] = useState([]);
  const [categories,setCategories] = useState([]);

  const onChangeLogin = (auth) => {
    setAuth(auth);
  }
  useEffect(() => {
    list().then((response => setProducts(response.data)))
    listCate().then((response => setCategories(response.data)))
  },[])
  const onHandleRemove = (id) => {
    remove(id).then(() => {
      const newProducts = products.filter((item) => item.id !== id);
      setProducts(newProducts);
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
          <Route index element={<Home products={products} categories={categories}/>} />
          <Route path="signup" element={<Signup setAuth={onChangeLogin}/>} />
          <Route path="login" element={<Login setAuth={onChangeLogin}/>} />
          <Route path="product" element={<div>sản phẩm</div>}/>
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="loai-san-pham/:id" element={<Category />}categories={categories} />

          <Route path="*" element={<Error404 />} />
        </Route>
        <Route path="admin/*" element={<PrivateAdmin ><LayoutAdmin auth={auth} setAuth={setAuth}/></PrivateAdmin>}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products" element={<ShowProduct products={products} onRemove={onHandleRemove} />} />
          <Route path="product/create" element={<CreateProduct post={onHandleAdd} categories={categories}/>} />
          <Route path="product/:id/edit" element={<ShowEditProduct post={onHandleUpDate} categories={categories}/>}/>
          <Route path="category" element={<ShowCategory categories={categories} setCategories={setCategories} />} />
          <Route path="category/create" element={<CreateCate categories={categories} setCategories={setCategories} />} />
          <Route path="category/:id/edit" element={<ShowEditCategory categories={categories} setCategories={setCategories} />} />
        </Route>
      </Routes>
    </BrowserRouter>
);
}

export default App;
