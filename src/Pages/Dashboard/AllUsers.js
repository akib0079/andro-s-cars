import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';

const AllUsers = () => {

    const [user, loading, error] = useAuthState(auth);
    const [admin] = useAdmin(user);

    const [users, setUsers] = useState([]);
    const { isLoading, Fetch_error, data, refetch } = useQuery('repoData', () =>
        fetch(`http://localhost:5000/users`).then(res =>
            res.json()
        ).then(data => setUsers(data))
    )

    const makeAdmin = (email) => {
        fetch(`http://localhost:5000/admin/${email}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                refetch();
                toast.success(`Successfully made an admin`);
            })
    }

    if (isLoading) return (
        <div className="spinnerDiv">
            <Spinner className='spinner' animation="grow" />
        </div>
    );




    return (
        <div>
            <h2>All Users : {users.length}</h2>

            <table className="table table-hover table-responsive">
                <thead>
                    <tr>
                        <th scope="col">Serial</th>
                        <th scope="col">Email</th>
                        <th scope="col">Name</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => <tr key={user._id}>
                            <th scope="row">{index + 1}</th>
                            <td>{user.email}</td>
                            <td>{user?.displayName}</td>
                            <td>
                                {user.role === 'admin' ?
                                    <p className='badge primaryBdg'>Already an admin</p> :
                                    <button onClick={() => makeAdmin(user.email)} className='btn-outline-success btn'>Make Admin</button>
                                }
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllUsers;