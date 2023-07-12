import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import useParticularCourse from '../../../hooks/useParticularCourse';
import useFindUser from '../../../hooks/useFindUser';
import auth from '../../../firebase.init';
import { useForm } from 'react-hook-form';
import useQuestions from '../../../hooks/useQuestions';
import { toast } from 'react-toastify';

const CourseEvaluationSurvey = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [questions] = useQuestions();
    // console.log(questions);
    const { courseSurveyId } = useParams();
    // console.log(courseSurveyId);
    const [course] = useParticularCourse(courseSurveyId);
    // console.log(course);
    const { department, degree, semester, course_title, course_code, course_credit } = course;
    const [user] = useAuthState(auth);
    const [regUser] = useFindUser(user);
    // console.log(regUser);
    const { session, usn, image, name, registration_no } = regUser;
    const navigate = useNavigate();
    
    const courseData = {};
    courseData.degree = degree;
    courseData.course_title = course_title;
    courseData.course_code = course_code;
    courseData.semester = semester;
    courseData.image = image;
    courseData.name = name;
    courseData.registration_no = registration_no;

    const questions2 = {
        question01: "01. How would you rate the overall quality of this course?",
        question02: "02. Rate your overall experience of the course?",
        question03: "03. How did this course develop you professionally?",
        question04: "04. Did the courses meet your expectations in terms of providing relevant technical knowledge and skills?",
        question05: "05. How likely are you to recommend this course to a friend/colleague?",
        question06: "06. Were the course materials and resources adequately organized and accessible?",
        question07: "07. Did the courses provide opportunities for practical application of the concepts learned?",
        question08: "08. How well did the courses prepare you for real-world technical challenges and industry demands?",
        question09: "09. Were the assessments and examinations fair and aligned with the course objectives?",
        question10: "10. Did the course evaluations and feedback provided by instructors help you gauge your progress and identify areas for improvement?",
        question11: "11. How would you rate the overall classroom environment and the availability of necessary equipment and facilities?",
        question12: "12. Were the course schedules and timings convenient and conducive to learning?",
        question13: "13. Did the institute provide adequate support services, such as career counseling or job placement assistance?",
        question14: "14. How would you rate the institute's commitment to maintaining up-to-date curriculum and incorporating emerging technologies?",
        question15: "15. How would you rate the effectiveness of the instructors in delivering the course content and facilitating learning?",
        question16: "16. Were the instructors knowledgeable and experienced in their respective fields?",
        question17: "17. Did the instructors effectively communicate complex technical concepts?",
        question18: "18. Were the instructors approachable and available for assistance outside of class?"
    }

    const onSubmit = (data) => {
        const answers = {};
        answers.answer01 = data?.answer1;
        answers.answer02 = data?.answer2;
        answers.answer03 = data?.answer3;
        answers.answer04 = data?.answer4;
        answers.answer05 = data?.answer5;
        answers.answer06 = data?.answer6;
        answers.answer07 = data?.answer7;
        answers.answer08 = data?.answer8;
        answers.answer09 = data?.answer9;
        answers.answer10 = data?.answer10;
        answers.answer11 = data?.answer11;
        answers.answer12 = data?.answer12;
        answers.answer13 = data?.answer13;
        answers.answer14 = data?.answer14;
        answers.answer15 = data?.answer15;
        answers.answer16 = data?.answer16;
        answers.answer17 = data?.answer17;
        answers.answer18 = data?.answer18;

        const result = {};
        result.questions = questions2;
        result.answers = answers;
        result.courseData = courseData;
        // console.log(result);

        // POST a survey response data from client-side to server-side
        const url = `http://localhost:5000/response`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(result)
        })
            .then(res => res.json())
            .then(result => {
                toast.success('Survey response are successfully submitted!');
                navigate('/dashboard/course-evaluation');
                // console.log(result);
            })
    }

    return (
        <div>
            <h2 className="text-3xl font-medium font-lobster mb-2 text-accent text-center uppercase">Course Evaluation Survey</h2>

            <div className='text-center'>
                <p className='font-semibold text-success'>{department}</p>
                <p className='font-semibold text-success'>{degree}</p>
                <div className='flex flex-row flex-wrap justify-center items-center'>
                    <p className='font-semibold px-2'>Semester: <span className='font-normal italic'>{semester}</span></p>
                    <p className='font-semibold px-2'>Session: <span className='font-normal italic'>{session}</span></p>
                    <p className='font-semibold px-2'>USN: <span className='font-normal italic'>{usn}</span></p>
                </div>
                <p className='font-semibold'>Course Title: <span className='font-normal italic'>{course_title}</span></p>
                <div className='flex flex-row flex-wrap justify-center items-center'>
                    <p className='font-semibold px-2'>Course Code: <span className='font-normal italic'>{course_code}</span></p>
                    <p className='font-semibold px-2'>Course Credit: <span className='font-normal italic'>{course_credit}</span></p>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='py-5 text-center'>
                <h2 className='px-3 sm:px-5 font-semibold text-xl pb-2 text-left'>Answer the following questions:</h2>

                <div className='px-3 sm:px-5 py-3 bg-info rounded'>
                    {
                        questions.map(question => <>
                            <div className="form-control w-full pb-3">
                                <label className="label py-1">
                                    <span className="text-secondary font-medium italic text-left">{question.question}<sup className='text-error'>*</sup></span>
                                </label>
                                <div className='pl-7 text-left'>
                                    <input {...register(`${question?.answerNo}`, { required: true })} type="radio" value="Strongly Disagree" /> <span className='pr-2'>{question.options.option1}</span>
                                    <input {...register(`${question?.answerNo}`, { required: true })} type="radio" value="Disagree" /> <span className='pr-2'>{question.options.option2}</span>
                                    <input {...register(`${question?.answerNo}`, { required: true })} type="radio" value="Neutral" /> <span className='pr-2'>{question.options.option3}</span>
                                    <input {...register(`${question?.answerNo}`, { required: true })} type="radio" value="Agree" /> <span className='pr-2'>{question.options.option4}</span>
                                    <input {...register(`${question?.answerNo}`, { required: true })} type="radio" value="Strongly Agree" /> <span className='pr-2'>{question.options.option5}</span>
                                </div>
                                {/* <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-error">{errors.email?.message}</span>}
                                </label> */}
                            </div>
                        </>)
                    }
                </div>

                <input
                    className='btn btn-accent btn-sm w-full max-w-xs mt-3'
                    type="Submit"
                    value="Submit"
                    readOnly
                /> <br />
                <label className='text-xs pt-2 text-center' htmlFor=""><span className='text-error text-md'>*</span> means input is required.</label>
            </form>
        </div>
    );
};

export default CourseEvaluationSurvey;