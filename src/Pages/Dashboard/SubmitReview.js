import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const SubmitReview = () => {

    const [user, loading, error] = useAuthState(auth);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [m_user, setM_user] = useState([]);
    const { isLoading, Fetch_error, data } = useQuery('repoData', () =>
        fetch(`http://localhost:5000/user/?email=${user.email}`).then(res =>
            res.json()
        ).then(data => setM_user(data))
    )

    const onSubmit = data => {
        const { photoUrl, name, rating, review_text } = data;
        const review = {
            name: name,
            photoUrl: photoUrl,
            rating: rating,
            review_text: review_text,
        }
        fetch(`http://localhost:5000/post-review`, {
            method: 'POST',
            body: JSON.stringify(review),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast.success(`${user.displayName}'s review added`, {
                    position: toast.POSITION.TOP_CENTER
                });
            })
    };

    if (isLoading) return (
        <div className="spinnerDiv">
            <Spinner className='spinner' animation="grow" />
        </div>
    );

    return (
        <div>
            <h2>Submit a review</h2>
            <form className='OrderForm pe-3 ps-3 w-50' onSubmit={handleSubmit(onSubmit)}>
                <div className="row gap-2 mb-3">
                    {/* photo URL */}
                    <input className='form-control col' readOnly
                        value={m_user[0] ? m_user[0]?.photoUrl : `https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png`} required type="url" placeholder="Photo URL" {...register("photoUrl", { required: true })} />
                </div>
                <div className="row gap-2 mb-3">
                    <input className='form-control col' value={user.displayName} required type="text" readOnly placeholder="Rating" {...register("name", { required: true })} />
                </div>
                <div className="row gap-2 mb-3">
                    <select className="form-select" required placeholder='Rating' {...register("rating", { required: true })}>
                        <option value="1" selected>Select Rating (1)</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className="row gap-2 mb-3">
                    <textarea className='form-control col' required placeholder="Review" {...register("review_text", {})} />
                </div>
                <div className="form-group row gap-2 mb-3">
                    <input className='btn btn-success' value={"Submit a Review!"} type="submit" />
                </div>
            </form>
        </div>
    );
};

export default SubmitReview;