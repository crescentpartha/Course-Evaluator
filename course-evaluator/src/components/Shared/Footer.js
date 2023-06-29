import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Footer = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div>
            <div className='bg-neutral'>
                <footer className="footer p-10 flex flex-wrap gap-5 justify-start md:justify-around max-w-screen-2xl mx-auto">
                    <div>
                        <span className="footer-title">Contact Us</span>
                        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>

                            {/* Email */}
                            <div className="form-control w-full max-w-xs">
                                {/* <label className="label py-1">
                                <span className="label-text text-secondary">Email</span>
                            </label> */}
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="input h-8 w-full max-w-xs border-neutral-400"
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

                            {/* Comment */}
                            <div className="form-control w-full max-w-xs">
                                {/* <label className="label py-1">
                                <span className="label-text text-secondary">Comment</span>
                            </label> */}
                                <input
                                    type="text"
                                    placeholder="Your Message"
                                    className="input h-8 w-full max-w-xs border-neutral-400"
                                    {...register("comment", {
                                        required: {
                                            value: true,
                                            message: 'Comment is Required'
                                        },
                                        pattern: {
                                            value: /^[A-Z]+[a-zA-Z0-9]*/,
                                            message: 'Provide a valid comment'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.comment?.type === 'required' && <span className="label-text-alt text-error">{errors.comment?.message}</span>}
                                    {errors.comment?.type === 'pattern' && <span className="label-text-alt text-error">{errors.comment?.message}</span>}
                                </label>
                            </div>

                            <input
                                className='btn btn-accent'
                                type="Submit"
                                value="Submit"
                                readOnly
                            />
                        </form>
                    </div>
                    <div>
                        <h2 className="footer-title">Sitemap</h2>
                        <ul className='flex flex-col items-start gap-2'>
                            <li><Link to='/' className='hover:text-error'>Overview</Link></li>
                            <li><Link to='/' className='hover:text-error'>Mission</Link></li>
                            <li><Link to='/' className='hover:text-error'>Achievements</Link></li>
                            <li><Link to='/' className='hover:text-error'>Terms & Conditions</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="footer-title font-lobster">Course Evaluator</h2>
                        <ul className='flex flex-col items-start gap-2'>
                            <li><span className='break-all'>Phone: <Link to='tel:+8801701701701' className='hover:text-error'>+8801701701701</Link></span></li>
                            <li><span className='break-all'>E-mail: <Link to='mailto:crescentpartha406@gmail.com' className='hover:text-error'>crescentpartha406@gmail.com</Link></span></li>
                            <li><span className='break-all'>Kumargaon, Sylhet-3114, Bangladesh</span></li>
                        </ul>
                    </div>
                </footer>
            </div>
            <footer className="footer footer-center p-4 bg-neutral-300">
                <div>
                    <p className='text-white font-semibold'>Copyright © {new Date().getFullYear()} - All right reserved by <span className='hover:text-warning'>Course Evaluator</span></p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;