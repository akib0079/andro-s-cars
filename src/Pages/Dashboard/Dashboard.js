import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Dashboard.css';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';


const Dashboard = () => {

    const [user, loading, error] = useAuthState(auth);
    const [admin] = useAdmin(user);

    console.log(admin);
    return (
        <section className='dashboardPage'>

            <div className="container-fluid p-0">
                <div className="row g-0 p-0">
                    <div className="col navCol">
                        <div className=" d-xs-none offcanvas-starts" >
                            <div className="offcanvas-body">
                                <Link className='d-flex navButton' to={'/dashboard/profile'}>
                                    <i className='bx bxs-user-circle' ></i>
                                    <h6 className='ms-2'>My Profile</h6>
                                </Link>
                                {!admin && <>
                                    <Link className='d-flex navButton mt-2' to={'/dashboard/myorders'}>
                                        <i className='bx bxs-cart-download' ></i>
                                        <h6 className='ms-2'>My Orders</h6>
                                    </Link>
                                    <Link className='d-flex navButton mt-2' to={'/dashboard/submitreview'}>
                                        <i className='bx bxs-user-pin' ></i>
                                        <h6 className='ms-2'>Give us a Feedback!</h6>
                                    </Link>
                                </>}
                                {admin && <>
                                    <Link className='d-flex navButton mt-2' to={'/dashboard/users'}>
                                        <i className='bx bxs-user-badge' ></i>
                                        <h6 className='ms-2'>Users</h6>
                                    </Link>
                                    <Link className='d-flex navButton mt-2' to={'/dashboard/add-tools'}>
                                        <i className='bx bxs-checkbox-checked' ></i>
                                        <h6 className='ms-2'>Add A Product</h6>
                                    </Link>
                                    <Link className='d-flex navButton mt-2' to={'/dashboard/manage-products'}>
                                        <i className='bx bxl-dropbox' ></i>
                                        <h6 className='ms-2'>Manage Products</h6>
                                    </Link>
                                    <Link className='d-flex navButton mt-2' to={'/dashboard/manage-orders'}>
                                        <i className='bx bxs-package' ></i>
                                        <h6 className='ms-2'>Manage All Orders</h6>
                                    </Link>
                                </>}
                            </div>
                        </div>
                    </div>
                    <div className="col p-4">
                        <Outlet />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;