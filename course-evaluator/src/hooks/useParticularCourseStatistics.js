import { useEffect, useState } from "react";

const useParticularCourseStatistics = ({courseCode, courseTitle}) => {
    const [statistics, setStatistics] = useState([]);
    // console.log(courseCode, courseTitle);

    const url = `http://localhost:5000/response_statistics?course_title=${courseTitle}&course_code=${courseCode}`;
    // console.log(url);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setStatistics(data));
    }, [url]);

    return [statistics, setStatistics];
}

export default useParticularCourseStatistics;