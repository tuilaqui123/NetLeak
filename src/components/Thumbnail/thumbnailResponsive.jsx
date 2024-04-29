import React from "react";
import thumb_pic from '../../assets/images/thumbnail.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPlus } from '@fortawesome/free-solid-svg-icons'
const ThumbnailRes = () => {
    return (
        <div className=" md:hidden block  w-full mt-[100px] mb-10 relative">
            <img
                src={thumb_pic}
                className="h-auto w-full brightness-90"
            />
            <div className="w-full h-full absolute top-0 flex flex-col justify-end pb-5 pl-3">
                <h1 className='text-2xl md:text-5xl font-bold text-white mt-5 mb-10'>VIOLET EVERGARDEN</h1>
                <div className='w-full flex flex-row gap-5'>
                    <button className='w-1/4 h-[50px] flex flex-row items-center justify-center gap-3 rounded-md bg-white group hover:bg-[#ff0000] duration-150'>
                        <FontAwesomeIcon icon={faPlay} className='text-black group-hover:text-white duration-150' />
                        <p className="text-black font-bold group-hover:text-white duration-150">Phát</p>
                    </button>
                    <button className='w-1/4 h-[50px] flex flex-row items-center justify-center gap-3 rounded-md bg-white group hover:bg-[#ff0000] duration-150'>
                        <FontAwesomeIcon icon={faPlus} className='text-black group-hover:text-white duration-150' />
                        <p className="text-black font-bold group-hover:text-white duration-150">Danh sách</p>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ThumbnailRes;