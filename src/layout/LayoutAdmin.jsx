import 'bootstrap/dist/css/bootstrap.min.css';
import AdminHeader from "../components/AdminHeader";
import { BackTop } from 'antd';

export default function LayoutAdmin({auth, setAuth}) {
  return (
      <div>
        <AdminHeader auth={auth} setAuth={setAuth}/>
        <BackTop />
      </div>
  );
}


