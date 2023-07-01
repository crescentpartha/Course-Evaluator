import React from 'react';

const Profile = () => {
    return (
        <div>
            <h2 className="text-3xl font-medium font-lobster mb-2 text-accent text-center uppercase">Your Profile</h2>
            <div className='shadow-sm sm:p-10 px-2 py-10 rounded bg-accent-content'>
                <div className='text-center'>
                    <div className="avatar online">
                        <div className="w-24 rounded-full">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Logo" />
                        </div>
                    </div>
                </div>
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
                        <p>Institute of Information and Communication Technology</p>
                        <p>Masters in Information Technology</p>
                    </div>
                    <div className='flex flex-col sm:flex-row items-center justify-center gap-8 p-5 font-lato'>
                        <div className='text-start'>
                            <p className='font-semibold'>Name: <span className='font-normal italic'>Taylor Swift</span></p>
                            <p className='font-semibold'>Email: <span className='font-normal italic'>taylorswift406@gmail.com</span></p>
                            <p className='font-semibold'>Registration No.: <span className='font-normal italic'>1234123412</span></p>
                            <p className='font-semibold'>Registration Date: <span className='font-normal italic'>02 July, 2023</span></p>
                            <p className='font-semibold'>Semester: <span className='font-normal italic'>3rd Semester</span></p>
                        </div>
                        <div className='text-start'>
                            <p className='font-semibold'>Session: <span className='font-normal italic'>2021 - 2022</span></p>
                            <p className='font-semibold'>USN: <span className='font-normal italic'>January - June</span></p>
                            <p className='font-semibold'>Credit: <span className='font-normal italic'>24</span></p>
                            <p className='font-semibold'>Role: <span className='font-normal italic'>Student</span></p>
                            <p className='font-semibold'>Type: <span className='font-normal italic'>Running</span></p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Profile;