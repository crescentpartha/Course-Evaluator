import React from 'react';

const Home = () => {
    return (
        <div>
            <h2>Home</h2>
            <h1 className="text-3xl text-secondary font-bold underline">
                Hello world!
            </h1>
            <button className='btn btn-active btn-primary text-info'>Primary</button>
            <br />
            <p className='text-3xl font-lato text-primary'>Primary</p>
            <p className='text-3xl font-lobster text-secondary'>Secondary</p>
            <p className='text-3xl font-opensans text-accent'>Accent</p>
            <p className='text-3xl text-neutral'>Neutral</p>
            <p className='text-3xl text-info'>Info</p>
            <p className='text-success'>Success</p>
            <p className='text-warning'>Warning</p>
            <p className='text-error'>Error</p>
        </div>
    );
};

export default Home;