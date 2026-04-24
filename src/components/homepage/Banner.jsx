import React from 'react';

const Banner = () => {
    return (
        <div className='min-h-[10vh] text-center mt-20 space-y-4'>
            <h2 className='font-bold text-5xl'>Friends to keep close in your life</h2>
            <p className='text-[#64748B] md:w-150 mx-auto'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
            <button className='btn bg-green-900 text-white font-semibold'>+ Add a Friend</button>
        </div>
    );
};

export default Banner;