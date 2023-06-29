import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Authentication/Loading';
import { signOut } from 'firebase/auth';

const Navbar = () => {
    const [user, loading] = useAuthState(auth);

    if (loading) {
        return <Loading></Loading>
    }

    const logout = () => {
        signOut(auth);
    }

    const menuItems = <>
        <li><Link to='/' className='text-md font-semibold uppercase'>Home</Link></li>
        <li><Link to='/dashboard' className='text-md font-semibold uppercase'>Dashboard</Link></li>
    </>

    return (
        <div className='bg-neutral'>
            <div className="navbar sm:px-10 max-w-screen-2xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                            {
                                user
                                    ? <li><Link to='/login' onClick={logout} className='text-md font-semibold uppercase'>Sign Out</Link></li>
                                    : <li><Link to='/register' className='text-md font-semibold uppercase'>Register</Link></li>
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
                    <label tabIndex={1} htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
            </div >
        </div>
    );
};

export default Navbar;