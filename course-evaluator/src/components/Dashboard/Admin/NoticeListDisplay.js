import React from 'react';
import { Link } from 'react-router-dom';

const NoticeListDisplay = ({ notice }) => {
    const { date, description, image, time, title, type } = notice;
    return (
        <tr className='grid grid-cols-8 gap-4 hover:bg-neutral items-center justify-items-start text-start py-1'>
            <div className="avatar">
                <div className="w-16 sm:w-20 rounded-xl">
                    <img src={image} alt={title} />
                </div>
            </div>
            <td>{title}</td>
            <td title={description}>{description.length > 60 ? description.slice(0, 60) + "..." : description}</td>
            <td>{date}</td>
            <td>{time}</td>
            <td>{type}</td>
            <td><Link className='text-primary'>Edit</Link></td>
            <td><Link className='text-error'>Delete</Link></td>
        </tr>
    );
};

export default NoticeListDisplay;