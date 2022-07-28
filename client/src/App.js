import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from "react";
import { BrowserRouter as Router, Route , Routes} from "react-router-dom";
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import AdminPanel from "./pages/AdminPanel";
import Header from "./pages/Header";

function App() {
    return (
        <>
            <Header />         
                <Router>
                    <Routes>
                        <Route exact path="/" element={<Dashboard />} />
                        <Route exact path="/login" element={<Login />} />
                        <Route exact path="/register" element={<Register />} />
                        <Route exact path="/admin" element={<AdminPanel />} />
                    </Routes>
                </Router>
        </>
    );
}

export default App