import React from 'react';
import { Link } from 'react-router-dom';
import heading from '../../images/heading.jpg';

const Heading = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${heading})` }}>
            <div className="hero-overlay bg-opacity-30"></div>
            <div className="hero-content text-center text-neutral-content bg-neutral bg-opacity-40 rounded">
                <div className="max-w-xl">
                    <h1 className="mb-5 text-2xl sm:text-3xl font-bold text-accent font-lato">Online Survey for Course Evaluation</h1>
                    <p className="mb-5 text-md sm:text-lg text-secondary font-opensans text-justify">Course Evaluator can efficiently collect feedback from students regarding their courses. It aims to evaluate the effectiveness of various courses offered by the educational institution. This includes understanding student satisfaction levels, identifying strengths and weaknesses, and pinpointing areas for improvement.</p>
                    <Link to='/dashboard' className="btn btn-sm sm:btn-md btn-accent">Get Started</Link>
                </div>
            </div>
        </div>
    );
};

export default Heading;