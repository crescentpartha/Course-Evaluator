import React from 'react';
import { useForm } from 'react-hook-form';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const UpdateProfileS = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    // console.log(user);

    const imageStorageAPIKey = 'd0f9b89e42ed8d95bb102c26dd41f8b3';

    const onSubmit = (data) => {
        // console.log(data);

        /* Upload image to imgbb server and get image url */
        const image = data.image[0];
        // console.log(image);
        const formData = new FormData();
        formData.append("image", image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageAPIKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                // console.log('imgbb', result);
                if (result.success) {
                    const img = result.data.url;
                    const image = img || user?.photoURL || null;
                    const currentUser = {
                        name: data?.name,
                        degree: data?.degree,
                        department: data?.department,
                        image: image,
                        programme: data?.programme,
                        registration_no: data?.registration_no,
                        semester: data?.semester,
                        session: data?.session,
                        gender: data?.gender,
                        type: data?.type,
                        usn: data?.usn
                    };
                    // console.log(currentUser);
                    fetch(`http://localhost:5000/user/${user?.email}`, {
                        method: 'PUT',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(currentUser)
                    })
                        .then(res => res.json())
                        .then(data => {
                            // console.log('data inside useUpdateUserToken', data);
                            toast.success('Profile Update Successful!');
                            navigate('/dashboard');
                        });
                }
            })
    }

    return (
        <div className=''>
            <h2 className="text-3xl font-medium font-lobster mb-2 text-accent text-center uppercase">Update Your Profile</h2>
            <form className='rounded font-lato font-normal p-5 card w-96 bg-accent-content shadow-md mx-auto' onSubmit={handleSubmit(onSubmit)}>
                <h2 className='text-2xl font-medium font-opensans text-accent text-center'>Profile Info</h2>

                {/* Name */}
                <div className='text-start'>
                    <label className='font-semibold pb-2 text-secondary' htmlFor="">Name<sup className='text-error'>*</sup></label> <br />
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

                {/* Registration Number */}
                <div className="text-start">
                    <label className='font-semibold pb-2 text-secondary' htmlFor="">Registration Number<sup className='text-error'>*</sup></label>
                    <input
                        style={{ border: '1px solid #d6d6d6' }}
                        className='block w-full px-2 py-1 rounded'
                        type="text"
                        placeholder="Registration Number"
                        {...register("registration_no", {
                            required: {
                                value: true,
                                message: 'Registration number is required'
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
                <div className='text-start'>
                    <label className='font-semibold pb-2 text-secondary' htmlFor="">Department<sup className='text-error'>*</sup></label>
                    <select {...register("department", { required: "Select one option" })} className='d-block w-full px-2 py-1 rounded' style={{ border: '1px solid #d6d6d6' }}>
                        <option value="">Select</option>
                        <option value="Institute of Information and Communication Technology">IICT</option>
                        <option value="Computer Science and Technology">CSE</option>
                    </select>
                    <label className="label">
                        {errors.department?.type === 'required' && <span className="label-text-alt text-error">{errors.department?.message}</span>}
                    </label>
                </div>

                {/* Programme */}
                <div className='text-start'>
                    <label className='font-semibold pb-2 text-secondary' htmlFor="">Programme<sup className='text-error'>*</sup></label>
                    <select {...register("programme", { required: "Select one option" })} className='d-block w-full px-2 py-1 rounded' style={{ border: '1px solid #d6d6d6' }}>
                        <option value="">Select</option>
                        <option value="Masters">Masters</option>
                        <option value="Bachelors">Bachelors</option>
                        <option value="Diploma">Diploma</option>
                    </select>
                    <label className="label">
                        {errors.programme?.type === 'required' && <span className="label-text-alt text-error">{errors.programme?.message}</span>}
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

                {/* Session */}
                <div className='text-start'>
                    <label className='font-semibold pb-2 text-secondary' htmlFor="">Session<sup className='text-error'>*</sup></label>
                    <select {...register("session", { required: "Select one option" })} className='d-block w-full px-2 py-1 rounded' style={{ border: '1px solid #d6d6d6' }}>
                        <option value="">Select</option>
                        <option value="2020 - 2021">2020 - 2021</option>
                        <option value="2021 - 2022">2021 - 2022</option>
                        <option value="2022 - 2023">2022 - 2023</option>
                    </select>
                    <label className="label">
                        {errors.session?.type === 'required' && <span className="label-text-alt text-error">{errors.session?.message}</span>}
                    </label>
                </div>

                {/* USN */}
                <div className='text-start'>
                    <label className='font-semibold pb-2 text-secondary' htmlFor="">USN<sup className='text-error'>*</sup></label>
                    <select {...register("usn", { required: "Select one option" })} className='d-block w-full px-2 py-1 rounded' style={{ border: '1px solid #d6d6d6' }}>
                        <option value="">Select</option>
                        <option value="January - June">January - June</option>
                        <option value="July - December">July - December</option>
                    </select>
                    <label className="label">
                        {errors.usn?.type === 'required' && <span className="label-text-alt text-error">{errors.usn?.message}</span>}
                    </label>
                </div>

                {/* Gender */}
                <div className='text-start'>
                    <label className='font-semibold pb-2 text-secondary' htmlFor="">Gender<sup className='text-error'>*</sup></label>
                    <select {...register("gender", { required: "Select one option" })} className='d-block w-full px-2 py-1 rounded' style={{ border: '1px solid #d6d6d6' }}>
                        <option value="">Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    <label className="label">
                        {errors.gender?.type === 'required' && <span className="label-text-alt text-error">{errors.gender?.message}</span>}
                    </label>
                </div>

                {/* Type */}
                <div className='text-start'>
                    <label className='font-semibold pb-2 text-secondary' htmlFor="">Type<sup className='text-error'>*</sup></label>
                    <select {...register("type", { required: "Select one option" })} className='d-block w-full px-2 py-1 rounded' style={{ border: '1px solid #d6d6d6' }}>
                        <option value="">Select</option>
                        <option value="Running">Running</option>
                        <option value="Passed">Passed</option>
                    </select>
                    <label className="label">
                        {errors.type?.type === 'required' && <span className="label-text-alt text-error">{errors.type?.message}</span>}
                    </label>
                </div>

                {/* Image */}
                <div className="text-start">
                    <label className='font-semibold pb-2 text-secondary' htmlFor="">Photo<sup className='text-error'>*</sup></label> <br />
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
                <label className='text-xs pt-2 text-center' htmlFor=""><span className='text-error text-md'>*</span> means input is required.</label>
            </form>
        </div>
    );
};

export default UpdateProfileS;