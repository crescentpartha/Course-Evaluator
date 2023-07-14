import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const CourseListDisplay = ({ course }) => {
    const { _id: id, course_code, course_title, course_credit, course_type, semester } = course;

    const handleDelete = id => {
        // console.log(id);
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            // console.log('Deleting course with id =', id);

            // DELETE a particular course data from client-side and send request to the server-side
            const url = `http://localhost:5000/course/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    // console.log(data?.deletedCount);
                    if (data.deletedCount > 0) {
                        // console.log('Deleted');
                    }
                });
            toast.success('Successfully delete a course data.');
        }
        else {
            toast.success('Thanks for your consideration!');
        }
    }

    return (
        <tr className='grid grid-cols-7 gap-4 hover:bg-accent hover:text-info items-center justify-items-start text-start py-1'>
            <td>{course_title}</td>
            <td>{course_code}</td>
            <td>{course_credit}</td>
            <td>{course_type}</td>
            <td>{semester}</td>
            <td><Link className='text-primary'>Edit</Link></td>
            <td><button onClick={() => handleDelete(id)} className='text-error'>Delete</button></td>
        </tr>
    );
};

export default CourseListDisplay;