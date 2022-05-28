import { useEffect, useState } from "react"

const useAdmin = user => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);
    useEffect(() => {
        const email = user.email;
        fetch(`https://warm-dusk-57859.herokuapp.com/user/?email=${email}`)
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