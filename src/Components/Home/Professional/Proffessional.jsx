<<<<<<< HEAD
import React from 'react';
import man from '../../../assets/man.jpg'
import man2 from '../../../assets/man2.jpg'
import man3 from '../../../assets/man3.jpg'
import './Professional.css'
const Professional = () => {
    return (
        <div className='m-5 mt-20'>
            <div className='lg:flex justify-between my-4'>
                <h1 className="text-4xl">Professional & full of <br /> <b>adventures of soul</b></h1>
                <p className="text-lg text-justify  lg:w-[500px]">It first considers Karl Popper's views regarding the different solutions developed by the Presocratics to address the problem of cosmic becoming before discussing the concept of psuchē .</p>
            </div>
            <div className='lg:grid grid-cols-3 gap-5 mt-10'>
            <img src={man} alt="" className='lg:mt-0 mt-4 rounded-xl  hover-effect'/>
            <img src={man2} alt="" className='lg:mt-0 mt-4 rounded-xl hover-effect'/>
            <img src={man3} alt="" className='lg:mt-0 mt-4 rounded-xl hover-effect'/>
            </div>
        </div>
    );
};

=======
import React from 'react';
import man from '../../../assets/man.jpg'
import man2 from '../../../assets/man2.jpg'
import man3 from '../../../assets/man3.jpg'
import './Professional.css'
const Professional = () => {
    return (
        <div className='m-5 mt-20'>
            <div className='lg:flex justify-between my-4'>
                <h1 className="text-4xl">Professional & full of <br /> <b>adventures of soul</b></h1>
                <p className="text-lg text-justify  lg:w-[500px]">It first considers Karl Popper's views regarding the different solutions developed by the Presocratics to address the problem of cosmic becoming before discussing the concept of psuchē .</p>
            </div>
            <div className='lg:grid grid-cols-3 gap-5'>
            <img src={man} alt="" className='lg:mt-0 mt-4 rounded-xl  hover-effect'/>
            <img src={man2} alt="" className='lg:mt-0 mt-4 rounded-xl hover-effect'/>
            <img src={man3} alt="" className='lg:mt-0 mt-4 rounded-xl hover-effect'/>
            </div>
        </div>
    );
};

>>>>>>> 6d2a2ddcf10cf48201a02a1d4e1789f924c86fec
export default Professional;