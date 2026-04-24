import React, { use } from 'react';
import { Link } from 'react-router';

const fetchData = fetch("/data.json").then(res => res.json());

const YourFriends = () => {

    const data = use(fetchData);

    return (
        <div className='w-9/12 mx-auto mt-20'>
            <h4 className='text-2xl font-semibold text-green-900'>Your Friends</h4>
            <div className='grid grid-cols-4 gap-3 mt-4'>
                {
                    data.map((d) => (
                        
                        <Link to={`/details/${d.id}`} key={d.id} className='bg-base-100 shadow-lg text-center p-8 rounded-lg space-y-2'>
                            <img className='rounded-full mx-auto' src={d.picture} alt="" /> 
                            <h4 className='font-semibold text-xl text-green-900'>{d.name}</h4>
                            <span className='text-[#64748B] text-xs'>{d.days_since_contact}d ago</span>
                            <div className="flex justify-center gap-2 mt-2">
                                {d.tags.map((tag, index) => (
                                <span
                                key={index}
                                className="text-xs bg-green-100 px-2 py-1 rounded"
                                >
                                {tag}
                                </span>
                            ))}
                            </div>
                            <p className={`inline-block text-xs text-white rounded-lg px-2 py-1 ${
                                d.status === "Overdue" ? "bg-red-500"
                                : d.status === "Almost Due" ? "bg-yellow-500"
                                : "bg-green-900"
                            }`}>{d.status}</p>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default YourFriends;