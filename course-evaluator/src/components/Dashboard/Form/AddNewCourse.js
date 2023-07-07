import React from 'react';
import { useForm } from 'react-hook-form';

const AddNewCourse = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div>
            <h2 className="text-3xl font-medium font-lobster mb-2 text-accent text-center uppercase">Add New Course</h2>

            <form className='rounded font-lato font-normal p-5 card w-96 bg-accent-content shadow-md mx-auto' onSubmit={handleSubmit(onSubmit)}>
                <h2 className='text-2xl font-medium font-opensans text-accent text-center'>Course Info</h2>

                {/* Course Title */}
                <div className='text-start'>
                    <label className='font-semibold pb-2 text-secondary' htmlFor="">Course Title<sup className='text-error'>*</sup></label> <br />
                    <input
                        style={{ border: '1px solid #d6d6d6' }}
                        className='block w-full px-2 py-1 rounded'
                        placeholder='Course Name'
                        type="text"
                        {...register("course_title", {
                            required: "Course title is required",
                            maxLength: {
                                value: 50,
                                message: "Max length is 50 character long"
                            },
                            pattern: {
                                value: /^[A-Z]+((\s)?([A-Za-z])+)*$/,
                                message: 'Course title is invalid'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.course_title?.type === 'required' && <span className="label-text-alt text-error">{errors.course_title?.message}</span>}
                        {errors.course_title?.type === 'maxLength' && <span className="label-text-alt text-error">{errors.course_title?.message}</span>}
                        {errors.course_title?.type === 'pattern' && <span className="label-text-alt text-error">{errors.course_title?.message}</span>}
                    </label>
                </div>

                {/* Course Code */}
                <div className='text-start'>
                    <label className='font-semibold pb-2 text-secondary' htmlFor="">Course Code<sup className='text-error'>*</sup></label>
                    <select {...register("course_code", { required: "Select one option" })} className='d-block w-full px-2 py-1 rounded' style={{ border: '1px solid #d6d6d6' }}>
                        <option value="">Select</option>
                        <option value="MIT-660">MIT-660</option>
                        <option value="MIT-631">MIT-631</option>
                        <option value="MIT-623">MIT-623</option>
                        <option value="MIT-621">MIT-621</option>
                        <option value="MIT-560">MIT-560</option>
                        <option value="MIT-541">MIT-541</option>
                        <option value="MIT-533">MIT-533</option>
                        <option value="MIT-531">MIT-531</option>
                        <option value="MIT-527">MIT-527</option>
                        <option value="MIT-525">MIT-525</option>
                        <option value="MIT-523">MIT-523</option>
                        <option value="MIT-521">MIT-521</option>
                        <option value="SWE-527">SWE-527</option>
                        <option value="SWE-525">SWE-525</option>
                        <option value="SWE-523">SWE-523</option>
                        <option value="SWE-521">SWE-521</option>
                        <option value="PGD-527">PGD-527</option>
                        <option value="PGD-525">PGD-525</option>
                        <option value="PGD-523">PGD-523</option>
                        <option value="PGD-521">PGD-521</option>
                    </select>
                    <label className="label">
                        {errors.course_code?.type === 'required' && <span className="label-text-alt text-error">{errors.course_code?.message}</span>}
                    </label>
                </div>

                {/* Course Credit */}
                <div className='text-start'>
                    <label className='font-semibold pb-2 text-secondary' htmlFor="">Course Credit<sup className='text-error'>*</sup></label>
                    <select {...register("course_credit", { required: "Select one option" })} className='d-block w-full px-2 py-1 rounded' style={{ border: '1px solid #d6d6d6' }}>
                        <option value="">Select</option>
                        <option value="3.00">3.00</option>
                        <option value="1.50">1.50</option>
                    </select>
                    <label className="label">
                        {errors.course_credit?.type === 'required' && <span className="label-text-alt text-error">{errors.course_credit?.message}</span>}
                    </label>
                </div>

                {/* Course Type */}
                <div className='text-start'>
                    <label className='font-semibold pb-2 text-secondary' htmlFor="">Course Type<sup className='text-error'>*</sup></label>
                    <select {...register("course_type", { required: "Select one option" })} className='d-block w-full px-2 py-1 rounded' style={{ border: '1px solid #d6d6d6' }}>
                        <option value="">Select</option>
                        <option value="Masters">Masters</option>
                        <option value="Bachelors">Bachelors</option>
                        <option value="Diploma">Diploma</option>
                    </select>
                    <label className="label">
                        {errors.course_type?.type === 'required' && <span className="label-text-alt text-error">{errors.course_type?.message}</span>}
                    </label>
                </div>

                {/* Department */}
                <div className='text-start'>
                    <label className='font-semibold pb-2 text-secondary' htmlFor="">Department<sup className='text-error'>*</sup></label>
                    <select {...register("department", { required: "Select one option" })} className='d-block w-full px-2 py-1 rounded' style={{ border: '1px solid #d6d6d6' }}>
                        <option value="">Select</option>
                        <option value="Institute of Information and Communication Technology">IICT</option>
                        <option value="Computer Science and Technology">CSE</option>
                        <option value="Electrical and Electronics Engineering">EEE</option>
                    </select>
                    <label className="label">
                        {errors.department?.type === 'required' && <span className="label-text-alt text-error">{errors.department?.message}</span>}
                    </label>
                </div>

                {/* Degree */}
                <div className='text-start'>
                    <label className='font-semibold pb-2 text-secondary' htmlFor="">Degree<sup className='text-error'>*</sup></label>
                    <select {...register("degree", { required: "Select one option" })} className='d-block w-full px-2 py-1 rounded' style={{ border: '1px solid #d6d6d6' }}>
                        <option value="">Select</option>
                        <option value="Masters in Information Technology">MIT</option>
                        <option value="Software Engineering">SWE</option>
                        <option value="Post Graduate Diploma">PGD</option>
                    </select>
                    <label className="label">
                        {errors.degree?.type === 'required' && <span className="label-text-alt text-error">{errors.degree?.message}</span>}
                    </label>
                </div>

                {/* Semester */}
                <div className='text-start'>
                    <label className='font-semibold pb-2 text-secondary' htmlFor="">Semester<sup className='text-error'>*</sup></label>
                    <select {...register("semester", { required: "Select one option" })} className='d-block w-full px-2 py-1 rounded' style={{ border: '1px solid #d6d6d6' }}>
                        <option value="">Select</option>
                        <option value="1st Semester">1st Semester</option>
                        <option value="2nd Semester">2nd Semester</option>
                        <option value="3rd Semester">3rd Semester</option>
                    </select>
                    <label className="label">
                        {errors.semester?.type === 'required' && <span className="label-text-alt text-error">{errors.semester?.message}</span>}
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
                <label className='text-xs pt-2 text-center' htmlFor=""><span className='text-error text-md'>*</span> means input is required.</label>
            </form>
        </div>
    );
};

export default AddNewCourse;