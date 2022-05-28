import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Myorder = () => {

    const [order, setOrder] = useState([]);
    const [user, loading, error] = useAuthState(auth);


    const { isLoading, Fetch_error, data } = useQuery('repoData', () =>
        fetch(`http://localhost:5000/order/?email=${user.email}`).then(res =>
            res.json()
        ).then(data => setOrder(data))
    )

    const nav = useNavigate()

    const navToPayment = (id) => {
        nav(`payment/${id}`)
    }
    const deleteOrder = (id) => {
        const url = `http://localhost:5000/delete-order/${id}`;
        fetch(url, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                const remaingOrder = order.filter(order => order._id !== id);
                setOrder(remaingOrder);
                toast.error(`Order Canceled`);
            })

    }

    if (isLoading) return (
        <div className="spinnerDiv">
            <Spinner className='spinner' animation="grow" />
        </div>
    );

    if (order.length === 0) {
        return (
            <div className="container">
                <h3>No order available. Place an order.</h3>
                <Link to={'/home'}><button className='btn primaryBtn'>Purchase Now!</button></Link>
            </div>
        );
    }

    return (
        <div>
            <h2>My Orders</h2>
            <hr />
            <div className="row row-cols-1 row-cols-md-3 gap-2">
                {
                    order.map((order, index) =>
                        <div className="butter">
                            <div className="card singleCard">
                                <div className="card-body">
                                    <h4 className="card-title">{order.product_name}</h4>
                                    <p className="card-text mb-0"></p>
                                    <hr />
                                    <div className="info d-flex align-items-center mb-0 justify-content-between">
                                        <p className="text-muted">Total Price : ${order.quantity * order.price}</p>
                                        <p className="text-muted">Quantity : {order.quantity}</p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <button onClick={() => navToPayment(order._id)} className='btn btn-success w-45'>Pay Now</button>
                                        <button className='btn btn-danger w-45' data-bs-toggle="modal" data-bs-target="#exampleModal">Cancel Order</button>
                                    </div>


                                </div>
                            </div>
                            {/* Delete modal. */}
                            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Cancel This Order?</h5>
                                        </div>
                                        <div className="modal-body">
                                            <p>Please hit confirm to delete or cancel the order.</p>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="button" onClick={() => deleteOrder(order._id)} className="btn btn-danger">Confirm</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                    )
                }
            </div>







        </div >
    );
};

export default Myorder;