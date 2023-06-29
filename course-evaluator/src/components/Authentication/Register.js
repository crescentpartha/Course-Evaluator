import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import SocialLogin from './SocialLogin';
import auth from '../../firebase.init';
import Loading from './Loading';
import PageTitle from '../Shared/PageTitle';

const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [userInfo, setUserInfo] = useState(null);
    const navigate = useNavigate();
    // console.log(userInfo);

    let signInError;
    if (error || updateError) {
        signInError = <p className='text-error'><small>{error?.message || updateError?.message}</small></p>
    }

    if (loading || updating) {
        return <Loading></Loading>
    }

    if (user) {
        // console.log(user);
        navigate('/');
    }

    const onSubmit = async (data) => {
        // console.log(data);
        setUserInfo(data);
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
    }

    return (
        <div className='flex my-5 justify-center items-center'>
            <PageTitle title="Register"></PageTitle>

            <div className="card w-96 bg-accent-content shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold uppercase mb-2">Register</h2>

                    <SocialLogin></SocialLogin>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Name */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label py-1">
                                <span className="label-text text-secondary">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered h-8 w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    },
                                    pattern: {
                                        value: /^[a-z]([-']?[a-z]+)*( [a-z]([-']?[a-z]+)*)*$/,
                                        message: 'Provide a valid Name'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-error">{errors.name?.message}</span>}
                                {errors.name?.type === 'pattern' && <span className="label-text-alt text-error">{errors.name?.message}</span>}
                            </label>
                        </div>

                        {/* Role */}
                        <div className="form-control w-full max-w-xs mb-2">
                            <label className="label py-1">
                                <span className="label-text text-secondary">Role</span>
                            </label>
                            <select {...register("role")} className="select select-sm input-bordered w-full max-w-xs">
                                <option value="student">Student</option>
                                <option value="teacher">Teacher</option>
                            </select>
                        </div>

                        {/* Email */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label py-1">
                                <span className="label-text text-secondary">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="input input-bordered h-8 w-full max-w-xs"
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

                        {/* Password */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label py-1">
                                <span className="label-text text-secondary">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered h-8 w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 8,
                                        message: 'Must be 8 characters or longer'
                                    },
                                    maxLength: {
                                        value: 30,
                                        message: 'Less than or equal to 30 characters'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-error">{errors.password?.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-error">{errors.password?.message}</span>}
                                {errors.password?.type === 'maxLength' && <span className="label-text-alt text-error">{errors.password?.message}</span>}
                            </label>
                        </div>

                        {signInError}
                        <input
                            className='btn btn-accent btn-sm w-full max-w-xs mt-3'
                            type="Submit"
                            value="Register"
                            readOnly
                        />
                    </form>
                    <p className='text-center'><small>Already have an account? <Link to="/login" className='text-accent'>Please Login</Link></small></p>
                </div>
            </div>
        </div>
    );
};

export default Register;