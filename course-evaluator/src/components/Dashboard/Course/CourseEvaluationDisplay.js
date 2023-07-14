import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import useFindUser from '../../../hooks/useFindUser';

const CourseEvaluationDisplay = ({ course }) => {
    const { _id: id, course_code, course_title, course_credit, course_type, semester } = course;
    const [title, setTitle] = useState('');
    const [code, setCode] = useState('');
    const [user] = useAuthState(auth);
    const [regUser] = useFindUser(user);
    const { completedCourse } = regUser;

    useEffect(() => {
        completedCourse?.forEach(data => {
            // console.log(data);
            if (data?.course_title === course_title) setTitle(course_title);
            if (data?.course_code === course_code) setCode(course_code);
        })
    }, [course_title, course_code, completedCourse]);
    // console.log(title, code);

    // console.log(completedCourse);
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
            {
                title && code 
                ? <td><button className='text-success'>Submitted</button></td>
                : <td><button onClick={() => handleNavigateToCourseSurvey(id)} className='text-primary'>Attend</button></td>
            }
        </tr>
    );
};

export default CourseEvaluationDisplay;