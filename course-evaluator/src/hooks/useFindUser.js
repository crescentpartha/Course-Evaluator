import { useEffect, useState } from 'react';

const useFindUser = user => {
    const [regUser, setRegUser] = useState(false);
    const [userLoading, setUserLoading] = useState(true);
    useEffect(() => {
        // console.log(user);
        const email = user?.email;
        if (email) {
            fetch(`http://localhost:5000/user/admin?email=${email}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json'
                },
            })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setRegUser(data);
                setUserLoading(false);
            })
        }
    }, [user]);

    return [regUser, userLoading];
}

export default useFindUser;