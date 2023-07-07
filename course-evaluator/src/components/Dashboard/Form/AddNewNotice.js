import React from 'react';
import { format } from 'date-fns';
import { useForm } from 'react-hook-form';

const AddNewNotice = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const date = format(new Date(), 'PP'); // uppercase PP
    const time = format(new Date(), 'pp'); // lowercase pp

    const onSubmit = (data) => {
        data.date = date;
        data.time = time;
        console.log(data);
    }

    return (
        <div>
            <h2 className="text-3xl font-medium font-lobster mb-2 text-accent text-center uppercase">Add New Notice</h2>

            <form className='rounded font-lato font-normal p-5 card w-96 bg-accent-content shadow-md mx-auto' onSubmit={handleSubmit(onSubmit)}>
                <h2 className='text-2xl font-medium font-opensans text-accent text-center'>Notice Info</h2>

                {/* Notice Title */}
                <div className='text-start'>
                    <label className='font-semibold pb-2 text-secondary' htmlFor="">Title<sup className='text-error'>*</sup></label> <br />
                    <input
                        style={{ border: '1px solid #d6d6d6' }}
                        className='block w-full px-2 py-1 rounded'
                        placeholder='Notice title'
                        type="text"
                        {...register("title", {
                            required: "Notice title is required",
                            maxLength: {
                                value: 50,
                                message: "Max length is 50 character long"
                            },
                            pattern: {
                                value: /^[A-Z]+((\s)?([A-Za-z])+)*$/,
                                message: 'Notice title is invalid'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.title?.type === 'required' && <span className="label-text-alt text-error">{errors.title?.message}</span>}
                        {errors.title?.type === 'maxLength' && <span className="label-text-alt text-error">{errors.title?.message}</span>}
                        {errors.title?.type === 'pattern' && <span className="label-text-alt text-error">{errors.title?.message}</span>}
                    </label>
                </div>

                {/* Description */}
                <div className='text-start'>
                    <label className='font-semibold pb-2 text-secondary' htmlFor="">Description<sup className='text-error'>*</sup></label> <br />
                    <textarea
                        style={{ border: '1px solid #d6d6d6' }}
                        className='block w-full px-2 py-1 rounded'
                        placeholder='Notice description...'
                        // type="text"
                        {...register("description", {
                            required: "Notice description is required",
                            maxLength: {
                                value: 3000,
                                message: "Max length is 3000 character long"
                            },
                            pattern: {
                                value: /^[A-Z]+((\s)?([A-Za-z0-9,;._-])+)*$/,
                                message: 'Notice description is invalid'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.description?.type === 'required' && <span className="label-text-alt text-error">{errors.description?.message}</span>}
                        {errors.description?.type === 'maxLength' && <span className="label-text-alt text-error">{errors.description?.message}</span>}
                        {errors.description?.type === 'pattern' && <span className="label-text-alt text-error">{errors.description?.message}</span>}
                    </label>
                </div>

                {/* Notice Type */}
                <div className='text-start'>
                    <label className='font-semibold pb-2 text-secondary' htmlFor="">Type<sup className='text-error'>*</sup></label>
                    <select {...register("type", { required: "Select one option" })} className='d-block w-full px-2 py-1 rounded' style={{ border: '1px solid #d6d6d6' }}>
                        <option value="">Select</option>
                        <option value="General Notice">General Notice</option>
                        <option value="Job Circulars">Job Circulars</option>
                        <option value="Procurements">Procurements</option>
                    </select>
                    <label className="label">
                        {errors.type?.type === 'required' && <span className="label-text-alt text-error">{errors.type?.message}</span>}
                    </label>
                </div>

                {/* Image */}
                <div className="text-start">
                    <label className='font-semibold pb-2 text-secondary' htmlFor="">Photo</label> <br />
                    <input
                        type="file"
                        className='block w-full px-2 py-1 rounded'
                        {...register("image", {
                            required: {
                                value: false,
                                message: 'Image is not Required'
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
                <label className='text-xs pt-2 text-center' htmlFor=""><span className='text-error text-md'>*</span> means input is required.</label>
            </form>
        </div>
    );
};

export default AddNewNotice;