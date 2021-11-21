import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Outlet } from "react-router-dom";
import { Container } from 'react-bootstrap';
export default function AdminFooter() { 
    return (
        <footer className="bg-dark text-light text-center p-3">
            <Container>
                Copyright © 2018 all rights reserved
            </Container>
        </footer>
    );
}