import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path={`/`} element={localStorage.getItem('sesion') === "true" ? <Home /> : <Navigate to="/login"/>} />
                <Route path={`/home`} element={<Home />} />
                <Route path={`/login`} element={<Login />} />
                <Route path={`/register`} element={<Register />} />
                <Route path="*" element={<Navigate replace to="/"/>} />
            </Routes>
        </Router >

    );
}

export default AppRouter;