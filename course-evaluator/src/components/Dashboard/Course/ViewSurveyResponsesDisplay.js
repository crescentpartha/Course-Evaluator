import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import useFindAdmin from '../../../hooks/useFindAdmin';

const ViewSurveyResponsesDisplay = ({ response }) => {
    const { _id: id, courseData } = response;
    const { name, image, registration_no, course_title, course_code, semester } = courseData;
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const [admin] = useFindAdmin(user);

    const handleNavigateToResponseDataDetails = id => {
        navigate(`${id}`);
    }

    const handleDelete = id => {
        // console.log(id);
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            // console.log('Deleting survey response with id =', id);

            // DELETE a particular survey response data from client-side and send request to the server-side
            const url = `http://localhost:5000/response/${id}`;
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
            toast.success('Successfully delete a survey response data.');
        }
        else {
            toast.success('Thanks for your consideration!');
        }
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
            {
                admin === 'teacher'
                ? <td><button onClick={() => toast.success('Only allowed for admin user!')} className='text-error'>Not Allowed</button></td>
                : <td><button onClick={() => handleDelete(id)} className='text-error'>Delete</button></td>
            }
        </tr>
    );
};

export default ViewSurveyResponsesDisplay;