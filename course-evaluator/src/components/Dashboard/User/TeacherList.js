import React from 'react';
import useFindUserRoleTeacher from '../../../hooks/useFindUserRoleTeacher';
import TeacherListDisplay from './TeacherListDisplay';

const TeacherList = () => {
    const [users] = useFindUserRoleTeacher();
    // console.log(users);
    return (
        <div>
            <h2 className="text-3xl font-medium font-lobster mb-2 text-accent text-center uppercase">Teacher List</h2>

            {/* Display all notice data using get notice API */}
            <div className="overflow-x-auto">
                <table className="table table-xs table-pin-cols">
                    <thead>
                        <tr className='grid grid-cols-7 gap-4 bg-accent text-info items-center justify-items-start text-start uppercase py-1'>
                            <td>Image</td>
                            <td>Name</td>
                            <td>ID</td>
                            <td>Designation</td>
                            <td>Role</td>
                            <td>Details</td>
                            <td>Modify Role</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <TeacherListDisplay
                                key={user._id}
                                user={user}
                            ></TeacherListDisplay>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TeacherList;