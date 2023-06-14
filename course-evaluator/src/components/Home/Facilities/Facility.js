import React from 'react';
import { FaPeopleCarry, FaBook, FaRegMoneyBillAlt } from 'react-icons/fa';
import { BsWifi } from 'react-icons/bs';
import { ImLab } from 'react-icons/im';
import { SiGoogleclassroom } from 'react-icons/si';

const Facility = ({ facility }) => {
    const { icon, title, description } = facility;
    // console.log(icon);
    return (
        <div className='px-8 py-10 shadow-sm bg-info'>
            <div>
                {
                    icon === "wifi" && <span><BsWifi className='text-5xl text-accent mx-auto' /></span>
                }
                {
                    icon === "lab" && <span><ImLab className='text-5xl text-accent mx-auto' /></span>
                }
                {
                    icon === "people" && <span><FaPeopleCarry className='text-5xl text-accent mx-auto' /></span>
                }
                {
                    icon === "book" && <span><FaBook className='text-5xl text-accent mx-auto' /></span>
                }
                {
                    icon === "class" && <span><SiGoogleclassroom className='text-5xl text-accent mx-auto' /></span>
                }
                {
                    icon === "money" && <span><FaRegMoneyBillAlt className='text-5xl text-accent mx-auto' /></span>
                }
            </div>
            <h2 className='text-xl font-opensans font-medium py-2'>{title}</h2>
            <p className='text-sm'>{description}</p>
        </div>
    );
};

export default Facility;