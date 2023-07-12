import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import useParticularCourse from '../../../hooks/useParticularCourse';
import useFindUser from '../../../hooks/useFindUser';
import auth from '../../../firebase.init';

const CourseEvaluationSurvey = () => {
    const { courseSurveyId } = useParams();
    // console.log(courseSurveyId);
    const [course] = useParticularCourse(courseSurveyId);
    // console.log(course);
    const { department, degree, semester, course_title, course_code, course_credit } = course;
    const [user] = useAuthState(auth);
    const [regUser] = useFindUser(user);
    // console.log(regUser);
    const { session, usn } = regUser;
    return (
        <div>
            <h2 className="text-3xl font-medium font-lobster mb-2 text-accent text-center uppercase">Course Evaluation Survey</h2>

            <div className='text-center'>
                <p className='font-semibold text-success'>{department}</p>
                <p className='font-semibold text-success'>{degree}</p>
                <div className='flex flex-row flex-wrap justify-center items-center'>
                    <p className='font-semibold px-2'>Semester: <span className='font-normal italic'>{semester}</span></p>
                    <p className='font-semibold px-2'>Session: <span className='font-normal italic'>{session}</span></p>
                    <p className='font-semibold px-2'>USN: <span className='font-normal italic'>{usn}</span></p>
                </div>
                <p className='font-semibold'>Course Title: <span className='font-normal italic'>{course_title}</span></p>
                <div className='flex flex-row flex-wrap justify-center items-center'>
                    <p className='font-semibold px-2'>Course Code: <span className='font-normal italic'>{course_code}</span></p>
                    <p className='font-semibold px-2'>Course Credit: <span className='font-normal italic'>{course_credit}</span></p>
                </div>
            </div>
        </div>
    );
};

export default CourseEvaluationSurvey;