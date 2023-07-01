import React from 'react';
import { useForm } from 'react-hook-form';

const UpdateProfile = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className=''>
            <h2 className="text-3xl font-medium font-lobster
             mb-2 text-accent text-center uppercase">Update Your Profile</h2>
            <form className='rounded font-opensans p-5 card w-96 bg-accent-content shadow-md mx-auto' onSubmit={handleSubmit(onSubmit)}>
                <h2 className='text-2xl font-medium text-accent text-center'>Profile Info</h2>

                {/* Name */}
                <div className='text-start'>
                    <label className='font-semibold pb-2 text-secondary' htmlFor="">Name</label> <br />
                    <input
                        style={{ border: '1px solid #d6d6d6' }}
                        className='block w-full px-2 py-1 rounded'
                        placeholder='Name'
                        type="text"
                        {...register("name", {
                            required: "Name is required",
                            maxLength: {
                                value: 50,
                                message: "Max length is 50 character long"
                            },
                            pattern: {
                                value: /^[A-Z]+((\s)?([A-Za-z])+)*$/,
                                message: 'Name is invalid'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-error">{errors.name?.message}</span>}
                        {errors.name?.type === 'maxLength' && <span className="label-text-alt text-error">{errors.name?.message}</span>}
                        {errors.name?.type === 'pattern' && <span className="label-text-alt text-error">{errors.name?.message}</span>}
                    </label>
                </div>

                {/* Email */}
                <div className="text-start">
                    <label className='font-semibold pb-2 text-secondary' htmlFor="">Email</label>
                    <input
                        style={{ border: '1px solid #d6d6d6' }}
                        className='block w-full px-2 py-1 rounded'
                        type="email"
                        placeholder="Email Address"
                        {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is Required'
                            },
                            pattern: {
                                value: /^[a-z0-9+_.-]+@[a-z]+\.[a-z]{3}$/,
                                message: 'Provide a valid Email'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-error">{errors.email?.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-error">{errors.email?.message}</span>}
                    </label>
                </div>

                {/* Registration Number */}
                <div className="text-start">
                    <label className='font-semibold pb-2 text-secondary' htmlFor="">Registration Number</label>
                    <input
                        style={{ border: '1px solid #d6d6d6' }}
                        className='block w-full px-2 py-1 rounded'
                        type="password"
                        placeholder="Registration Number"
                        {...register("registration_no", {
                            required: {
                                value: true,
                                message: 'Registration number is Required'
                            },
                            minLength: {
                                value: 10,
                                message: 'Must be 10 characters long'
                            },
                            maxLength: {
                                value: 10,
                                message: 'Must be 10 characters long'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.registration_no?.type === 'required' && <span className="label-text-alt text-error">{errors.registration_no?.message}</span>}
                        {errors.registration_no?.type === 'minLength' && <span className="label-text-alt text-error">{errors.registration_no?.message}</span>}
                        {errors.registration_no?.type === 'maxLength' && <span className="label-text-alt text-error">{errors.registration_no?.message}</span>}
                    </label>
                </div>

                {/* Department */}
                <div className='text-start mb-3'>
                <label className='font-semibold pb-2 text-secondary' htmlFor="">Department</label>
                    <select {...register("department")} className='d-block w-full px-2 py-1 rounded' style={{ border: '1px solid #d6d6d6' }}>
                        <option value="MIT">MIT</option>
                        <option value="SWE">SWE</option>
                        <option value="PGD">PGD</option>
                    </select>
                </div>

                {/* Degree */}
                <div className='text-start mb-3'>
                <label className='font-semibold pb-2 text-secondary' htmlFor="">Degree</label>
                    <select {...register("degree")} className='d-block w-full px-2 py-1 rounded' style={{ border: '1px solid #d6d6d6' }}>
                        <option value="Masters">Masters</option>
                        <option value="Bachelors">Bachelors</option>
                        <option value="Diploma">Diploma</option>
                    </select>
                </div>

                {/* Semester */}
                <div className='text-start mb-3'>
                <label className='font-semibold pb-2 text-secondary' htmlFor="">Semester</label>
                    <select {...register("semester")} className='d-block w-full px-2 py-1 rounded' style={{ border: '1px solid #d6d6d6' }}>
                        <option value="1st Semester">1st Semester</option>
                        <option value="2nd Semester">2nd Semester</option>
                        <option value="3rd Semester">3rd Semester</option>
                    </select>
                </div>

                {/* Session */}
                <div className='text-start mb-3'>
                <label className='font-semibold pb-2 text-secondary' htmlFor="">Session</label>
                    <select {...register("session")} className='d-block w-full px-2 py-1 rounded' style={{ border: '1px solid #d6d6d6' }}>
                        <option value="2020 - 2021">2020 - 2021</option>
                        <option value="2021 - 2022">2021 - 2022</option>
                        <option value="2022 - 2023">2022 - 2023</option>
                    </select>
                </div>

                {/* USN */}
                <div className='text-start mb-3'>
                <label className='font-semibold pb-2 text-secondary' htmlFor="">USN</label>
                    <select {...register("usn")} className='d-block w-full px-2 py-1 rounded' style={{ border: '1px solid #d6d6d6' }}>
                        <option value="January - June">January - June</option>
                        <option value="July - December">July - December</option>
                    </select>
                </div>

                {/* Type */}
                <div className='text-start mb-3'>
                <label className='font-semibold pb-2 text-secondary' htmlFor="">Type</label>
                    <select {...register("type")} className='d-block w-full px-2 py-1 rounded' style={{ border: '1px solid #d6d6d6' }}>
                        <option value="Running">Running</option>
                        <option value="Passed">Passed</option>
                    </select>
                </div>

                {/* Image */}
                <div className="text-start">
                    <label className='font-semibold pb-2 text-secondary' htmlFor="">Photo</label> <br />
                    <input
                        type="file"
                        className='block w-full px-2 py-1 rounded'
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'Image is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image?.message}</span>}
                    </label>
                </div>

                {/* Add Item */}
                <div>
                    <input
                        className='btn btn-sm btn-accent w-full'
                        type="submit"
                        value="Submit"
                    />
                </div>
            </form>
        </div>
    );
};

export default UpdateProfile;