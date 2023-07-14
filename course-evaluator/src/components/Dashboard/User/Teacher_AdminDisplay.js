import React from 'react';
import { Link } from 'react-router-dom';

const Teacher_AdminDisplay = ({ user }) => {
    const { image, name, registration_no, designation, role } = user;
    return (
        <tr className='grid grid-cols-7 gap-4 hover:bg-neutral items-center justify-items-start text-start py-1'>
            {
                // image === null ?
                (typeof image === 'undefined') ?
                    <div className="text-center">
                        <div className="avatar">
                            <div className="w-16 sm:w-20 rounded-xl bg-accent-content">
                                <div className='w-full h-full flex flex-row justify-center items-center'>
                                    {
                                        (typeof name === "undefined")
                                            ? <span className="text-3xl text-white capitalize">+</span>
                                            : <span className="text-3xl text-white capitalize">{name[0]}</span>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div className='text-center'>
                        <div className="avatar">
                            <div className="w-16 sm:w-20 rounded-xl">
                                <img src={image} alt={name} />
                            </div>
                        </div>
                    </div>
            }
            <td className='capitalize'>{name}</td>
            {
                (typeof registration_no === "undefined")
                    ? <td className='capitalize'>None</td>
                    : <td className='capitalize'>{registration_no}</td>
            }
            {
                (typeof designation === "undefined")
                    ? <td className='capitalize'>None</td>
                    : <td className='capitalize'>{designation}</td>
            }
            <td className='capitalize'>{role}</td>
            <td><Link className='text-primary'>View</Link></td>
            <td><Link className='text-primary'>Edit</Link></td>
        </tr>
    );
};

export default Teacher_AdminDisplay;