import React from 'react';
import { Outlet } from 'react-router-dom';
import { FaUserCircle, FaUser, FaUserCog, FaBook } from 'react-icons/fa';
import { SiFormstack } from 'react-icons/si';
import PageTitle from '../Shared/PageTitle';
import CustomLink from '../Shared/CustomLink';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import useFindAdmin from '../../hooks/useFindAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useFindAdmin(user);

    return (
        <div className="drawer lg:drawer-open">
            <PageTitle title="Dashboard"></PageTitle>

            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content text-left p-5">
                {/* Page content here */}
                {/* <h2 className="text-3xl font-bold mb-2 text-accent">Welcome to Dashboard</h2> */}
                <Outlet></Outlet>
            </div>
            <div className="drawer-side z-10 h-auto top-16">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-0 w-80 h-full bg-info text-secondary">
                    {/* Sidebar content here */}

                    {/* Profile */}
                    <div>
                        <span className='bg-secondary-content text-start ps-5 py-2 font-semibold flex flex-nowrap flex-row items-center gap-1'><FaUserCircle />Profile</span>
                        <li>
                            <ul className="ps-2">
                                <li><CustomLink to='/dashboard'>Profile</CustomLink></li>
                                <li><CustomLink to='/dashboard/update-profile'>Update Profile</CustomLink></li>
                            </ul>
                        </li>
                    </div>

                    {/* Course */}
                    <div>
                        <span className='bg-secondary-content text-start ps-5 py-2 font-semibold flex flex-nowrap flex-row items-center gap-1'><FaBook />Course</span>
                        <li>
                            <ul className="ps-2">
                                <li><CustomLink to='/dashboard/course-list'>Course List</CustomLink></li>
                                <li><CustomLink to='/dashboard/course-evaluation'>Course Evaluation</CustomLink></li>
                                <li><CustomLink to='/dashboard/view-survey-responses'>View Survey Responses</CustomLink></li>
                            </ul>
                        </li>
                    </div>

                    {/* User */}
                    <div>
                        <span className='bg-secondary-content text-start ps-5 py-2 font-semibold flex flex-nowrap flex-row items-center gap-1'><FaUser />User</span>
                        <li>
                            <ul className="ps-2">
                                <li><CustomLink to='/dashboard/student-list'>Student List</CustomLink></li>
                                <li><CustomLink to='/dashboard/teacher-list'>Teacher List</CustomLink></li>
                                <li><CustomLink to='/dashboard/super-admin-list'>Super Admin List</CustomLink></li>
                            </ul>
                        </li>
                    </div>

                    {/* Admin */}
                    <div>
                        <span className='bg-secondary-content text-start ps-5 py-2 font-semibold flex flex-nowrap flex-row items-center gap-1'><FaUserCog />Admin</span>
                        <li>
                            <ul className="ps-2">
                                {/* {
                                    admin === "admin" &&
                                    <li><CustomLink to='/dashboard/modify-role'>Modify Role</CustomLink></li>
                                } */}
                                <li><CustomLink to='/dashboard/modify-role'>Modify Role</CustomLink></li>
                                <li><CustomLink to='/dashboard/notice-list'>Notice List</CustomLink></li>
                                <li><CustomLink to='/dashboard/news_event-list'>News & Events List</CustomLink></li>
                                <li><CustomLink to='/dashboard/statistics'>Statistics</CustomLink></li>
                            </ul>
                        </li>
                    </div>

                    {/* Form */}
                    <div>
                        <span className='bg-secondary-content text-start ps-5 py-2 font-semibold flex flex-nowrap flex-row items-center gap-1'><SiFormstack />Form</span>
                        <li>
                            <ul className="ps-2">
                                <li><CustomLink to='/dashboard/add-new-course'>Add New Course</CustomLink></li>
                                <li><CustomLink to='/dashboard/add-new-notice'>Add New Notice</CustomLink></li>
                                <li><CustomLink to='/dashboard/add-news-and-events'>Add News & Events</CustomLink></li>
                                <li><CustomLink to='/dashboard/create-survey-form'>Create Survey Form</CustomLink></li>
                            </ul>
                        </li>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;