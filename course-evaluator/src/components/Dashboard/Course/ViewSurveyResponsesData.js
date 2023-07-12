import React from 'react';
import { useParams } from 'react-router-dom';
import useParticularResponse from '../../../hooks/useParticularResponse';

const ViewSurveyResponsesData = () => {
    const { responseDataId } = useParams();
    const [response] = useParticularResponse(responseDataId);
    const { questions, answers, courseData } = response;
    // console.log(response);
    return (
        <div>
            <h2 className="text-3xl font-medium font-lobster mb-2 text-accent text-center uppercase">Student Survey Response</h2>

            <div className='text-center'>
                <p className='font-semibold text-success'>{courseData?.department}</p>
                <p className='font-semibold text-success'>{courseData?.degree}</p>
                <div className='flex flex-row flex-wrap justify-center items-center'>
                    <p className='font-semibold px-2'>Semester: <span className='font-normal italic'>{courseData?.semester}</span></p>
                    <p className='font-semibold px-2'>Session: <span className='font-normal italic'>{courseData?.session}</span></p>
                    <p className='font-semibold px-2'>USN: <span className='font-normal italic'>{courseData?.usn}</span></p>
                </div>
                <p className='font-semibold'>Course Title: <span className='font-normal italic'>{courseData?.course_title}</span></p>
                <div className='flex flex-row flex-wrap justify-center items-center'>
                    <p className='font-semibold px-2'>Course Code: <span className='font-normal italic'>{courseData?.course_code}</span></p>
                    <p className='font-semibold px-2'>Course Credit: <span className='font-normal italic'>{courseData?.course_credit}</span></p>
                </div>
            </div>

            <div className='py-5'>
                <h2 className='px-3 sm:px-5 font-semibold text-xl pb-2 text-left'>Survey Response Data:</h2>

                <div className='bg-info rounded p-5'>
                    <div>
                        <label className="label py-1 flex flex-col items-start">
                            <span className="text-secondary font-medium italic text-left">{questions?.question01}</span>
                            <span className="text-secondary font-medium italic text-left ps-6">Ans: <span className='text-accent'>{answers?.answer01}</span></span>
                        </label>
                    </div>
                    <div>
                        <label className="label py-1 flex flex-col items-start">
                            <span className="text-secondary font-medium italic text-left">{questions?.question02}</span>
                            <span className="text-secondary font-medium italic text-left ps-6">Ans: <span className='text-accent'>{answers?.answer02}</span></span>
                        </label>
                    </div>
                    <div>
                        <label className="label py-1 flex flex-col items-start">
                            <span className="text-secondary font-medium italic text-left">{questions?.question03}</span>
                            <span className="text-secondary font-medium italic text-left ps-6">Ans: <span className='text-accent'>{answers?.answer03}</span></span>
                        </label>
                    </div>
                    <div>
                        <label className="label py-1 flex flex-col items-start">
                            <span className="text-secondary font-medium italic text-left">{questions?.question04}</span>
                            <span className="text-secondary font-medium italic text-left ps-6">Ans: <span className='text-accent'>{answers?.answer04}</span></span>
                        </label>
                    </div>
                    <div>
                        <label className="label py-1 flex flex-col items-start">
                            <span className="text-secondary font-medium italic text-left">{questions?.question05}</span>
                            <span className="text-secondary font-medium italic text-left ps-6">Ans: <span className='text-accent'>{answers?.answer05}</span></span>
                        </label>
                    </div>
                    <div>
                        <label className="label py-1 flex flex-col items-start">
                            <span className="text-secondary font-medium italic text-left">{questions?.question06}</span>
                            <span className="text-secondary font-medium italic text-left ps-6">Ans: <span className='text-accent'>{answers?.answer06}</span></span>
                        </label>
                    </div>
                    <div>
                        <label className="label py-1 flex flex-col items-start">
                            <span className="text-secondary font-medium italic text-left">{questions?.question07}</span>
                            <span className="text-secondary font-medium italic text-left ps-6">Ans: <span className='text-accent'>{answers?.answer07}</span></span>
                        </label>
                    </div>
                    <div>
                        <label className="label py-1 flex flex-col items-start">
                            <span className="text-secondary font-medium italic text-left">{questions?.question08}</span>
                            <span className="text-secondary font-medium italic text-left ps-6">Ans: <span className='text-accent'>{answers?.answer08}</span></span>
                        </label>
                    </div>
                    <div>
                        <label className="label py-1 flex flex-col items-start">
                            <span className="text-secondary font-medium italic text-left">{questions?.question09}</span>
                            <span className="text-secondary font-medium italic text-left ps-6">Ans: <span className='text-accent'>{answers?.answer09}</span></span>
                        </label>
                    </div>
                    <div>
                        <label className="label py-1 flex flex-col items-start">
                            <span className="text-secondary font-medium italic text-left">{questions?.question10}</span>
                            <span className="text-secondary font-medium italic text-left ps-6">Ans: <span className='text-accent'>{answers?.answer10}</span></span>
                        </label>
                    </div>
                    <div>
                        <label className="label py-1 flex flex-col items-start">
                            <span className="text-secondary font-medium italic text-left">{questions?.question11}</span>
                            <span className="text-secondary font-medium italic text-left ps-6">Ans: <span className='text-accent'>{answers?.answer11}</span></span>
                        </label>
                    </div>
                    <div>
                        <label className="label py-1 flex flex-col items-start">
                            <span className="text-secondary font-medium italic text-left">{questions?.question12}</span>
                            <span className="text-secondary font-medium italic text-left ps-6">Ans: <span className='text-accent'>{answers?.answer12}</span></span>
                        </label>
                    </div>
                    <div>
                        <label className="label py-1 flex flex-col items-start">
                            <span className="text-secondary font-medium italic text-left">{questions?.question13}</span>
                            <span className="text-secondary font-medium italic text-left ps-6">Ans: <span className='text-accent'>{answers?.answer13}</span></span>
                        </label>
                    </div>
                    <div>
                        <label className="label py-1 flex flex-col items-start">
                            <span className="text-secondary font-medium italic text-left">{questions?.question14}</span>
                            <span className="text-secondary font-medium italic text-left ps-6">Ans: <span className='text-accent'>{answers?.answer14}</span></span>
                        </label>
                    </div>
                    <div>
                        <label className="label py-1 flex flex-col items-start">
                            <span className="text-secondary font-medium italic text-left">{questions?.question15}</span>
                            <span className="text-secondary font-medium italic text-left ps-6">Ans: <span className='text-accent'>{answers?.answer15}</span></span>
                        </label>
                    </div>
                    <div>
                        <label className="label py-1 flex flex-col items-start">
                            <span className="text-secondary font-medium italic text-left">{questions?.question16}</span>
                            <span className="text-secondary font-medium italic text-left ps-6">Ans: <span className='text-accent'>{answers?.answer16}</span></span>
                        </label>
                    </div>
                    <div>
                        <label className="label py-1 flex flex-col items-start">
                            <span className="text-secondary font-medium italic text-left">{questions?.question17}</span>
                            <span className="text-secondary font-medium italic text-left ps-6">Ans: <span className='text-accent'>{answers?.answer17}</span></span>
                        </label>
                    </div>
                    <div>
                        <label className="label py-1 flex flex-col items-start">
                            <span className="text-secondary font-medium italic text-left">{questions?.question18}</span>
                            <span className="text-secondary font-medium italic text-left ps-6">Ans: <span className='text-accent'>{answers?.answer18}</span></span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewSurveyResponsesData;