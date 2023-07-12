import { useEffect, useState } from "react";

const useNotices = () => {
    const [notices, setNotices] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/notice`)
            .then(res => res.json())
            .then(data => setNotices(data));
    }, [notices]);

    return [notices, setNotices];
}

export default useNotices;