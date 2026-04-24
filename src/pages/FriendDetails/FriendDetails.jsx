import React, { use } from 'react';
import { FiArchive, FiPhoneCall, FiVideo } from 'react-icons/fi';
import { LuBellRing } from 'react-icons/lu';
import { MdDeleteOutline, MdEmail, MdOutlineTextsms } from 'react-icons/md';
import { useParams } from 'react-router';

const fetchData = fetch("/data.json").then(res => res.json());

const FriendDetails = () => {

    const {id} = useParams()
    console.log(id)

    const data = use(fetchData);

    const expectedFriend = data.find((d) => String(d.id) === id);
    console.log(expectedFriend)

    return (
        <div className='w-9/12 mx-auto mt-20 grid grid-cols-3 gap-6'>
            <div className='col-span-1 space-y-4'>
                <div className='bg-base-100 shadow-lg text-center p-6 rounded-xl space-y-3'>
                    <img src={expectedFriend.picture} className='w-24 h-24 rounded-full mx-auto' />

                    <h4 className='font-semibold text-xl text-green-900'>
                        {expectedFriend.name}
                    </h4>

                    <span className={`inline-block text-xs text-white rounded-full px-3 py-1 ${
                        expectedFriend.status === "Overdue"
                        ? "bg-red-500"
                        : expectedFriend.status === "Almost Due"
                        ? "bg-yellow-500"
                        : "bg-green-700"
                    }`}>
                        {expectedFriend.status}
                    </span>

                    <div className="flex justify-center gap-2 flex-wrap">
                        {expectedFriend.tags.map((tag, i) => (
                        <span key={i} className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                            {tag}
                        </span>
                        ))}
                    </div>

                    <p className='italic text-[#64748B]'>
                        "{expectedFriend.bio}"
                    </p>

                    <p className='flex items-center gap-1 justify-center text-sm text-[#64748B]'>
                        <MdEmail className='text-xl'/>{expectedFriend.email}
                    </p>
                </div>

                <button className='btn w-full bg-base-100 text-[#64748B]'>
                    <LuBellRing className='text-lg'/>Snooze 2 Weeks
                </button>

                <button className='btn w-full bg-base-100 text-[#64748B]'>
                    <FiArchive className='text-lg'/>Archive
                </button>

                <button className='btn w-full bg-base-100 text-red-500'>
                    <MdDeleteOutline className='text-2xl'/>Delete
                </button>
            </div>

            <div className='col-span-2 space-y-6'>
                <div className='grid grid-cols-3 gap-4'>
                
                    <div className='bg-base-100 shadow rounded-xl p-6 text-center'>
                        <h4 className='text-3xl font-bold text-green-900'>
                        {expectedFriend.days_since_contact}
                        </h4>
                        <p className='text-[#64748B]'>Days Since Contact</p>
                    </div>

                    <div className='bg-base-100 shadow rounded-xl p-6 text-center'>
                        <h4 className='text-3xl font-bold text-green-900'>
                        {expectedFriend.goal}
                        </h4>
                        <p className='text-[#64748B]'>Goal (Days)</p>
                    </div>

                    <div className='bg-base-100 shadow rounded-xl p-6 text-center'>
                        <h4 className='text-2xl font-bold text-green-900'>
                        {expectedFriend.next_due_date}
                        </h4>
                        <p className='text-[#64748B]'>Next Due</p>
                    </div>
                </div>

                <div className='bg-base-100 shadow rounded-xl p-6 flex justify-between items-center'>
                    <div>
                        <h4 className='text-lg font-semibold text-green-900'>
                        Relationship Goal
                        </h4>
                        <p className='text-[#64748B]'>
                        Connect every <span className='font-bold'>{expectedFriend.goal} days</span>
                        </p>
                    </div>

                    <button className='btn btn-sm'>Edit</button>
                </div>

                <div className='bg-base-100 shadow rounded-xl p-6'>
                    <h4 className='text-lg font-semibold text-green-900 mb-4'>
                        Quick Check-In
                    </h4>
                    <div className='grid grid-cols-3 gap-4'>
                        <button className='btn bg-base-200 flex flex-col h-20'><FiPhoneCall className='text-2xl'/>Call</button>
                        <button className='btn bg-base-200 flex flex-col h-20'><MdOutlineTextsms className='text-2xl'/>Text</button>
                        <button className='btn bg-base-200 flex flex-col h-20'><FiVideo className='text-2xl' />Video</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendDetails;