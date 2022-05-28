import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddTools = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        fetch(`https://warm-dusk-57859.herokuapp.com/post-tool`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast.success(`Tool added`, {
                    position: toast.POSITION.TOP_CENTER
                });
            })
    };
    return (
        <div>
            <h2>Add tools</h2>
            <hr />
            <form className='OrderForm pe-3 ps-3 w-50' onSubmit={handleSubmit(onSubmit)}>
                <div className="row gap-2 mb-3">
                    {/* Tool Name */}
                    <input className='form-control col'
                        required type="text" placeholder="Tool name" {...register("name", { required: true })} />
                    <input className='form-control col'
                        required type="number" placeholder="Tool Price/unit" {...register("price", { required: true })} />
                </div>
                <div className="row gap-2 mb-3">
                    {/* photo URL */}
                    <input className='form-control col'
                        required type="url" placeholder="Image URL" {...register("img", { required: true })} />
                </div>
                <div className="row gap-2 mb-3">
                    <input className='form-control col'
                        required type="number" placeholder="Minimum Order Count" {...register("m_order", { required: true })} />
                    <input className='form-control col'
                        required type="number" placeholder="Available Quantity" {...register("a_quantity", { required: true })} />
                </div>
                <div className="row gap-2 mb-3">
                    <textarea className='form-control col' required placeholder="Tool Desc" {...register("desc", {})} />
                </div>
                <div className="form-group row gap-2 mb-3">
                    <input className='btn primaryBtn' value={"Add Tool"} type="submit" />
                </div>
            </form>
        </div>
    );
};

export default AddTools;