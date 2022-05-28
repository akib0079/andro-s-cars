import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { Spinner } from 'react-bootstrap';

const Profile = () => {

    const [user, loading, error] = useAuthState(auth);
    const { register, handleSubmit, formState: { errors } } = useForm();


    const [m_user, setM_user] = useState([]);
    const { isLoading, Fetch_error, data, refetch } = useQuery('repoData', () =>
        fetch(`https://warm-dusk-57859.herokuapp.com/user/?email=${user.email}`).then(res =>
            res.json()
        ).then(data => setM_user(data))
    )


    if (isLoading) return (
        <div className="spinnerDiv">
            <Spinner className='spinner' animation="grow" />
        </div>
    );




    const onSubmit = data => {
        const { photoUrl, city, phoneNum, profession, address } = data;
        const url = `https://warm-dusk-57859.herokuapp.com/update-user/${user.email}`;

        const userDetails = {
            address: address,
            photoUrl: photoUrl,
            city: city,
            contact_number: phoneNum,
            profession: profession,
            displayName: user.displayName,
            email: user.email,
        }
        fetch(url, {
            method: 'PUT',
            body: JSON.stringify(userDetails),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast.success(`${user.displayName}'s Profile Updated.`, {
                    position: toast.POSITION.TOP_CENTER
                });
                refetch();
            })
    };
    console.log(errors);

    return (
        <div>
            <img src={m_user[0]?.photoUrl ? m_user[0]?.photoUrl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB0Q7C35IjUnEFF1XDxd0hb6MHNNmRb3N3Ig&usqp=CAU'} className="rounded-circle shadow-4 mb-3" style={{ width: '100px' }} alt="Avatar" />
            <h2>My Profile</h2>
            <hr />
            <h5 className='fw-normal'>Name : {user?.displayName}</h5>
            <h5 className='fw-normal'>Mailing address : {user?.email}</h5>
            <hr />
            <div className="d-flex align-items-center justify-content-between w-75">
                <h5 className='fw-normal'>Address : {m_user[0]?.address}</h5>
                <h5 className='fw-normal'>City : {m_user[0]?.city}</h5>
                <h5 className='fw-normal'>Phone Number : {m_user[0]?.contact_number}</h5>
                <h5 className='fw-normal'>Profession : {m_user[0]?.profession}</h5>
            </div>
            <h5 className='mt-3'>Update Profile</h5>
            <form className='OrderForm pe-3 ps-3' onSubmit={handleSubmit(onSubmit)}>
                <div className="row gap-2 mb-3">
                    {/* photo URL */}
                    <input className='form-control col' required type="url" placeholder="Photo URL" {...register("photoUrl", { required: true })} />

                    <input className='form-control col' required type="tel" placeholder="Phone/Contact number" {...register("phoneNum", { required: true, maxLength: 12 })} />
                </div>
                <div className="row gap-2 mb-3">
                    <input className='form-control col' required type="text" placeholder="City" {...register("city", { required: true })} />

                    <input className='form-control col' required type="text" placeholder="Profession" {...register("profession", { required: true })} />
                </div>
                <div className="row gap-2 mb-3">
                    <textarea className='form-control col' required placeholder="Address" {...register("address", {})} />
                </div>
                <div className="form-group row gap-2 mb-3">
                    <input className='btn primaryBtn' value={"Update Profile"} type="submit" />
                </div>
            </form>
        </div>
    );
};

export default Profile;