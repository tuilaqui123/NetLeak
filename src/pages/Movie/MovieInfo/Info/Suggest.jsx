import React from 'react';
import './info.css'
import image from '../../../../assets/images/ep1.jpg'

const Suggest = () => {
    return (
        <div className='info-container'>
            <ul className='w-[90%] h-full grid-cols-2 grid md:grid-cols-3 lg:grid-cols-4 gap-5 suggest-container'>
                <li>
                    <img
                        src={image}
                        alt='movie'
                    />
                    <div className='suggest-movie-content'>
                        <ul className='tag'>
                            <li>18+</li>
                            <li>HD</li>
                            <li>2022</li>
                        </ul>
                        <p className='suggest-content'>Bị trúng lời nguyền chết chóc, vị hoàng tử lên đường tìm cách hóa giải, để rồi rơi vào cuộc chiến giữa một thị trấn khai thác mỏ và các loài động vật trong rừng.</p>
                    </div>
                </li>
                <li>
                    <img
                        src={image}
                        alt='movie'
                    />
                    <div className='suggest-movie-content'>
                        <ul className='tag'>
                            <li>18+</li>
                            <li>HD</li>
                            <li>2022</li>
                        </ul>
                        <p className='suggest-content'>Bị trúng lời nguyền chết chóc, vị hoàng tử lên đường tìm cách hóa giải, để rồi rơi vào cuộc chiến giữa một thị trấn khai thác mỏ và các loài động vật trong rừng.</p>
                    </div>
                </li>
                <li>
                    <img
                        src={image}
                        alt='movie'
                    />
                    <div className='suggest-movie-content'>
                        <ul className='tag'>
                            <li>18+</li>
                            <li>HD</li>
                            <li>2022</li>
                        </ul>
                        <p className='suggest-content'>Bị trúng lời nguyền chết chóc, vị hoàng tử lên đường tìm cách hóa giải, để rồi rơi vào cuộc chiến giữa một thị trấn khai thác mỏ và các loài động vật trong rừng.</p>
                    </div>
                </li>
                <li>
                    <img
                        src={image}
                        alt='movie'
                    />
                    <div className='suggest-movie-content'>
                        <ul className='tag'>
                            <li>18+</li>
                            <li>HD</li>
                            <li>2022</li>
                        </ul>
                        <p className='suggest-content'>Bị trúng lời nguyền chết chóc, vị hoàng tử lên đường tìm cách hóa giải, để rồi rơi vào cuộc chiến giữa một thị trấn khai thác mỏ và các loài động vật trong rừng.</p>
                    </div>
                </li>
                <li>
                    <img
                        src={image}
                        alt='movie'
                    />
                    <div className='suggest-movie-content'>
                        <ul className='tag'>
                            <li>18+</li>
                            <li>HD</li>
                            <li>2022</li>
                        </ul>
                        <p className='suggest-content'>Bị trúng lời nguyền chết chóc, vị hoàng tử lên đường tìm cách hóa giải, để rồi rơi vào cuộc chiến giữa một thị trấn khai thác mỏ và các loài động vật trong rừng.</p>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Suggest;