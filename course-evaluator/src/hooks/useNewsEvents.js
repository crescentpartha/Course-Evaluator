import { useEffect, useState } from "react";

const useNewsEvents = () => {
    const [newsEvents, setNewsEvents] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/news_event`)
            .then(res => res.json())
            .then(data => setNewsEvents(data));
    }, [newsEvents]);

    return [newsEvents, setNewsEvents];
}

export default useNewsEvents;