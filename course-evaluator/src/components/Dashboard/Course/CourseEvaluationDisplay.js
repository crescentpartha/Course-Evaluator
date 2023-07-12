import React from 'react';
import { Link } from 'react-router-dom';

const CourseEvaluationDisplay = ({course}) => {
    const { course_code, course_title, course_credit, course_type, semester } = course;
    return (
        <tr className='grid grid-cols-6 gap-4 hover:bg-neutral items-center justify-items-start text-start py-1'>
            <td>{course_title}</td>
            <td>{course_code}</td>
            <td>{course_credit}</td>
            <td>{course_type}</td>
            <td>{semester}</td>
            <td><Link className='text-primary'>Attend</Link></td>
        </tr>
    );
};

export default CourseEvaluationDisplay;