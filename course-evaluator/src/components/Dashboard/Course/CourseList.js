import React from 'react';
import useCourses from '../../../hooks/useCourses';
import CourseListDisplay from './CourseListDisplay';

const CourseList = () => {
    const [courses] = useCourses();
    // console.log(courses);
    return (
        <div>
            <h2 className="text-3xl font-medium font-lobster mb-2 text-accent text-center uppercase">List of Courses</h2>

            {/* Display all course data using get course API */}
            <div className="overflow-x-auto">
                <table className="table table-xs table-pin-cols">
                    <thead>
                        <tr className='grid grid-cols-7 gap-4 bg-accent text-info items-center justify-items-start text-start py-1'>
                            <td>Title</td>
                            <td>Code</td>
                            <td>Credit</td>
                            <td>Type</td>
                            <td>Semester</td>
                            <td>Edit</td>
                            <td>Delete</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            courses.map(course => <CourseListDisplay
                                key={course._id}
                                course={course}
                            ></CourseListDisplay>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CourseList;