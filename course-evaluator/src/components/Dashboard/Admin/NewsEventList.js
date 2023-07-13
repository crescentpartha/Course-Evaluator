import React from 'react';
import useNewsEvents from '../../../hooks/useNewsEvents';
import NewsEventListDisplay from './NewsEventListDisplay';

const NewsEventList = () => {
    const [newsEvents] = useNewsEvents();
    // console.log(newsEvents);
    return (
        <div>
            <h2 className="text-3xl font-medium font-lobster mb-2 text-accent text-center uppercase">List of News and Events</h2>

            {/* Display all notice data using get notice API */}
            <div className="overflow-x-auto">
                <table className="table table-xs table-pin-cols">
                    <thead>
                        <tr className='grid grid-cols-8 gap-4 bg-accent text-info items-center justify-items-start text-start py-1'>
                            <td>Image</td>
                            <td>Title</td>
                            <td>Description</td>
                            <td>Date</td>
                            <td>Time</td>
                            <td>Reading Time</td>
                            <td>Edit</td>
                            <td>Delete</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            newsEvents.map(newsEvent => <NewsEventListDisplay
                                key={newsEvent._id}
                                newsEvent={newsEvent}
                            ></NewsEventListDisplay>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default NewsEventList;