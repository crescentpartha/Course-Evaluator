import React from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import PageTitle from '../Shared/PageTitle';

const RetrievePassword = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);

    let signInError;
    if (error) {
        signInError = <p className='text-error'><small>{error?.message}</small></p>
    }

    const onSubmit = async (data) => {
        // console.log(data);
        await sendPasswordResetEmail(data.email);
        toast.success('Send your reset password Email!');
    }

    return (
        <div className='flex my-5 justify-center items-center'>
            <PageTitle title="Forget Password"></PageTitle>

            <div className="card w-96 bg-accent-content shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Retrieve Password</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

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

                        { sending && <span className="loading loading-dots loading-md"></span>}
                        {signInError}
                        <input
                            className='btn btn-accent btn-sm w-full max-w-xs mt-3'
                            type="Submit"
                            value="Reset"
                            readOnly
                        />
                    </form>
                    <p className='text-center'><small>New to Course Evaluator? <Link to="/register" className='text-accent'>Create New Account</Link></small></p>
                    <p className='text-center'><small>Already have an account? <Link to="/login" className='text-accent'>Please Login</Link></small></p>
                </div>
            </div>
        </div>
    );
};

export default RetrievePassword;