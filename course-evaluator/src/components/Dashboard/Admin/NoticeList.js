import React from 'react';
import useNotices from '../../../hooks/useNotices';
import NoticeListDisplay from './NoticeListDisplay';

const NoticeList = () => {
    const [notices] = useNotices();
    // console.log(notices);
    return (
        <div>
            <h2 className="text-3xl font-medium font-lobster mb-2 text-accent text-center uppercase">List of Notices</h2>

            {/* Display all notice data using get notice API */}
            <div className="overflow-x-auto">
                <table className="table table-xs table-pin-cols">
                    <thead>
                        <tr className='grid grid-cols-8 gap-4 bg-accent text-info items-center justify-items-start text-start uppercase py-1'>
                            <td>Image</td>
                            <td>Title</td>
                            <td>Description</td>
                            <td>Date</td>
                            <td>Time</td>
                            <td>Type</td>
                            <td>Edit</td>
                            <td>Delete</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            notices.map(notice => <NoticeListDisplay
                                key={notice._id}
                                notice={notice}
                            ></NoticeListDisplay>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default NoticeList;