import React from 'react';
import useFacilities from '../../../hooks/useFacilities';
import Facility from './Facility';

const Facilities = () => {
    const [facilities] = useFacilities();
    // console.log(facilities);
    return (
        <div className='max-w-screen-2xl mx-auto px-2 sm:px-10 py-8'>
            <h2 className='text-start text-2xl font-semibold font-opensans mb-2'>Campus Facilities</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    facilities.map(facility => <Facility
                        key={facility._id}
                        facility={facility}
                    ></Facility>)
                }
            </div>
        </div>
    );
};

export default Facilities;