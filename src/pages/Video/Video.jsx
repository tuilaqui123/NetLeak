import './Video.css'
import React, { useEffect, useRef, useState } from 'react'

import video1 from '../../assets/video/video.mp4'
import m1 from '../../assets/movies/1.jpg'

import Navbar from '../../components/Navbar/Navbar'
import Footer from './Footer'
import SelectEpisode from './SelectEpisode'
import ActorSlide from './ActorSlide'
import RecommendedFilm from './RecommendedFilm'
import FilmInfor from './FilmInfor'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleUp, faBookmark, faShareNodes } from '@fortawesome/free-solid-svg-icons';

const SELECT_EPISODE_WIDTH = '300px'

const Video = () => {
    const [invisibleBackToHeadPage, setInvisibleBackToHeadPage] = useState(true)

    //render 
    const videoContainer = useRef(null)
    const SelectEpisodeContainer = useRef(null)

    const video = useRef(null)

    const textHeaderSelectEpisode = useRef(null)

    const selectEpisode = useRef(null)

    useEffect(() => {
        if (SelectEpisodeContainer.current != null) {
            let SelectEpisodeContainerTemp = SelectEpisodeContainer.current.clientWidth
            videoContainer.current.style.width = `calc(100% - ${SelectEpisodeContainerTemp}px)`
        }

        selectEpisode.current.style.height = `calc(100% - ${textHeaderSelectEpisode.current.clientHeight}px)`
    }, [])
    //

    
    useEffect(() => {
        const handleWindowResize = () => {
            selectEpisode.current.style.height = `calc(100% - ${textHeaderSelectEpisode.current.clientHeight}px)`
    
            SelectEpisodeContainer.current.style.height = `${videoContainer.current.clientHeight}px`
    
            if (SelectEpisodeContainer.current != null) {
                let SelectEpisodeContainerTemp = SelectEpisodeContainer.current.clientWidth
                videoContainer.current.style.width = `calc(100% - ${SelectEpisodeContainerTemp}px)`
            }
        }
    
        const handleWindowScroll = () => {
            window.scrollY <= 700 ? setInvisibleBackToHeadPage(true) : setInvisibleBackToHeadPage(false)
        }

        window.addEventListener('resize', handleWindowResize)
        window.addEventListener('scroll', handleWindowScroll)

        video.current.addEventListener('loadeddata', (e) => {
            if (video.current.readyState >= 3) {
                SelectEpisodeContainer.current.style.height = `${videoContainer.current.clientHeight}px`
            }

        });

        return () => {
            window.removeEventListener('resize', handleWindowResize)
            window.removeEventListener('scroll', handleWindowScroll)
        }
    }, [])


    //fake data
    const [currentFilm, setCurrentFilm] = useState(() => {
        let temp = {
            imageFilm: m1,
            name: "Anh Phát muốn đi ngược chiều gió",
            episodes: [],
            rating: {
                quantity: 856000,
                average: 9.5
            },
            age: 50,
            yearOfProduction: 2050,
            types: ['vui vẻ', 'lãng mạn', 'ngôn tình', 'Trung Quốc', 'hành động', 'thanh xuân', 'tổng tài bá đạo', 'gia đình'],
            description: `Miêu tả: Tôi Muốn Đi Ngược Chiều Gió là một bộ phim truyền hình đương đại về môi trường công việc đô thị, do Triệu Nhất Long đạo diễn, với sự tham gia của các diễn viên Cung Tuấn ,Chung Sở Hi và các diễn viên khác. Bộ phim được chuyển thể từ tiểu thuyết cùng tên Vị Tại. Kể câu chuyện về sự hồi sinh của một thương hiệu quốc gia dưới tác động của nền kinh tế thương mại điện tử Từ Tư (Cung Tuấn thủ vai), một nhà đầu tư từ công ty ngân hàng đầu tư ở Hong Kong chuyển sang công ty đầu tư nội địa, gặp gỡ Giang Hồ (Chung Sở Hi thủ vai), con gái độc nhất của Chủ tịch tập đoàn thời trang quốc gia. Hai người do có quan điểm kinh doanh khác nhau nên không hòa hợp. Doanh nghiệp của cha Giang Hồ đột nhiên phá sản, cô gái từ một người giàu có trở thành một người khốn khổ. Trong khi đó, Từ Tư luôn quan tâm đến thương hiệu giày cao cấp "Đằng Nhạc" mà cha của Giang Hồ đã xây dựng, khiến cô quyết định làm mọi cách để bảo vệ "Đằng Nhạc". Sau nhiều vòng đàm phán, cuối cùng Từ Tư và Giang Hồ có thể làm mới "Đằng Nhạc" hay không, câu chuyện này sẽ quyết định số phận của họ... Bộ phim này sẽ được phát sóng trực tuyến trên iQIYI Quốc tế(iq.com).
            Giới thiệu tập: Tôi Muốn Đi Ngược Chiều Gió (Rising With The Wind) kể về Giang Hồ, một đại tiểu thư lớn lên dưới sự bao bộc của người cha là Giang Kỳ Thắng chủ tịch tập đoàn thời trang Hồng Kỳ. Mặc dù có chỗ dựa lớn nhưng Giang Hồ vẫn là một cô gái mạnh mẽ, có ý chí, có sự thông minh lẫn kiêu ngạo. Sau khi cha của Giang Hồ đột ngột qua đời, gia đình gặp phải biến cố lớn, cô vẫn giữ dáng vẻ bình tĩnh để tiếp tục lèo lái cơ ngơi còn lại. Trong một chuyến họp mặt hội doanh nhân tại Nhật Bản, Giang Hồ gặp lại một người quen cũ là Từ Tư. Từ Tư là con trai độc tôn duy nhất của tập đoàn Từ Phong. Một chàng trai phong độ, tài ba và khiêm tốn. Ngay từ lần đầu gặp mặt, Từ Tư đã bị rung động trước vẻ duyên dáng của Giang Hồ, bây giờ gặp lại cô đã khác xưa đôi chút, tuy nhiên vẫn là cô gái mà Từ Tư mơ ước. Đêm đó, Giang Hồ và Từ Tư đã đi quá giới hạn với nhau, rồi cô đột nhiên nhớ về biến cố đau thương và có ý định tự vẫn nhưng được Từ Tư cứu. Sau lần đó, Giang Hồ đã vực dậy được tinh thần, nhưng cô lại không ngờ khi quay về tất cả cơ ngơi đã không còn trong tầm kiểm soát. Vì tranh thủ cơ hội giữ lại thương hiệu giày cuối cùng của tập đoàn Hồng Kỳ, Giang Hồ đã phải thực hiện một thỏa thuận với Từ Tư. Trong ván cờ này, có thể hay không thể đạt được nguyện vọng? Giang Hồ không nắm chắc, cô chỉ biết ngược gió mà đi rồi mong đợi sẽ đi đến hướng mặt trời mọc!
            Tên gọi khác: Tôi Muốn Ngược Gió Mà Đi`,
            actors: [
                { actorName: 'Ngô Võ Quang Minh', image: m1 },
                { actorName: 'Phạm Ngọc Quí', image: m1 },
                { actorName: 'Nguyễn Võ Hoàng Huy', image: m1 },
                { actorName: 'Trần Nhựt Phát', image: m1 },
                { actorName: 'Trần Tuấn Minh', image: m1 },
                { actorName: 'Nguyễn Thị Thu Hương', image: m1 },
            ]

        }

        for (let i = 1; i < 90; i++) {
            temp.episodes.push({
                number: i,
                name: "Anh Phát muốn đi ngược chiều gió tập " + i
            })
        }

        return temp
    })

    const [otherFilms, setOtherFilms] = useState([
        { name: 'Sắc màu pháo hoa nhân gian', episodeQuantity: 23, image: m1 },
        { name: 'Kẻ hủy diệt Java', episodeQuantity: 56, image: m1 },
        { name: 'Nhân viên tài năng Đổng Đồng Ân', episodeQuantity: 24, image: m1 },
        { name: 'Doraemon', episodeQuantity: 1000, image: m1 },
        { name: 'Mặc Bạch', episodeQuantity: 30, image: m1 },
        { name: 'Tuyển tập những bài văn mẫu của Phát Trần', episodeQuantity: 9999, image: m1 },
        { name: 'Giải tích lofi', episodeQuantity: 12, image: m1 },
        { name: 'Cô ấy đẹp nhất hữu nhị', episodeQuantity: 18, image: m1 },
        { name: 'Tạm biệt bạch nguyệt quang', episodeQuantity: 56, image: m1 },
        { name: 'Người phiên dịch của chúng tôi', episodeQuantity: 35, image: m1 },
    ])
    /////////
    return (
        <div className='w-full flex flex-col items-center bg-[#111319] relative px-[15px] lg:px-16'>
            <Navbar />

            <div className={`flex justify-center max-h-[600px] w-full mt-24 items-start bg-[#1A1C22]`}>
                <div ref={videoContainer}>
                    <div className='w-full'>
                        <video
                            ref={video}
                            controls
                            id="myvideo"
                            loop={true}
                            className=" w-full max-h-[556px] videosize object-cover"
                        >
                            <source src={video1} type='video/mp4' />
                            <source src={video1} type='video/mp4' />
                        </video>
                    </div>

                    <div className=' h-11 items-center mx-8 text-white/[.7] flex' >
                        <div className='group flex items-center mr-5'>
                            <FontAwesomeIcon icon={faBookmark} size="lg" className='hidden lg:block group-hover:text-[red] group-hover:brightness-[1.2] group-hover:cursor-pointer group-hover:transition-all opacity-60 mr-3' />
                            <FontAwesomeIcon icon={faBookmark} size="sm" className='lg:hidden group-hover:text-[red] group-hover:brightness-[1.2] group-hover:cursor-pointer group-hover:transition-all opacity-60 mr-3' />

                            <p className='text-[15px] lg:text-[15px] group-hover:text-[red] group-hover:brightness-[1.2] group-hover:cursor-pointer group-hover:transition-all'>Sưu tập</p>
                        </div>

                        <div className='group flex items-center'>
                            <FontAwesomeIcon icon={faShareNodes} size="lg" className='hidden lg:block group-hover:brightness-[1.2] group-hover:cursor-pointer group-hover:text-[red] hover:transition-all opacity-60 mr-3' />
                            <FontAwesomeIcon icon={faShareNodes} size="sm" className='lg:hidden group-hover:brightness-[1.2] group-hover:cursor-pointer group-hover:text-[red] hover:transition-all opacity-60 mr-3' />

                            <p className='text-[15px] lg:text-[15px] group-hover:brightness-[1.2] group-hover:cursor-pointer group-hover:text-[red] hover:transition-all'>Chia sẻ</p>
                        </div>
                    </div>
                </div>

                <div ref={SelectEpisodeContainer} className={`ml-3 text-white bg-[#1A1C22] w-[300px] h-full hidden lg:block`}>
                    <button ref={textHeaderSelectEpisode}
                        className='hover:text-[red] hover:transition-all text-start w-full 
                    inline-block text-xl font-bold capitalize p-4'
                    >
                        {currentFilm.name}
                    </button>

                    <SelectEpisode ref={selectEpisode} currentFilm={currentFilm}/>
                </div>
            </div>

            <div className='lg:flex mt-6 w-full md:w-[92%] lg:w-full md:mx-4 lg:mx-0'>
                <div className={`lg:mr-5 w-full lg:w-[calc(100%-300px)]`}>
                    <button className=' text-white text-start text-[20px] md:text-[25px] lg:text-[28px] font-bold capitalize hover:text-[red]'>{currentFilm.name} {'>'}</button>
                    <span className='text-white/[.7] text-start text-[20px] md:text-[25px] lg:text-[28px] font-bold'>   Tập {currentFilm.episodes[0].number}</span>

                    <FilmInfor currentFilm={currentFilm} />

                    <ActorSlide currentFilm={currentFilm} />

                    <div className='lg:hidden mb-[20px] h-[400px]'>
                        <SelectEpisode currentFilm={currentFilm} />
                    </div>

                    <div className=' w-full h-[1px] bg-white/[.2] hidden lg:block'></div>

                    <RecommendedFilm otherFilms={otherFilms} currentFilm={currentFilm} />

                </div>

                <div className='w-[100%] mb-5 lg:hidden'>
                    <p className=' ml-8 text-white text-[18px] lg:text-[24px] font-bold capitalize mb-4'>Bảng xếp hạng</p>

                    {otherFilms.map((film, index) => (
                        <div key={index} className='hover:bg-[#24262B] hover:cursor-pointer rounded-[8px] transition-all'>
                            <div className=' ml-8 pt-2 pb-2 '>
                                <div className='flex '>
                                    <p className=' opacity-100 text-[#DC143C] font-bold'>{index + 1}</p>
                                    <p className=' text-white opacity-[0.80] text-[15px] ml-3 expandText1Row' >{film.name}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* responsive PC */}
                <div className={`w-[300px] mb-5 hidden lg:block`}>
                    <p className=' ml-8 text-white text-[24px] font-bold capitalize mb-4'>Bảng xếp hạng</p>

                    {otherFilms.map((film, index) => (
                        <div key={index} className='group hover:bg-[#24262B] hover:cursor-pointer rounded-[8px] transition-all'>
                            <div className=' ml-8 pt-2 pb-2 '>
                                <div className='flex '>
                                    <p className=' opacity-100 text-[#DC143C] font-bold'>{index + 1}</p>
                                    <p className=' text-white opacity-[0.80] text-[15px] ml-3 expandText1Row' >{film.name}</p>
                                </div>

                                <img className='hidden group-hover:block rounded-[8px] w-[25%] ml-5 mt-2' src={film.image} alt="Ảnh phim" />
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            <div className=' w-full h-[1px] bg-white/[.2]'></div>

            <Footer />

            {invisibleBackToHeadPage == false &&
                <div
                    onClick={() => {
                        window.scroll({
                            top: 0,
                            left: 0,
                            behavior: 'smooth'
                        });
                    }}
                    className='hover:cursor-pointer hover:brightness-[1.25] transition-all justify-center items-center 
                    fixed bottom-[100px] right-[100px] bg-[#24262B] 
                    rounded-[50%] w-[50px] h-[50px] hidden lg:flex'>
                    <FontAwesomeIcon icon={faAngleUp} size='xl' className=' text-[#FF4500]' />
                </div>
            }
        </div>
    );
}

export default Video;