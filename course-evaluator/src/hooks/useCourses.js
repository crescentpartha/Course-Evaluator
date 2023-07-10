import { useEffect, useState } from "react";

const useCourses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/course`)
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [courses]);

    return [courses, setCourses];
}

export default useCourses;