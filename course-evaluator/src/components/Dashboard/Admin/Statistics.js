import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useParticularCourseStatistics from '../../../hooks/useParticularCourseStatistics';

const Statistics = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [courseTitle, setCourseTitle] = useState("");
    const [courseCode, setCourseCode] = useState("");
    // console.log(courseTitle, courseCode);
    const [statistics] = useParticularCourseStatistics({ courseCode, courseTitle });
    console.log(statistics);

    const onSubmit = data => {
        console.log(data);
        const { course_title, course_code } = data;
        setCourseTitle(course_title);
        setCourseCode(course_code);
        // console.log(courseTitle, courseCode);
    }
    return (
        <div>
            <h2 className="text-3xl font-medium font-lobster mb-2 text-accent text-center uppercase">Course-Wise Survey Statistics Report</h2>

            <form className='rounded font-lato font-normal p-5 card w-96 bg-accent-content shadow-md mx-auto' onSubmit={handleSubmit(onSubmit)}>
                <h2 className='text-2xl font-medium font-opensans text-accent text-center mb-3'>Select for Survey Statistics</h2>

                {/* Course Title */}
                <div className='text-start'>
                    <label className='font-semibold pb-2 text-secondary' htmlFor="">Course Title<sup className='text-error'>*</sup></label>
                    <select {...register("course_title", { required: "Select one option" })} className='d-block w-full px-2 py-1 rounded' style={{ border: '1px solid #d6d6d6' }}>
                        <option value="">Select</option>
                        <option value="Software Testing and Quality Assurance">Software Testing and Quality Assurance</option>
                        <option value="Software Engineering and Management">Software Engineering and Management</option>
                        <option value="Information and Cyber Security">Information and Cyber Security</option>
                        <option value="Thesis or Project">Thesis or Project</option>
                        <option value="Data Structure and Algorithm">Data Structure and Algorithm</option>
                        <option value="Machine Learning">Machine Learning</option>
                        <option value="Computer Networking and Internetworking">Computer Networking and Internetworking</option>
                        <option value="Natural Language Processing">Natural Language Processing</option>
                        <option value="Computer Programming and Algorithm">Computer Programming and Algorithm</option>
                        <option value="Advanced Web Technology">Advanced Web Technology</option>
                        <option value="Database Architecture and Administration">Database Architecture and Administration</option>
                        <option value="E Governance">E Governance</option>
                    </select>
                    <label className="label">
                        {errors.course_title?.type === 'required' && <span className="label-text-alt text-error">{errors.course_title?.message}</span>}
                    </label>
                </div>

                {/* Course Code */}
                <div className='text-start'>
                    <label className='font-semibold pb-2 text-secondary' htmlFor="">Course Code<sup className='text-error'>*</sup></label>
                    <select {...register("course_code", { required: "Select one option" })} className='d-block w-full px-2 py-1 rounded' style={{ border: '1px solid #d6d6d6' }}>
                        <option value="">Select</option>
                        <option value="MIT-660">MIT-660</option>
                        <option value="MIT-631">MIT-631</option>
                        <option value="MIT-623">MIT-623</option>
                        <option value="MIT-621">MIT-621</option>
                        <option value="MIT-560">MIT-560</option>
                        <option value="MIT-541">MIT-541</option>
                        <option value="MIT-533">MIT-533</option>
                        <option value="MIT-531">MIT-531</option>
                        <option value="MIT-527">MIT-527</option>
                        <option value="MIT-525">MIT-525</option>
                        <option value="MIT-523">MIT-523</option>
                        <option value="MIT-521">MIT-521</option>
                        <option value="SWE-527">SWE-527</option>
                        <option value="SWE-525">SWE-525</option>
                        <option value="SWE-523">SWE-523</option>
                        <option value="SWE-521">SWE-521</option>
                        <option value="PGD-527">PGD-527</option>
                        <option value="PGD-525">PGD-525</option>
                        <option value="PGD-523">PGD-523</option>
                        <option value="PGD-521">PGD-521</option>
                    </select>
                    <label className="label">
                        {errors.course_code?.type === 'required' && <span className="label-text-alt text-error">{errors.course_code?.message}</span>}
                    </label>
                </div>

                {/* Add Item */}
                <div>
                    <input
                        className='btn btn-sm btn-accent w-full'
                        type="submit"
                        value="Submit"
                    />
                </div>
                <label className='text-xs pt-2 text-center' htmlFor=""><span className='text-error text-md'>*</span> means input is required.</label>
            </form>

            {
                (statistics?.question01?.options?.option1 === 0 && statistics?.question01?.options?.option2 === 0 && statistics?.question01?.options?.option3 === 0 && statistics?.question01?.options?.option4 === 0 && statistics?.question01?.options?.option5 === 0)
                    ? <></> :
                    <div className='bg-info rounded p-5 mt-5'>
                        {/* Question01 */}
                        <div>
                            <label className="label py-1 flex flex-col items-start">
                                <span className="text-secondary font-medium italic text-left">{statistics?.question01?.question}</span>
                                <div className='flex flex-row flex-wrap'>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Strongly Agree: <span className={`${statistics?.question01?.options?.option1 ? "text-error" : "text-accent"}`}>{statistics?.question01?.options?.option1}</span></span>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Agree: <span className={`${statistics?.question01?.options?.option2 ? "text-error" : "text-accent"}`}>{statistics?.question01?.options?.option2}</span></span>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Neutral: <span className={`${statistics?.question01?.options?.option3 ? "text-error" : "text-accent"}`}>{statistics?.question01?.options?.option3}</span></span>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Disagree: <span className={`${statistics?.question01?.options?.option4 ? "text-error" : "text-accent"}`}>{statistics?.question01?.options?.option4}</span></span>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Strongly Disagree: <span className={`${statistics?.question01?.options?.option5 ? "text-error" : "text-accent"}`}>{statistics?.question01?.options?.option5}</span></span>
                                </div>
                            </label>
                        </div>
                        {/* Question02 */}
                        <div>
                            <label className="label py-1 flex flex-col items-start">
                                <span className="text-secondary font-medium italic text-left">{statistics?.question02?.question}</span>
                                <div className='flex flex-row flex-wrap'>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Strongly Agree: <span className={`${statistics?.question02?.options?.option1 ? "text-error" : "text-accent"}`}>{statistics?.question02?.options?.option1}</span></span>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Agree: <span className={`${statistics?.question02?.options?.option2 ? "text-error" : "text-accent"}`}>{statistics?.question02?.options?.option2}</span></span>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Neutral: <span className={`${statistics?.question02?.options?.option3 ? "text-error" : "text-accent"}`}>{statistics?.question02?.options?.option3}</span></span>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Disagree: <span className={`${statistics?.question02?.options?.option4 ? "text-error" : "text-accent"}`}>{statistics?.question02?.options?.option4}</span></span>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Strongly Disagree: <span className={`${statistics?.question02?.options?.option5 ? "text-error" : "text-accent"}`}>{statistics?.question02?.options?.option5}</span></span>
                                </div>
                            </label>
                        </div>
                        {/* Question03 */}
                        <div>
                            <label className="label py-1 flex flex-col items-start">
                                <span className="text-secondary font-medium italic text-left">{statistics?.question03?.question}</span>
                                <div className='flex flex-row flex-wrap'>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Strongly Agree: <span className={`${statistics?.question03?.options?.option1 ? "text-error" : "text-accent"}`}>{statistics?.question03?.options?.option1}</span></span>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Agree: <span className={`${statistics?.question03?.options?.option2 ? "text-error" : "text-accent"}`}>{statistics?.question03?.options?.option2}</span></span>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Neutral: <span className={`${statistics?.question03?.options?.option3 ? "text-error" : "text-accent"}`}>{statistics?.question03?.options?.option3}</span></span>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Disagree: <span className={`${statistics?.question03?.options?.option4 ? "text-error" : "text-accent"}`}>{statistics?.question03?.options?.option4}</span></span>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Strongly Disagree: <span className={`${statistics?.question03?.options?.option5 ? "text-error" : "text-accent"}`}>{statistics?.question03?.options?.option5}</span></span>
                                </div>
                            </label>
                        </div>
                        {/* Question04 */}
                        <div>
                            <label className="label py-1 flex flex-col items-start">
                                <span className="text-secondary font-medium italic text-left">{statistics?.question04?.question}</span>
                                <div className='flex flex-row flex-wrap'>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Strongly Agree: <span className={`${statistics?.question04?.options?.option1 ? "text-error" : "text-accent"}`}>{statistics?.question04?.options?.option1}</span></span>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Agree: <span className={`${statistics?.question04?.options?.option2 ? "text-error" : "text-accent"}`}>{statistics?.question04?.options?.option2}</span></span>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Neutral: <span className={`${statistics?.question04?.options?.option3 ? "text-error" : "text-accent"}`}>{statistics?.question04?.options?.option3}</span></span>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Disagree: <span className={`${statistics?.question04?.options?.option4 ? "text-error" : "text-accent"}`}>{statistics?.question04?.options?.option4}</span></span>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Strongly Disagree: <span className={`${statistics?.question04?.options?.option5 ? "text-error" : "text-accent"}`}>{statistics?.question04?.options?.option5}</span></span>
                                </div>
                            </label>
                        </div>
                        {/* Question05 */}
                        <div>
                            <label className="label py-1 flex flex-col items-start">
                                <span className="text-secondary font-medium italic text-left">{statistics?.question05?.question}</span>
                                <div className='flex flex-row flex-wrap'>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Strongly Agree: <span className={`${statistics?.question05?.options?.option1 ? "text-error" : "text-accent"}`}>{statistics?.question05?.options?.option1}</span></span>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Agree: <span className={`${statistics?.question05?.options?.option2 ? "text-error" : "text-accent"}`}>{statistics?.question05?.options?.option2}</span></span>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Neutral: <span className={`${statistics?.question05?.options?.option3 ? "text-error" : "text-accent"}`}>{statistics?.question05?.options?.option3}</span></span>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Disagree: <span className={`${statistics?.question05?.options?.option4 ? "text-error" : "text-accent"}`}>{statistics?.question05?.options?.option4}</span></span>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Strongly Disagree: <span className={`${statistics?.question05?.options?.option5 ? "text-error" : "text-accent"}`}>{statistics?.question05?.options?.option5}</span></span>
                                </div>
                            </label>
                        </div>
                        {/* Question06 */}
                        <div>
                            <label className="label py-1 flex flex-col items-start">
                                <span className="text-secondary font-medium italic text-left">{statistics?.question06?.question}</span>
                                <div className='flex flex-row flex-wrap'>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Strongly Agree: <span className={`${statistics?.question06?.options?.option1 ? "text-error" : "text-accent"}`}>{statistics?.question06?.options?.option1}</span></span>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Agree: <span className={`${statistics?.question06?.options?.option2 ? "text-error" : "text-accent"}`}>{statistics?.question06?.options?.option2}</span></span>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Neutral: <span className={`${statistics?.question06?.options?.option3 ? "text-error" : "text-accent"}`}>{statistics?.question06?.options?.option3}</span></span>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Disagree: <span className={`${statistics?.question06?.options?.option4 ? "text-error" : "text-accent"}`}>{statistics?.question06?.options?.option4}</span></span>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Strongly Disagree: <span className={`${statistics?.question06?.options?.option5 ? "text-error" : "text-accent"}`}>{statistics?.question06?.options?.option5}</span></span>
                                </div>
                            </label>
                        </div>
                        {/* Question07 */}
                        <div>
                            <label className="label py-1 flex flex-col items-start">
                                <span className="text-secondary font-medium italic text-left">{statistics?.question07?.question}</span>
                                <div className='flex flex-row flex-wrap'>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Strongly Agree: <span className={`${statistics?.question07?.options?.option1 ? "text-error" : "text-accent"}`}>{statistics?.question07?.options?.option1}</span></span>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Agree: <span className={`${statistics?.question07?.options?.option2 ? "text-error" : "text-accent"}`}>{statistics?.question07?.options?.option2}</span></span>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Neutral: <span className={`${statistics?.question07?.options?.option3 ? "text-error" : "text-accent"}`}>{statistics?.question07?.options?.option3}</span></span>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Disagree: <span className={`${statistics?.question07?.options?.option4 ? "text-error" : "text-accent"}`}>{statistics?.question07?.options?.option4}</span></span>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Strongly Disagree: <span className={`${statistics?.question07?.options?.option5 ? "text-error" : "text-accent"}`}>{statistics?.question07?.options?.option5}</span></span>
                                </div>
                            </label>
                        </div>
                        {/* Question08 */}
                        <div>
                            <label className="label py-1 flex flex-col items-start">
                                <span className="text-secondary font-medium italic text-left">{statistics?.question08?.question}</span>
                                <div className='flex flex-row flex-wrap'>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Strongly Agree: <span className={`${statistics?.question08?.options?.option1 ? "text-error" : "text-accent"}`}>{statistics?.question08?.options?.option1}</span></span>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Agree: <span className={`${statistics?.question08?.options?.option2 ? "text-error" : "text-accent"}`}>{statistics?.question08?.options?.option2}</span></span>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Neutral: <span className={`${statistics?.question08?.options?.option3 ? "text-error" : "text-accent"}`}>{statistics?.question08?.options?.option3}</span></span>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Disagree: <span className={`${statistics?.question08?.options?.option4 ? "text-error" : "text-accent"}`}>{statistics?.question08?.options?.option4}</span></span>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Strongly Disagree: <span className={`${statistics?.question08?.options?.option5 ? "text-error" : "text-accent"}`}>{statistics?.question08?.options?.option5}</span></span>
                                </div>
                            </label>
                        </div>
                        {/* Question09 */}
                        <div>
                            <label className="label py-1 flex flex-col items-start">
                                <span className="text-secondary font-medium italic text-left">{statistics?.question09?.question}</span>
                                <div className='flex flex-row flex-wrap'>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Strongly Agree: <span className={`${statistics?.question09?.options?.option1 ? "text-error" : "text-accent"}`}>{statistics?.question09?.options?.option1}</span></span>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Agree: <span className={`${statistics?.question09?.options?.option2 ? "text-error" : "text-accent"}`}>{statistics?.question09?.options?.option2}</span></span>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Neutral: <span className={`${statistics?.question09?.options?.option3 ? "text-error" : "text-accent"}`}>{statistics?.question09?.options?.option3}</span></span>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Disagree: <span className={`${statistics?.question09?.options?.option4 ? "text-error" : "text-accent"}`}>{statistics?.question09?.options?.option4}</span></span>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Strongly Disagree: <span className={`${statistics?.question09?.options?.option5 ? "text-error" : "text-accent"}`}>{statistics?.question09?.options?.option5}</span></span>
                                </div>
                            </label>
                        </div>
                        {/* Question10 */}
                        <div>
                            <label className="label py-1 flex flex-col items-start">
                                <span className="text-secondary font-medium italic text-left">{statistics?.question10?.question}</span>
                                <div className='flex flex-row flex-wrap'>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Strongly Agree: <span className={`${statistics?.question10?.options?.option1 ? "text-error" : "text-accent"}`}>{statistics?.question10?.options?.option1}</span></span>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Agree: <span className={`${statistics?.question10?.options?.option2 ? "text-error" : "text-accent"}`}>{statistics?.question10?.options?.option2}</span></span>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Neutral: <span className={`${statistics?.question10?.options?.option3 ? "text-error" : "text-accent"}`}>{statistics?.question10?.options?.option3}</span></span>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Disagree: <span className={`${statistics?.question10?.options?.option4 ? "text-error" : "text-accent"}`}>{statistics?.question10?.options?.option4}</span></span>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Strongly Disagree: <span className={`${statistics?.question10?.options?.option5 ? "text-error" : "text-accent"}`}>{statistics?.question10?.options?.option5}</span></span>
                                </div>
                            </label>
                        </div>
                        {/* Question11 */}
                        <div>
                            <label className="label py-1 flex flex-col items-start">
                                <span className="text-secondary font-medium italic text-left">{statistics?.question11?.question}</span>
                                <div className='flex flex-row flex-wrap'>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Strongly Agree: <span className={`${statistics?.question11?.options?.option1 ? "text-error" : "text-accent"}`}>{statistics?.question11?.options?.option1}</span></span>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Agree: <span className={`${statistics?.question11?.options?.option2 ? "text-error" : "text-accent"}`}>{statistics?.question11?.options?.option2}</span></span>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Neutral: <span className={`${statistics?.question11?.options?.option3 ? "text-error" : "text-accent"}`}>{statistics?.question11?.options?.option3}</span></span>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Disagree: <span className={`${statistics?.question11?.options?.option4 ? "text-error" : "text-accent"}`}>{statistics?.question11?.options?.option4}</span></span>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Strongly Disagree: <span className={`${statistics?.question11?.options?.option5 ? "text-error" : "text-accent"}`}>{statistics?.question11?.options?.option5}</span></span>
                                </div>
                            </label>
                        </div>
                        {/* Question12 */}
                        <div>
                            <label className="label py-1 flex flex-col items-start">
                                <span className="text-secondary font-medium italic text-left">{statistics?.question12?.question}</span>
                                <div className='flex flex-row flex-wrap'>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Strongly Agree: <span className={`${statistics?.question12?.options?.option1 ? "text-error" : "text-accent"}`}>{statistics?.question12?.options?.option1}</span></span>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Agree: <span className={`${statistics?.question12?.options?.option2 ? "text-error" : "text-accent"}`}>{statistics?.question12?.options?.option2}</span></span>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Neutral: <span className={`${statistics?.question12?.options?.option3 ? "text-error" : "text-accent"}`}>{statistics?.question12?.options?.option3}</span></span>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Disagree: <span className={`${statistics?.question12?.options?.option4 ? "text-error" : "text-accent"}`}>{statistics?.question12?.options?.option4}</span></span>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Strongly Disagree: <span className={`${statistics?.question12?.options?.option5 ? "text-error" : "text-accent"}`}>{statistics?.question12?.options?.option5}</span></span>
                                </div>
                            </label>
                        </div>
                        {/* Question13 */}
                        <div>
                            <label className="label py-1 flex flex-col items-start">
                                <span className="text-secondary font-medium italic text-left">{statistics?.question13?.question}</span>
                                <div className='flex flex-row flex-wrap'>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Strongly Agree: <span className={`${statistics?.question13?.options?.option1 ? "text-error" : "text-accent"}`}>{statistics?.question13?.options?.option1}</span></span>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Agree: <span className={`${statistics?.question13?.options?.option2 ? "text-error" : "text-accent"}`}>{statistics?.question13?.options?.option2}</span></span>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Neutral: <span className={`${statistics?.question13?.options?.option3 ? "text-error" : "text-accent"}`}>{statistics?.question13?.options?.option3}</span></span>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Disagree: <span className={`${statistics?.question13?.options?.option4 ? "text-error" : "text-accent"}`}>{statistics?.question13?.options?.option4}</span></span>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Strongly Disagree: <span className={`${statistics?.question13?.options?.option5 ? "text-error" : "text-accent"}`}>{statistics?.question13?.options?.option5}</span></span>
                                </div>
                            </label>
                        </div>
                        {/* Question14 */}
                        <div>
                            <label className="label py-1 flex flex-col items-start">
                                <span className="text-secondary font-medium italic text-left">{statistics?.question14?.question}</span>
                                <div className='flex flex-row flex-wrap'>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Strongly Agree: <span className={`${statistics?.question14?.options?.option1 ? "text-error" : "text-accent"}`}>{statistics?.question14?.options?.option1}</span></span>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Agree: <span className={`${statistics?.question14?.options?.option2 ? "text-error" : "text-accent"}`}>{statistics?.question14?.options?.option2}</span></span>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Neutral: <span className={`${statistics?.question14?.options?.option3 ? "text-error" : "text-accent"}`}>{statistics?.question14?.options?.option3}</span></span>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Disagree: <span className={`${statistics?.question14?.options?.option4 ? "text-error" : "text-accent"}`}>{statistics?.question14?.options?.option4}</span></span>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Strongly Disagree: <span className={`${statistics?.question14?.options?.option5 ? "text-error" : "text-accent"}`}>{statistics?.question14?.options?.option5}</span></span>
                                </div>
                            </label>
                        </div>
                        {/* Question15 */}
                        <div>
                            <label className="label py-1 flex flex-col items-start">
                                <span className="text-secondary font-medium italic text-left">{statistics?.question15?.question}</span>
                                <div className='flex flex-row flex-wrap'>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Strongly Agree: <span className={`${statistics?.question15?.options?.option1 ? "text-error" : "text-accent"}`}>{statistics?.question15?.options?.option1}</span></span>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Agree: <span className={`${statistics?.question15?.options?.option2 ? "text-error" : "text-accent"}`}>{statistics?.question15?.options?.option2}</span></span>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Neutral: <span className={`${statistics?.question15?.options?.option3 ? "text-error" : "text-accent"}`}>{statistics?.question15?.options?.option3}</span></span>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Disagree: <span className={`${statistics?.question15?.options?.option4 ? "text-error" : "text-accent"}`}>{statistics?.question15?.options?.option4}</span></span>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Strongly Disagree: <span className={`${statistics?.question15?.options?.option5 ? "text-error" : "text-accent"}`}>{statistics?.question15?.options?.option5}</span></span>
                                </div>
                            </label>
                        </div>
                        {/* Question16 */}
                        <div>
                            <label className="label py-1 flex flex-col items-start">
                                <span className="text-secondary font-medium italic text-left">{statistics?.question16?.question}</span>
                                <div className='flex flex-row flex-wrap'>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Strongly Agree: <span className={`${statistics?.question16?.options?.option1 ? "text-error" : "text-accent"}`}>{statistics?.question16?.options?.option1}</span></span>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Agree: <span className={`${statistics?.question16?.options?.option2 ? "text-error" : "text-accent"}`}>{statistics?.question16?.options?.option2}</span></span>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Neutral: <span className={`${statistics?.question16?.options?.option3 ? "text-error" : "text-accent"}`}>{statistics?.question16?.options?.option3}</span></span>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Disagree: <span className={`${statistics?.question16?.options?.option4 ? "text-error" : "text-accent"}`}>{statistics?.question16?.options?.option4}</span></span>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Strongly Disagree: <span className={`${statistics?.question16?.options?.option5 ? "text-error" : "text-accent"}`}>{statistics?.question16?.options?.option5}</span></span>
                                </div>
                            </label>
                        </div>
                        {/* Question17 */}
                        <div>
                            <label className="label py-1 flex flex-col items-start">
                                <span className="text-secondary font-medium italic text-left">{statistics?.question17?.question}</span>
                                <div className='flex flex-row flex-wrap'>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Strongly Agree: <span className={`${statistics?.question17?.options?.option1 ? "text-error" : "text-accent"}`}>{statistics?.question17?.options?.option1}</span></span>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Agree: <span className={`${statistics?.question17?.options?.option2 ? "text-error" : "text-accent"}`}>{statistics?.question17?.options?.option2}</span></span>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Neutral: <span className={`${statistics?.question17?.options?.option3 ? "text-error" : "text-accent"}`}>{statistics?.question17?.options?.option3}</span></span>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Disagree: <span className={`${statistics?.question17?.options?.option4 ? "text-error" : "text-accent"}`}>{statistics?.question17?.options?.option4}</span></span>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Strongly Disagree: <span className={`${statistics?.question17?.options?.option5 ? "text-error" : "text-accent"}`}>{statistics?.question17?.options?.option5}</span></span>
                                </div>
                            </label>
                        </div>
                        {/* Question18 */}
                        <div>
                            <label className="label py-1 flex flex-col items-start">
                                <span className="text-secondary font-medium italic text-left">{statistics?.question18?.question}</span>
                                <div className='flex flex-row flex-wrap'>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Strongly Agree: <span className={`${statistics?.question18?.options?.option1 ? "text-error" : "text-accent"}`}>{statistics?.question18?.options?.option1}</span></span>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Agree: <span className={`${statistics?.question18?.options?.option2 ? "text-error" : "text-accent"}`}>{statistics?.question18?.options?.option2}</span></span>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Neutral: <span className={`${statistics?.question18?.options?.option3 ? "text-error" : "text-accent"}`}>{statistics?.question18?.options?.option3}</span></span>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Disagree: <span className={`${statistics?.question18?.options?.option4 ? "text-error" : "text-accent"}`}>{statistics?.question18?.options?.option4}</span></span>
                                    <span className="text-secondary font-medium italic text-left ps-6 whitespace-nowrap">Strongly Disagree: <span className={`${statistics?.question18?.options?.option5 ? "text-error" : "text-accent"}`}>{statistics?.question18?.options?.option5}</span></span>
                                </div>
                            </label>
                        </div>
                    </div>
            }


        </div >
    );
};

export default Statistics;