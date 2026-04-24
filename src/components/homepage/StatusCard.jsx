import React, { use } from 'react';

const fetchData = fetch("/data.json").then((res) => res.json());

const StatusCard = () => {

    const data = use(fetchData)

    const onTrack = data.filter(item => item.status === "On-Track").length;
    // const almostDue = data.filter(item => item.status === "almost due").length;
    const overdue = data.filter(item => item.status === "Overdue").length;

    return (
        <div className='w-9/12 grid grid-cols-4 gap-3 mx-auto mt-10'>
            <div className='p-8 shadow-lg bg-base-100 text-center rounded-xl'>
                <h3 className='font-semibold text-3xl text-green-900'>{data.length}</h3>
                <p className='text-[#64748B] text-lg'>Total Friends</p>
            </div>
            <div className='p-8 shadow-lg bg-base-100 text-center rounded-xl'>
                <h3 className='font-semibold text-3xl text-green-900'>{onTrack}</h3>
                <p className='text-[#64748B] text-lg'>On Track</p>
            </div>
            <div className='p-8 shadow-lg bg-base-100 text-center rounded-xl'>
                <h3 className='font-semibold text-3xl text-green-900'>{overdue}</h3>
                <p className='text-[#64748B] text-lg'>Need Attention</p>
            </div>
            <div className='p-8 shadow-lg bg-base-100 text-center rounded-xl'>
                <h3 className='font-semibold text-3xl text-green-900'>8</h3>
                <p className='text-[#64748B] text-lg'>Interactions This Month</p>
            </div>
        </div>
    );
};

export default StatusCard;