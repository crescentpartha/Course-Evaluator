import { useEffect, useState } from "react";

const useFindParticularUser = (userDetailsId) => {
    const [user, setUser] = useState([]);
    // console.log(userDetailsId);

    const url = `http://localhost:5000/user/${userDetailsId}`;
    // console.log(url);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data));
    }, [url]);

    return [user, setUser];
}

export default useFindParticularUser;