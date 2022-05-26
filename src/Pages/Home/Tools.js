import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tools = (props) => {

    const { _id, name, price, img, a_quantity, desc } = props.info;
    const nav = useNavigate()


    const navToPurchase = (id) => {
        nav(`/purchase/${id}`)
    }

    return (
        <div className="card singleCard">
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h4 className="card-title">{name?.slice(0, 20)}</h4>
                <p className="card-text mb-0">{desc.slice(0, 60)}...</p>
                <hr />
                <div className="info d-flex align-items-center mb-0 justify-content-between">
                    <p className="text-muted">Price : <b className='text-dark'>${price}</b></p>
                    <p className="text-muted">Available : {a_quantity}</p>
                </div>
                <button onClick={() => navToPurchase(_id)} className='btn primaryBtn w-100'>Purchase Now!</button>
            </div>
        </div>
    );
};

export default Tools;