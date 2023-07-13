import React from 'react';
import StudentListDisplay from './StudentListDisplay';
import useFindUserRoleStudent from '../../../hooks/useFindUserRoleStudent';

const StudentList = () => {
    const [users] = useFindUserRoleStudent();
    // console.log(users);
    return (
        <div>
            <h2 className="text-3xl font-medium font-lobster mb-2 text-accent text-center uppercase">Student List</h2>

            {/* Display all notice data using get notice API */}
            <div className="overflow-x-auto">
                <table className="table table-xs table-pin-cols">
                    <thead>
                        <tr className='grid grid-cols-6 gap-4 bg-accent text-info items-center justify-items-start text-start py-1'>
                            <td>Image</td>
                            <td>Name</td>
                            <td>ID</td>
                            <td>Programme</td>
                            <td>Degree</td>
                            <td>Details</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <StudentListDisplay
                                key={user._id}
                                user={user}
                            ></StudentListDisplay>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default StudentList;