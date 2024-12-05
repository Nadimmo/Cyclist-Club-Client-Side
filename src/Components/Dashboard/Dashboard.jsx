<<<<<<< HEAD
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='flex'>
            <div className='lg:w-64 min-h-screen bg-sky-400'>
                <ul className='p-4 font-bold'>
                    <li className='lg:text-2xl py-2'><NavLink to={'event'}>Event</NavLink></li>
                    <li className='lg:text-2xl py-2'><NavLink to={'team'}>Our Team</NavLink></li>
                    <li className='lg:text-2xl py-2'><NavLink to={'article'}>Article </NavLink></li>
                    <li className='lg:text-2xl py-2'><NavLink to={'blog'}>Blog</NavLink></li>
                    <li className='lg:text-2xl py-2'><NavLink to={'/'}>Home</NavLink></li>
                    <div className='divider py-2'>or</div>
                    <li className='lg:text-2xl py-2'><NavLink to={'users'}>All Users</NavLink></li>
                    <li className='lg:text-2xl py-2'><NavLink to={'addEvent'}>Add Event</NavLink></li>
                    <li className='lg:text-2xl py-2'><NavLink to={'newUpdate'}>News & Update</NavLink></li>
                    <li className='lg:text-2xl py-2'><NavLink to={'/'}>Home</NavLink></li>
                </ul>
            </div>
            <div className='flex-1 m-5'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

=======
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='flex'>
            <div className='lg:w-64 min-h-screen bg-sky-400'>
                <ul className='p-4 font-bold'>
                    <li className='lg:text-2xl py-2'><NavLink to={'event'}>Event</NavLink></li>
                    <li className='lg:text-2xl py-2'><NavLink to={'team'}>Our Team</NavLink></li>
                    <li className='lg:text-2xl py-2'><NavLink to={'article'}>Article </NavLink></li>
                    <li className='lg:text-2xl py-2'><NavLink to={'blog'}>Blog</NavLink></li>
                    <li className='lg:text-2xl py-2'><NavLink to={'/'}>Home</NavLink></li>
                    <div className='divider py-2'>or</div>
                    <li className='lg:text-2xl py-2'><NavLink to={'users'}>All Users</NavLink></li>
                    <li className='lg:text-2xl py-2'><NavLink to={'addEvent'}>Add Event</NavLink></li>
                    <li className='lg:text-2xl py-2'><NavLink to={'newUpdate'}>News & Update</NavLink></li>
                    <li className='lg:text-2xl py-2'><NavLink to={'/'}>Home</NavLink></li>
                </ul>
            </div>
            <div className='flex-1 m-5'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

>>>>>>> 6d2a2ddcf10cf48201a02a1d4e1789f924c86fec
export default Dashboard;