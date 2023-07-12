import { useEffect, useState } from "react";

const useParticularResponse = (responseDataId) => {
    const [response, setResponse] = useState([]);
    // console.log(responseDataId);

    const url = `http://localhost:5000/response/${responseDataId}`;
    // console.log(url);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setResponse(data));
    }, [url]);

    return [response, setResponse];
}

export default useParticularResponse;