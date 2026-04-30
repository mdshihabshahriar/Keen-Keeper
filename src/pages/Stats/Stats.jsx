import React from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { useInteractions } from '../../layout/RootLayout';

const Stats = () => {
    const { interactions } = useInteractions();
     const data = [
        {name:"Call", value: interactions.filter(i => i.type === "Call").length, fill: "#0088FE"},
        {name:"Text", value: interactions.filter(i => i.type === "Text").length, fill: "#FF8042"},
        {name:"Video", value: interactions.filter(i => i.type === "Video").length, fill: "#00C49F"},
    ]
    const total = interactions.filter(i => i.type === "Call").length + interactions.filter(i => i.type === "Text").length + interactions.filter(i => i.type === "Video").length

    if (total === 0) {
        return (
            <div className="w-9/12 mx-auto mt-10 min-h-[60vh] flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-500">
                        No Data Yet
                    </h2>
                    <p className="text-gray-400 mt-2">
                        Start interacting with your friends to see analytics.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className='w-9/12 md:w-7/12 mx-auto mt-10 min-h-[60vh]'>
            <h2 className='text-3xl md:text-4xl font-bold text-green-900 mt-4'>Friendship Analytics</h2>
            <div className='shadow-xs p-10 rounded-lg border border-gray-300 mt-10'>
                <h4 className='text-xl font-medium text-green-900'>By Interaction Type</h4>
                <PieChart className='mx-auto' style={{ width: '100%', maxWidth: '300px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
                <Pie
                    data={data}
                    innerRadius="80%"
                    outerRadius="100%"
                    // Corner radius is the rounded edge of each pie slice
                    cornerRadius="50%"
                    fill="#8884d8"
                    // padding angle is the gap between each pie slice
                    paddingAngle={5}
                    dataKey="value"
                    isAnimationActive={true}
                />
                <Legend></Legend>
                <Tooltip></Tooltip>
                </PieChart>
            </div>
            <div className='grid grid-cols-3 mt-5 gap-3'>
                <div className='border border-gray-300 shadow-xs rounded-lg p-6 text-center'>
                    <p className='text-[#0088FE] text-3xl font-bold'>{interactions.filter(i => i.type === "Call").length}</p>
                    <p className='text-[#64748B]'>Calls</p>
                </div>
                <div className='border border-gray-300 shadow-xs rounded-lg p-6 text-center'>
                    <p className='text-[#FF8042] text-3xl font-bold'>{interactions.filter(i => i.type === "Text").length}</p>
                    <p className='text-[#64748B]'>Texts</p>
                </div>
                <div className='border border-gray-300 shadow-xs rounded-lg p-6 text-center'>
                    <p className='text-[#00C49F] text-3xl font-bold'>{interactions.filter(i => i.type === "Video").length}</p>
                    <p className='text-[#64748B]'>Videos</p>
                </div>
            </div>
            <div className='text-center mt-3'>
                <p className='text-[#64748B] font-semibold'>Total Interactions: {total}</p>
            </div>
        </div>
    );
};

export default Stats;