import React from 'react';
import useResponses from '../../../hooks/useResponses';
import ViewSurveyResponsesDisplay from './ViewSurveyResponsesDisplay';

const ViewSurveyResponses = () => {
    const [responses] = useResponses();
    // console.log(responses);
    return (
        <div>
            <h2 className="text-3xl font-medium font-lobster mb-2 text-accent text-center uppercase">View Survey Responses</h2>

            {/* Display all course data using get course API */}
            <div className="overflow-x-auto">
                <table className="table table-xs table-pin-cols">
                    <thead>
                        <tr className='grid grid-cols-7 gap-4 bg-accent text-info items-center justify-items-start text-start py-1'>
                            <td>Image</td>
                            <td>Registration</td>
                            <td>Course</td>
                            <td>Code</td>
                            <td>Semester</td>
                            <td>View</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            responses.map(response => <ViewSurveyResponsesDisplay
                                key={response._id}
                                response={response}
                            ></ViewSurveyResponsesDisplay>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewSurveyResponses;