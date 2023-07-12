import React from 'react';
import { useNavigate } from 'react-router-dom';

const ViewSurveyResponsesDisplay = ({ response }) => {
    const { _id: id, courseData } = response;
    const { name, image, registration_no, course_title, course_code, semester } = courseData;
    const navigate = useNavigate();
    const handleNavigateToResponseDataDetails = id => {
        navigate(`${id}`);
    }
    return (
        <tr className='grid grid-cols-7 gap-4 hover:bg-neutral items-center justify-items-start text-start py-1'>
            <div className="avatar">
                <div className="w-16 sm:w-20 rounded-xl">
                    <img src={image} alt={name} />
                </div>
            </div>
            <td>{registration_no}</td>
            <td>{course_title}</td>
            <td>{course_code}</td>
            <td>{semester}</td>
            <td><button onClick={() => handleNavigateToResponseDataDetails(id)} className='text-primary'>View</button></td>
            <td><button className='text-error'>Delete</button></td>
        </tr>
    );
};

export default ViewSurveyResponsesDisplay;