import { useEffect, useState } from "react";

const useFindUserRoleAdmin = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/user/role?role=admin`)
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [users]);

    return [users, setUsers];
}

export default useFindUserRoleAdmin;