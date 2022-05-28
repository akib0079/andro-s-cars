import { useEffect, useState } from "react"

const useAdmin = user => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);
    useEffect(() => {
        const email = user.email;
        fetch(`http://localhost:5000/user/?email=${email}`)
            .then(res => res.json())
            .then(data => {
                if (data[0].role === "admin") {
                    setAdmin(true);
                    setAdminLoading(false);
                }
            })
    }, [user])

    return [admin, adminLoading]
}

export default useAdmin;