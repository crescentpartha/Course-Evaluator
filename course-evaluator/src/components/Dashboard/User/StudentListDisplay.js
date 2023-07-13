import React from 'react';
import { Link } from 'react-router-dom';

const StudentListDisplay = ({ user }) => {
    const { image, name, registration_no, programme, degree } = user;
    return (
        <tr className='grid grid-cols-6 gap-4 hover:bg-neutral items-center justify-items-start text-start py-1'>
            <div className="avatar">
                <div className="w-16 sm:w-20 rounded-xl">
                    <img src={image} alt={name} />
                </div>
            </div>
            <td className='capitalize'>{name}</td>
            <td>{registration_no}</td>
            <td>{programme}</td>
            <td>{degree}</td>
            <td><Link className='text-primary'>View</Link></td>
        </tr>
    );
};

export default StudentListDisplay;