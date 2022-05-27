import { useEffect, useState } from "react";

const UserHook = user => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const email = user?.user?.email;
        const name = user?.user?.displayName;
        const c_user = {
            displayName: name,
            email: email,
            address: 'Not available',
            city: 'Not available',
            profession: 'Not available',
            contact_number: 'Not available',
            photoUrl: user?.photoURL,
        };
        if (email) {
            fetch(`http://localhost:5000/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(c_user)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('data inside useToken', data);
                })
        }

    }, [user]);
    return [token];
}

export default UserHook;