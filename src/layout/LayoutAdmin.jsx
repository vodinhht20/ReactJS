import 'bootstrap/dist/css/bootstrap.min.css';
import AdminHeader from "../components/AdminHeader";

export default function LayoutAdmin({auth, setAuth}) {
  return (
      <div>
        <AdminHeader auth={auth} setAuth={setAuth}/>
      </div>
  );
}


