import React from 'react';
// import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ModifyRoleModal = ({ userData }) => {
    const { _id: id, role } = userData;
    // const navigate = useNavigate();
    // console.log(userData);

    const handleModifyRoleAsAdmin = () => {
        // Update role as a admin
        const userAdminRole = {};
        userAdminRole.role = 'admin';
        // console.log(userAdminRole);

        fetch(`http://localhost:5000/role_user/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userAdminRole)
        })
            .then(res => res.json())
            .then(data => {
                // console.log('success', data);
                // navigate('/dashboard/super-admin-list');
                toast.success('Successfully modified role!');
            });


    }

    const handleModifyRoleAsTeacher = () => {
        // Update role as a teacher
        const userTeacherRole = {};
        userTeacherRole.role = 'teacher';
        // console.log(userTeacherRole);

        fetch(`http://localhost:5000/role_user/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userTeacherRole)
        })
            .then(res => res.json())
            .then(data => {
                // console.log('success', data);
                // navigate('/dashboard/teacher-list');
                toast.success('Successfully modified role!');
            });
    }
    return (
        <div>
            <input type="checkbox" id="delete-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box bg-accent-content">
                    {/* The button to close modal */}
                    <label
                        htmlFor="delete-modal"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                    >✕</label>

                    <h3 className="font-bold text-lg mb-3 text-secondary">Are you sure to modify user role?</h3>
                    {/* Delete Confirmation */}
                    <div className='grid grid-cols-2 gap-2 justify-items-center align-items-center mt-5'>
                        <div className='flex flex-row flex-wrap gap-2 justify-center items-center'>
                            <div className="modal-action m-0">
                                <label
                                    htmlFor="delete-modal"
                                    className={`btn btn-sm btn-accent ${role === 'admin' && 'btn-disabled opacity-30'}`}
                                    onClick={() => handleModifyRoleAsAdmin()}
                                >Admin</label>
                            </div>
                            <div className="modal-action m-0">
                                <label
                                    htmlFor="delete-modal"
                                    className={`btn btn-sm btn-accent ${role === 'teacher' && 'btn-disabled opacity-30'}`}
                                    onClick={() => handleModifyRoleAsTeacher()}
                                >Teacher</label>
                            </div>
                        </div>
                        <div className="modal-action m-0">
                            <label
                                htmlFor="delete-modal"
                                className="btn btn-sm btn-accent"
                            >Cancel</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModifyRoleModal;