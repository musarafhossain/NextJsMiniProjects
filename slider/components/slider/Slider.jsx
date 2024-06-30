import React from 'react'
import { FaHome } from "react-icons/fa";
import { MdDashboard, MdOutlineHelpOutline } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import { TbPhoneCall } from "react-icons/tb";
import SliderItems from './SliderItems';

const Slider = ({isToggle}) => {
  return (
    <div className={`duration-300 border-r absolute md:static border-gray-300 slider-height bg-gray-100 ${isToggle?' w-72 ':' w-0 '}`}>
        <div className={`${isToggle?' block ':' hidden '} duration-200`}>
            <div className='text-nowrap flex flex-col py-5 px-2 gap-1'>
                <SliderItems Icon={FaHome} link='/' title='Home'/>
                <SliderItems Icon={MdDashboard} link='/dashboard' title='Dashboard'/>
                <SliderItems Icon={MdOutlineHelpOutline} link='/help' title='Help'/>
                <SliderItems Icon={FcAbout} link='/about-us' title='About Us'/>
                <SliderItems Icon={TbPhoneCall} link='/contact-us' title='Contact Us'/>
            </div>
        </div>
    </div>
  )
}

export default Slider