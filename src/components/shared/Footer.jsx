import React from 'react';
import footerLogo from "../../assets/logo-xl.png"
import { FaFacebookSquare } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='mt-20 bg-[#244D3F]'>
            <div className='text-center space-y-4'>
                <img src={footerLogo} className='mx-auto pt-20' alt="" />
                <p className='text-white text-[16px]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <p className='text-white text-xl font-medium'>Social Links</p>
                <div className='flex justify-center gap-3'>
                    <AiFillInstagram className='bg-white rounded-full p-1 text-3xl' />
                    <FaFacebookSquare className='bg-white rounded-full p-1 text-3xl' />
                    <FaXTwitter className='bg-white rounded-full p-1 text-3xl' />
                </div>
            </div>
            <div className='w-9/12 mx-auto mt-4'>
                <div className="divider"></div>
                <div className='flex justify-between pb-7'>
                    <div>
                        <p className='text-[#FAFAFA] text-[16px]'>© 2026 KeenKeeper. All rights reserved.</p>
                    </div>
                    <div className='text-[#FAFAFA] flex gap-5 list-none'>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                        <li>Cookies</li>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;