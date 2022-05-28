import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import './Purchase.css';
import { useForm } from 'react-hook-form';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
const Purchase = () => {

    const { id } = useParams();

    const [user, loading, User_error] = useAuthState(auth);

    const [tool, setTool] = useState([]);
    const { _id, name, price, img, a_quantity, desc, m_order } = tool;

    const { isLoading, error, data } = useQuery('repoData', () =>
        fetch(`https://warm-dusk-57859.herokuapp.com/tools/${id}`).then(res =>
            res.json()
        ).then(data => setTool(data))
    )

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const { billing_name, email, phoneNum, quantity, Shipping_address } = data;

        if (quantity > parseInt(a_quantity)) {
            toast.error('Not Available', {
                position: toast.POSITION.TOP_CENTER
            });
            return;
        }
        if (quantity < parseInt(m_order)) {
            toast.error(`Minium Order ${m_order}`, {
                position: toast.POSITION.TOP_CENTER
            });
            return;
        }
        const url = `https://warm-dusk-57859.herokuapp.com/orders`;

        const orderDetails = {
            billing_name: billing_name,
            email: email,
            phoneNum: phoneNum,
            quantity: quantity,
            shipping_address: Shipping_address,
            product_name: tool.name,
            price: tool.price,
        }
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(orderDetails),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast.success(`${orderDetails.product_name} added`, {
                    position: toast.POSITION.TOP_CENTER
                });
            })

    };
    console.log(errors);

    if (isLoading || tool.length === 0) return (
        <div className="spinnerDiv">
            <Spinner className='spinner' animation="grow" />
        </div>
    );

    if (error) return 'An error has occurred: ' + error.message;


    return (
        <section className='purchasePage'>
            <section className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-md-5">
                        <img className='img-fluid imgTool' src={img} alt="tools" />
                    </div>
                    <div className="col-md-7">
                        <h3 className='text-uppercase'>{name}</h3>
                        <p>{desc}</p>
                        <hr />
                        <div className="d-flex justify-content-between align-items-center">
                            <h4>Price Per Unit : ${price}</h4>
                            <p className='text-muted'>Available Unit : {a_quantity}</p>
                            <p className='text-muted'>Min Order Count : {m_order}</p>
                        </div>


                        {/* Order form */}

                        <h4 className='form-group row gap-2 p-3'>Order Product</h4>

                        <form className='OrderForm pe-3 ps-3' onSubmit={handleSubmit(onSubmit)}>
                            <div className="row gap-2 ">
                                {/* Name */}
                                <input value={user.displayName} readOnly className='form-control col mb-3' required type="text" placeholder="Billing name" {...register("billing_name", { required: true, maxLength: 80 })} />
                                {/* Mail */}
                                <input value={user.email} readOnly className='form-control col mb-3' required type="text" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                            </div>
                            <div className="row gap-2 mb-3">
                                <input className='form-control col' required type="tel" placeholder="Phone/Contact number" {...register("phoneNum", { required: true, maxLength: 12 })} />
                            </div>
                            <div className="row gap-2 mb-3">
                                <input className='form-control col' required type="number" placeholder="Quantity" {...register("quantity", { required: true })} />
                            </div>
                            <div className="row gap-2 mb-3">
                                <textarea className='form-control col' required placeholder="Shipping address" {...register("Shipping_address", {})} />
                            </div>
                            <div className="form-group row gap-2 mb-3">
                                <input className='btn primaryBtn' value={"Place Order"} type="submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </section >
    );
};

export default Purchase;