import React from 'react';
import useFindUserRoleAdmin from '../../../hooks/useFindUserRoleAdmin';
import AdminListDisplay from './Teacher_AdminDisplay';

const SuperAdminList = () => {
    const [users] = useFindUserRoleAdmin();
    // console.log(users);
    return (
        <div>
            <h2 className="text-3xl font-medium font-lobster mb-2 text-accent text-center uppercase">Super Admin List</h2>

            {/* Display all notice data using get notice API */}
            <div className="overflow-x-auto">
                <table className="table table-xs table-pin-cols">
                    <thead>
                        <tr className='grid grid-cols-6 gap-4 bg-accent text-info items-center justify-items-start text-start py-1'>
                            <td>Image</td>
                            <td>Name</td>
                            <td>ID</td>
                            <td>Role</td>
                            <td>Modify Role</td>
                            <td>Delete</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <AdminListDisplay
                                key={user._id}
                                user={user}
                            ></AdminListDisplay>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SuperAdminList;