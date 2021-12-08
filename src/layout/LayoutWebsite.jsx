import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function LayoutWebsite({auth, setAuth, cart}) {
  return (
      <div className="container-fluid">
        <Header auth={auth} setAuth={setAuth} cart={cart}/>
          <Outlet />
        <Footer />
      </div>
  );
}
