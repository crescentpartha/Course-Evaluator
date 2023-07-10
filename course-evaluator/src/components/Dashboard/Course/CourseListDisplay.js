import React from 'react';

const CourseListDisplay = ({ course }) => {
    const { course_code, course_title, course_credit, course_type, semester } = course;

    return (
        <tr className='grid grid-cols-7 gap-4 hover:bg-accent hover:text-info items-center justify-items-start text-start py-1'>
            <td>{course_title}</td>
            <td>{course_code}</td>
            <td>{course_credit}</td>
            <td>{course_type}</td>
            <td>{semester}</td>
            <td>Edit</td>
            <td>Delete</td>
        </tr>
    );
};

export default CourseListDisplay;