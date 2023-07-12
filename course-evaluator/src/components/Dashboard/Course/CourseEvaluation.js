import React from 'react';
import useCoursesForEvaluation from '../../../hooks/useCoursesForEvaluation';
import CourseEvaluationDisplay from './CourseEvaluationDisplay';

const CourseEvaluation = () => {
    const [courses] = useCoursesForEvaluation();
    // console.log(courses);
    return (
        <div>
            <h2 className="text-3xl font-bold mb-2 text-accent">Course Evaluation</h2>

            {/* Display all course data using get course API */}
            <div className="overflow-x-auto">
                <table className="table table-xs table-pin-cols">
                    <thead>
                        <tr className='grid grid-cols-6 gap-4 bg-accent text-info items-center justify-items-start text-start py-1'>
                            <td>Title</td>
                            <td>Code</td>
                            <td>Credit</td>
                            <td>Type</td>
                            <td>Semester</td>
                            <td>Survey</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            courses.map(course => <CourseEvaluationDisplay
                                key={course._id}
                                course={course}
                            ></CourseEvaluationDisplay>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CourseEvaluation;