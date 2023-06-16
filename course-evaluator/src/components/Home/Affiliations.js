import React from 'react';
import govt from '../../images/slides/govt.png';
import google from '../../images/slides/google.png';
import ugc from '../../images/slides/ugc.png';
import heqep from '../../images/slides/HEQEP.png';
import cisco from '../../images/slides/cisco.png';
import ieee from '../../images/slides/ieee.png';
import mozilla from '../../images/slides/mozilla.png';
import MicrosoftImagine from '../../images/slides/MicrosoftImagine.png';

const Affiliations = () => {
    return (
        <div className='max-w-screen-2xl mx-auto px-2 sm:px-10 py-8'>
            <h2 className='text-start text-2xl font-semibold font-opensans mb-2'>Affiliations</h2>

            <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-1 items-center justify-center'>
                <div className='mx-auto'>
                    <img src={govt} alt="Government" />
                </div>
                <div className='mx-auto'>
                    <img src={google} alt="Google" />
                </div>
                <div className='mx-auto'>
                    <img src={ugc} alt="Government" />
                </div>
                <div className='mx-auto'>
                    <img src={mozilla} alt="Government" />
                </div>
                <div className='mx-auto'>
                    <img src={heqep} alt="Government" />
                </div>
                <div className='mx-auto'>
                    <img src={ieee} alt="Government" />
                </div>
                <div className='mx-auto'>
                    <img src={cisco} alt="Government" />
                </div>
                <div className='mx-auto'>
                    <img src={MicrosoftImagine} alt="Government" />
                </div>
            </div>
        </div>
    );
};

export default Affiliations;