import './info.css'
import React from "react";
import ep from '../../../../assets/images/ep1.jpg'

const EpList = () => {
    return (
        <div className="info-container">
            <ul className='w-full md:flex md:flex-col md:items-center grid grid-cols-2 pl-5 md:gap-5'>
                <li className='w-11/12 flex flex-row items-center justify-center gap-10'>
                    <p className='md:block hidden text-3xl font-bold text-[#808080]'>1</p>
                    <div className='w-11/12 flex flex-col md:flex-row items-start md:gap-5'>
                        <img
                            src={ep}
                            alt='movie'
                            className='w-full md:w-1/5 rounded-xl'
                        />
                        <div className='w-full md:w-9/12'>
                            <p className='font-bold text-xl'>Tập 1</p>
                            <p className='w-full md:block hidden'>Bị trúng lời nguyền chết chóc, vị hoàng tử lên đường tìm cách hóa giải, để rồi rơi vào cuộc chiến giữa một thị trấn khai thác mỏ và các loài động vật trong rừng.</p>
                        </div>
                    </div>
                </li>
                <li className='w-11/12 flex flex-row items-center justify-center gap-10'>
                    <p className='md:block hidden text-3xl font-bold text-[#808080]'>1</p>
                    <div className='w-11/12 flex flex-col md:flex-row items-start md:gap-5'>
                        <img
                            src={ep}
                            alt='movie'
                            className='w-full md:w-1/5 rounded-xl'
                        />
                        <div className='w-full md:w-9/12'>
                            <p className='font-bold text-xl'>Tập 1</p>
                            <p className='w-full md:block hidden'>Bị trúng lời nguyền chết chóc, vị hoàng tử lên đường tìm cách hóa giải, để rồi rơi vào cuộc chiến giữa một thị trấn khai thác mỏ và các loài động vật trong rừng.</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default EpList;