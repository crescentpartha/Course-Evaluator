import React from 'react';
import { Link } from 'react-router-dom';

const CourseListDisplay = ({ course }) => {
    const { course_code, course_title, course_credit, course_type, semester } = course;

    return (
        <tr className='grid grid-cols-7 gap-4 hover:bg-accent hover:text-info items-center justify-items-start text-start py-1'>
            <td>{course_title}</td>
            <td>{course_code}</td>
            <td>{course_credit}</td>
            <td>{course_type}</td>
            <td>{semester}</td>
            <td><Link className='text-primary'>Edit</Link></td>
            <td><Link className='text-error'>Delete</Link></td>
        </tr>
    );
};

export default CourseListDisplay;