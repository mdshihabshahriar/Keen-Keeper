import { useInteractions } from '../../layout/RootLayout';
import videoImg from "../../assets/video.png"
import callImg from "../../assets/call.png"
import textImg from "../../assets/text.png"
import { MdOutlineInbox } from 'react-icons/md';
import { IoIosArrowDown } from 'react-icons/io';
import { useState } from 'react';

const typeEmoji = { Call: callImg, Text: textImg, Video: videoImg };

const Timeline = () => {
    const { interactions } = useInteractions();
    const [filterType, setFilterType] = useState("");

    const filteredInteractions = filterType
    ? interactions.filter(item => item.type === filterType)
    : interactions;

    return (
        <div className='w-9/12 mx-auto mt-20 min-h-[40vh]'>
            <h2 className='text-3xl font-bold mb-6'>Timeline</h2>
            <div className="dropdown dropdown-start pb-3">
                <div tabIndex={0} role="button" className="btn m-1">{filterType ? filterType : "Filter Timeline"} <IoIosArrowDown /></div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a onClick={() => setFilterType("Call")}>Call</a></li>
                    <li><a onClick={() => setFilterType("Text")}>Text</a></li>
                    <li><a onClick={() => setFilterType("Video")}>Video</a></li>
                </ul>
            </div>
            <div className='space-y-3'>
                {filteredInteractions.length === 0 && (
                <div className="flex items-center justify-center min-h-[60vh]">
                    <div className="text-center bg-white shadow-md rounded-2xl p-8 max-w-sm w-full">
                    
                    <div className="text-5xl mb-4 flex justify-center"><MdOutlineInbox /></div>


                    <h2 className="text-xl font-semibold text-gray-700 mb-2">
                        No Interactions Yet
                    </h2>

                    <p className="text-gray-500 text-sm mb-4">
                        Go to a friend's profile and start a Call, Text, or Video interaction.
                    </p>

                    </div>
            </div>
)}
                {filteredInteractions.map(item => (
                    <div key={item.id} className='bg-base-100 shadow rounded-xl p-4 flex items-center gap-4'>
                        <img src={typeEmoji[item.type]} className='w-10 h-10' />
                        <div>
                            <p className='font-semibold text-green-900'>
                                {item.type} <span className='text-gray-400 font-normal'>with {item.friendName}</span>
                            </p>
                            <p className='text-sm text-gray-400'>{item.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Timeline;