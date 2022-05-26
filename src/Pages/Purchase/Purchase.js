import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import './Purchase.css';
import { useForm } from 'react-hook-form';
const Purchase = () => {

    const { id } = useParams();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    const [tool, setTool] = useState([]);

    const { isLoading, error, data } = useQuery('repoData', () =>
        fetch(`https://warm-dusk-57859.herokuapp.com/tools/${id}`).then(res =>
            res.json()
        ).then(data => setTool(data))
    )

    if (isLoading || tool.length === 0) return (
        <div className="spinnerDiv">
            <Spinner className='spinner' animation="grow" />
        </div>
    );

    if (error) return 'An error has occurred: ' + error.message;
    const { _id, name, price, img, a_quantity, desc, m_order } = tool;


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
                        </div>
                        {/* Order form */}

                        <h4 className='form-group row gap-2 p-3'>Order Product</h4>

                        <form className='OrderForm pe-3 ps-3' onSubmit={handleSubmit(onSubmit)}>
                            <div className="row gap-2 ">
                                {/* Name */}
                                <input className='form-control col mb-3' required type="text" placeholder="Billing name" {...register("Billing name", { required: true, maxLength: 80 })} />
                                {/* Mail */}
                                <input className='form-control col mb-3' required type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
                            </div>
                            <div className="row gap-2 mb-3">
                                <input className='form-control col' required type="tel" placeholder="Phone/Contact number" {...register("Phone/Contact number", { required: true, maxLength: 12 })} />
                            </div>
                            <div className="row gap-2 mb-3">
                                <textarea className='form-control col' required placeholder="Shipping address" {...register("Shipping Address", {})} />
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