import { useEffect, useState } from 'react';

const useCreateUserToken = user => {
    const [token] = useState([]);
    
    useEffect(() => {
        /* Save Registered user information in the database */
        // console.log('user inside useCreateUserToken', user);
        // console.log('user inside useCreateUserToken', user[0], user[1], user.length);

        const email = user[0]?.user?.email;
        const name = user[0]?.user?.displayName;
        const role = user[1]?.role;
        const currentUser = { 
            email: email,
            name: name,
            role: role,
            // degree: null,
            // department: null,
            // credit: null,
            // image: null,
            // programme: null,
            // registration_no: null,
            // registration_date: null,
            // semester: null,
            // session: null,
            // type: null,
            // usn: null
        };
        // console.log(email, name, role);
        if (email) {
            fetch(`http://localhost:5000/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
            .then(res => res.json())
            .then(data => {
                // console.log('data inside useCreateUserToken', data);
            });
        }
    }, [user]);
    return [token];
}

export default useCreateUserToken;