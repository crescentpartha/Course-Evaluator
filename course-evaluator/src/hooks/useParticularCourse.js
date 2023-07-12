import { useEffect, useState } from "react";

const useParticularCourse = (courseSurveyId) => {
    const [course, setCourse] = useState([]);
    // console.log(courseSurveyId);

    const url = `http://localhost:5000/course/${courseSurveyId}`;
    // console.log(url);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setCourse(data));
    }, [url]);

    return [course, setCourse];
}

export default useParticularCourse;