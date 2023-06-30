import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Authentication/Loading';
import { signOut } from 'firebase/auth';
import CustomLink from './CustomLink';

const Navbar = () => {
    const [user, loading] = useAuthState(auth);
    const [dashboardIcon, setDashboardIcon] = useState(false);
    const location = useLocation();

    // Dynamically > Conditional Rendering for Dashboard Navigation Icon for Mobile Device
    useEffect(() => {
        // console.log(location.pathname);
        let x = location.pathname;
        if (x.search('dashboard') === 1) {
            setDashboardIcon(true);
        }
        else {
            setDashboardIcon(false);
        }
    }, [location]);

    if (loading) {
        return <Loading></Loading>
    }

    const logout = () => {
        signOut(auth);
    }

    const menuItems = <>
        <li><CustomLink to='/' className='text-md font-semibold uppercase'>Home</CustomLink></li>
        <li><CustomLink to='/dashboard' className='text-md font-semibold uppercase'>Dashboard</CustomLink></li>
    </>

    return (
        <div className='bg-neutral sticky top-0 z-20'>
            <div className="navbar sm:px-10 max-w-screen-2xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-neutral rounded-box w-52 z-30 fixed top-10">
                            {menuItems}
                            {
                                user
                                    ? <li><CustomLink to='/login' onClick={logout} className='text-md font-semibold uppercase'>Sign Out</CustomLink></li>
                                    : <li><CustomLink to='/register' className='text-md font-semibold uppercase'>Register</CustomLink></li>
                            }
                        </ul>
                    </div>
                    <Link to='/' className="font-lobster text-xl">Course Evaluator</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user
                            ? <Link to='/login' onClick={logout}><button className='btn btn-accent hidden lg:block'>Sign Out</button></Link>
                            : <Link to='/register'><button className='btn btn-accent hidden lg:block'>Register</button></Link>
                    }
                    {
                        dashboardIcon &&
                        <label tabIndex={1} htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                    }
                </div>
            </div >
        </div>
    );
};

export default Navbar;