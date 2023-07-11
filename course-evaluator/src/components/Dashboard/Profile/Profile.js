import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import useFindUser from '../../../hooks/useFindUser';

const Profile = () => {
    const [user] = useAuthState(auth);
    const [regUser] = useFindUser(user);
    // console.log(regUser);
    const { degree, department, email, image, name, programme, credit, registration_no, role, semester, session, type, usn } = regUser;

    return (
        <div>
            <h2 className="text-3xl font-medium font-lobster mb-2 text-accent text-center uppercase">Your Profile</h2>
            <div className='shadow-sm sm:p-10 px-2 py-10 rounded bg-accent-content'>
                {
                    image === null ?
                        <div className="text-center">
                            <div className="avatar online placeholder">
                                <div className="bg-neutral-focus text-neutral-content rounded-full w-24">
                                    <span className="text-3xl">+</span>
                                </div>
                            </div>
                        </div>
                        :
                        <div className='text-center'>
                            <div className="avatar online">
                                <div className="w-24 rounded-full">
                                    <img src={image} alt="Logo" />
                                </div>
                            </div>
                        </div>
                }

                {/* // <div className='text-center'>
                //     <div className="avatar online">
                //         <div className="w-24 rounded-full">
                //             <img src={image} alt="Logo" />
                //         </div>
                //     </div>
                // </div> */}
                {/* <div className="text-center">
                <div className="avatar online placeholder">
                    <div className="bg-neutral-focus text-neutral-content rounded-full w-24">
                        <span className="text-xl">JO</span>
                    </div>
                </div>
            </div> */}
                <div className='text-center'>
                    <div className='font-opensans text-medium'>
                        <p>Shahjalal University of Science and Technology</p>
                        <p>{department !== null ? department : "Department: None"}</p>
                        <p>{degree !== null ? degree : "Degree: None"}</p>
                    </div>
                    <div className='flex flex-col sm:flex-row items-center justify-center gap-8 p-5 font-lato'>
                        <div className='text-start'>
                            <p className='font-semibold'>Name: <span className='font-normal italic'>{name !== null ? name : "None"}</span></p>
                            <p className='font-semibold'>Email: <span className='font-normal italic'>{email !== null ? email : "None"}</span></p>
                            <p className='font-semibold'>Registration No.: <span className='font-normal italic'>{registration_no !== null ? registration_no : "None"}</span></p>
                            {/* <p className='font-semibold'>Registration Date: <span className='font-normal italic'>None</span></p> */}
                            <p className='font-semibold'>Programme: <span className='font-normal italic'>{programme !== null ? programme : "None"}</span></p>
                            <p className='font-semibold'>Semester: <span className='font-normal italic'>{semester !== null ? semester : "None"}</span></p>
                        </div>
                        <div className='text-start'>
                            <p className='font-semibold'>Session: <span className='font-normal italic'>{session !== null ? session : "None"}</span></p>
                            <p className='font-semibold'>USN: <span className='font-normal italic'>{usn !== null ? usn : "None"}</span></p>
                            <p className='font-semibold'>Credit: <span className='font-normal italic'>{credit !== null ? credit : "None"}</span></p>
                            <p className='font-semibold'>Role: <span className='font-normal italic'>{role !== null ? role : "None"}</span></p>
                            <p className='font-semibold'>Type: <span className='font-normal italic'>{type !== null ? type : "None"}</span></p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Profile;