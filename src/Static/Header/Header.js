import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/androCarsLogo.png';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';


const Header = () => {

    const [user, loading, error] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    };

    return (
        <div className="header sticky-top">
            <Navbar expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to={'/home'}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/blog'}>Blog</Link>
                            </li>
                            <li className="nav-item">
                                {
                                    user && <>
                                        <Link className="nav-link" to={'/add-packages'}>Dashboard</Link>
                                    </>
                                }
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/blog'}>About</Link>
                            </li>

                            <li className="nav-item">
                                <div className='verify'>
                                    {user?.email ?
                                        <div className="nav-link logOut">
                                            <box-icon className="userIcn" name='log-in-circle' color='#928773'></box-icon>
                                            <p onClick={logout}>Logout</p>
                                        </div>
                                        :
                                        <Link className="nav-link logIn" to={'/login'}>
                                            <box-icon className="userIcn" name='user' color='#928773' ></box-icon>
                                            <p>Log or Register</p>
                                        </Link>
                                    }
                                </div>
                            </li>
                        </ul>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>

    );
};

export default Header;