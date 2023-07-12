import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CourseEvaluationDisplay = ({course}) => {
    const { _id: id, course_code, course_title, course_credit, course_type, semester } = course;
    const navigate = useNavigate();

    const handleNavigateToCourseSurvey = id => {
        navigate(`/dashboard/course-evaluation/${id}`);
    }
    return (
        <tr className='grid grid-cols-6 gap-4 hover:bg-neutral items-center justify-items-start text-start py-1'>
            <td>{course_title}</td>
            <td>{course_code}</td>
            <td>{course_credit}</td>
            <td>{course_type}</td>
            <td>{semester}</td>
            <td><button onClick={() => handleNavigateToCourseSurvey(id)} className='text-primary'>Attend</button></td>
        </tr>
    );
};

export default CourseEvaluationDisplay;