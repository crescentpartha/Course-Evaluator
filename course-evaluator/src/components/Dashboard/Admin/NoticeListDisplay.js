import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const NoticeListDisplay = ({ notice }) => {
    const { _id: id, date, description, image, time, title, type } = notice;

    const handleDelete = id => {
        // console.log(id);
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            // console.log('Deleting notice with id =', id);

            // DELETE a particular notice data from client-side and send request to the server-side
            const url = `http://localhost:5000/notice/${id}`;
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
            toast.success('Successfully delete a notice item.');
        }
        else {
            toast.success('Thanks for your consideration!');
        }
    }
    return (
        <tr className='grid grid-cols-8 gap-4 hover:bg-neutral items-center justify-items-start text-start py-1'>
            <div className="avatar">
                <div className="w-16 sm:w-20 rounded-xl">
                    <img src={image} alt={title} />
                </div>
            </div>
            <td title={title}>{title.length > 40 ? title.slice(0, 40) + "..." : title}</td>
            <td>{description.length > 60 ? description.slice(0, 60) + "..." : description}</td>
            <td>{date}</td>
            <td>{time}</td>
            <td>{type}</td>
            <td><Link className='text-primary'>Edit</Link></td>
            <td><button onClick={() => handleDelete(id)} className='text-error'>Delete</button></td>
        </tr>
    );
};

export default NoticeListDisplay;