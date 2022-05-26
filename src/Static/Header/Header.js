import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import logo from '../../images/androCarsLogo.png';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';


const Header = () => {

    const [user, loading, error] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    };

    return (
        <header className="header sticky-top">
            <div className="container topBar mt-2 mb-3">
                <div className="row mobile">
                    <div className="col-6">
                        <Link to={'/home'}>
                            <img className='logoImg' src={logo} alt="" />
                        </Link>
                    </div>
                    <div className="col-6 d-flex align-items-center justify-content-end">
                        <div className="icnBox d-flex align-items-center">
                            <div className="icn me-2">
                                <i className='bx bx-mobile'></i>
                            </div>
                            <div className="info mb-0">
                                <p className='mb-0'>Call us for more info.</p>
                                <p className='mb-0 phnNum'>+009456753</p>
                            </div>
                        </div>
                        {/* LOgin or logout */}

                        <div className='verify ms-lg-4 d-flex align-items-center mt-3 justify-content-end'>
                            {user?.email ?
                                <div className="logOut">
                                    <box-icon name='log-in-circle' type='solid' color="#EE3939"></box-icon>
                                    <p className='mt-1' onClick={logout}>Log Out</p>
                                </div>
                                :
                                <Link className="logIn" to={'/login'}>
                                    <box-icon name='user-circle' type='solid' color="#EE3939" ></box-icon>
                                    <p className='mt-1'>Log or Register</p>
                                </Link>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-center">
                            {/* <li className="allProduct d-flex align-items-center justify-align-content-center me-4">
                                <Link className="extra-link" to={'/products'}>Explore All Products</Link>
                            </li> */}
                            <li className="nav-item">
                                <Link className="nav-link" to={'/home'}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/blog'}>Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/blog'}>ALl Products</Link>
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
                        </ul>

                    </Navbar.Collapse>
                    <div className="user ms-auto">
                        {
                            user ?
                                <div className="userDiv d-flex align-items-center">
                                    <p className='mb-0'>Welcome {user.displayName}</p>
                                    <Link className="dashBoard d-lg-block d-none" to={'/add-packages'}>Dashboard</Link>
                                </div>
                                :
                                <p className='mb-0'>Welcome User</p>
                        }
                    </div>
                </Container>
            </Navbar>
        </header>

    );
};

export default Header;