import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import PageTitle from '../Shared/PageTitle';
import Loading from './Loading';
import SocialLogin from './SocialLogin';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/dashboard';

    let signInError;
    if (error) {
        signInError = <p className='text-error'><small>{error?.message}</small></p>
    }

    if (loading) {
        return <Loading></Loading>
    }

    if (user) {
        // console.log(user);
        // navigate('/');
        navigate(from, {replace: true});
    }

    const onSubmit = (data) => {
        // console.log(data);
        signInWithEmailAndPassword(data.email, data.password);
    }

    return (
        <div className='flex my-5 justify-center items-center'>
            <PageTitle title="Sign In"></PageTitle>

            <div className="card w-96 bg-accent-content shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold uppercase mb-2">Sign In</h2>

                    <SocialLogin></SocialLogin>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        {/* Email */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label py-1">
                                <span className="label-text text-secondary">Email<sup className='text-error'>*</sup></span>
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
                                <span className="label-text text-secondary">Password<sup className='text-error'>*</sup></span>
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
                            value="Sign In"
                            readOnly
                        />
                    </form>
                    <p className='text-center'><small>New to Course Evaluator? <Link to="/register" className='text-accent'>Create New Account</Link></small></p>
                    <p className='text-center'><small>Forget your password? <Link to="/retrieve-password" className='text-accent'>Reset Password</Link></small></p>
                </div>
            </div>
        </div>
    );
};

export default Login;