import React, { useContext } from 'react';
import './Navigation.css';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './Authcontext';

const Navigation = () => {

    const { token, logout } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleSubmit = () => {
        logout();
        navigate("/login")
    }

    return (
        <div className='container-fluid bg-dark'>
            <div className='container'>
                <div className='navbar navbar-expand-lg'>
                    <Link className="navbar-brand text-light">NAVBAR</Link>
                    <div className='collapse navbar-collapse w-100 d-flex justify-content-center'>
                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                                <Link className='nav-link text-light' to={"/"}>HOME</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link text-light' to={"/about"}>ABOUT</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link text-light' to={"/product"}>PRODUCT</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link text-light' to={"/project"}>PROJECT</Link>
                            </li>
                        </ul>
                    </div>
                    {token ? (
                        <Link className='button' onClick={handleSubmit}>LOGOUT</Link>
                    ) : (
                        <Link className='button' to={"/login"}>LOGIN</Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navigation;
