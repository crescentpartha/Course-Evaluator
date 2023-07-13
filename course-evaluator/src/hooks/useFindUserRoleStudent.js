import { useEffect, useState } from "react";

const useFindUserRoleStudent = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/user/role?role=student`)
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [users]);

    return [users, setUsers];
}

export default useFindUserRoleStudent;