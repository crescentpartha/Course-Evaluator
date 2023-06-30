import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaUserCircle, FaUser, FaUserCog, FaBook } from 'react-icons/fa';
import { SiFormstack } from 'react-icons/si';
import PageTitle from '../Shared/PageTitle';

const Dashboard = () => {

    return (
        <div className="drawer lg:drawer-open">
            <PageTitle title="Dashboard"></PageTitle>

            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content text-left p-5">
                {/* Page content here */}
                <h2 className="text-3xl font-bold mb-2 text-accent">Welcome to Dashboard</h2>
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
                                <li><Link to='/dashboard'>Profile</Link></li>
                                <li><Link to='/dashboard/update-profile'>Update Profile</Link></li>
                            </ul>
                        </li>
                    </div>

                    {/* Course */}
                    <div>
                        <span className='bg-secondary-content text-start ps-5 py-2 font-semibold flex flex-nowrap flex-row items-center gap-1'><FaBook />Course</span>
                        <li>
                            <ul className="ps-2">
                                <li><Link to='/dashboard/course-evaluation'>Course Evaluation</Link></li>
                                <li><Link to='/dashboard/view-survey-responses'>View Survey Responses</Link></li>
                            </ul>
                        </li>
                    </div>

                    {/* User */}
                    <div>
                        <span className='bg-secondary-content text-start ps-5 py-2 font-semibold flex flex-nowrap flex-row items-center gap-1'><FaUser />User</span>
                        <li>
                            <ul className="ps-2">
                                <li><Link to='/dashboard/teacher-list'>Teacher List</Link></li>
                                <li><Link to='/dashboard/super-admin-list'>Super Admin List</Link></li>
                            </ul>
                        </li>
                    </div>

                    {/* Admin */}
                    <div>
                        <span className='bg-secondary-content text-start ps-5 py-2 font-semibold flex flex-nowrap flex-row items-center gap-1'><FaUserCog />Admin</span>
                        <li>
                            <ul className="ps-2">
                                <li><Link to='/dashboard/modify-role'>Modify Role</Link></li>
                                <li><Link to='/dashboard/statistics'>Statistics</Link></li>
                            </ul>
                        </li>
                    </div>

                    {/* Form */}
                    <div>
                        <span className='bg-secondary-content text-start ps-5 py-2 font-semibold flex flex-nowrap flex-row items-center gap-1'><SiFormstack />Form</span>
                        <li>
                            <ul className="ps-2">
                                <li><Link to='/dashboard/add-new-notice'>Add New Notice</Link></li>
                                <li><Link to='/dashboard/add-news-and-events'>Add News & Events</Link></li>
                                <li><Link to='/dashboard/create-survey-form'>Create Survey Form</Link></li>
                            </ul>
                        </li>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;