import { useEffect, useState } from "react";

const useResponses = () => {
    const [responses, setResponses] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/response`)
            .then(res => res.json())
            .then(data => setResponses(data));
    }, [responses]);

    return [responses, setResponses];
}

export default useResponses;