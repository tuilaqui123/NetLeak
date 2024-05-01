import React, { useEffect, useRef, useState, forwardRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faTableCells } from '@fortawesome/free-solid-svg-icons';

function SelectEpisode({ currentFilm }, ref) {
    const [pickBtn, setPickBtn] = useState(1)
    const [pickFilmLists, setFilmLists] = useState(1)
    const [typeFilmLists, setTypeFilmLists] = useState(true)

    //render
    const episodeContainer = useRef()

    const typeChoseEpisodeContainer = useRef()
    const typeSelectEpisodeContainer = useRef()
    const typeSpecialContentContainer = useRef()

    useEffect(() => {
        if (pickBtn == 1) {
            typeSelectEpisodeContainer.current.style.height = `calc(100% - (${typeSelectEpisodeContainer.current.offsetTop}px - ${typeChoseEpisodeContainer.current.offsetTop}px))`

            episodeContainer.current.style.height = `calc(100% - (${episodeContainer.current.offsetTop}px - ${typeChoseEpisodeContainer.current.offsetTop}px - ${typeChoseEpisodeContainer.current.offsetHeight}px))`
        }

    }, [pickBtn])
    //

    useEffect(() => {
        const handleWindowResize = () => {
            if (pickBtn == 1) {
                typeSelectEpisodeContainer.current.style.height = `calc(100% - (${typeSelectEpisodeContainer.current.offsetTop}px - ${typeChoseEpisodeContainer.current.offsetTop}px))`
    
                episodeContainer.current.style.height = `calc(100% - (${episodeContainer.current.offsetTop}px - ${typeChoseEpisodeContainer.current.offsetTop}px - ${typeChoseEpisodeContainer.current.offsetHeight}px))`
            }
        }

        window.addEventListener('resize', handleWindowResize)

        return () =>{
            window.removeEventListener('resize', handleWindowResize)
        }
    },[])

    return (
        <div ref={ref} className=' w-full bg-[#1A1C22] h-full lg:h-auto'>
            {/* <div ref={selectEpisode} className=' w-full bg-[#1A1C22]'> */}
            <div className='flex' ref={typeChoseEpisodeContainer}>
                <div className='flex flex-1 '>
                    <div className={`${pickBtn == 1 ? 'bg-[#2d2f34]/[1]' : 'bg-[#2d2f34]/[.4]'}  h-10 flex-1`}>
                        <p onClick={() => { setPickBtn(1) }} className={`${pickBtn == 1 ? 'text-[#ff1e00] font-bold' : 'text-white'}
                         hover:text-[#FF0000] hover:transition-colors hover:cursor-pointer leading-10 text-center text-[16px]
                          opacity-70`}>Chọn tập</p>
                    </div>

                    <div className={`${pickBtn == 1 ? 'border-b-[#2d2f34]/[1]' : 'border-b-[#2d2f34]/[.4]'}
                     w-0  border-r-[10px] border-solid border-r-transparent border-b-[40px] `}></div>
                </div>

                <div className=' flex flex-1'>
                    <div className={`${pickBtn == 2 ? 'border-b-[#2d2f34]/[1]' : 'border-b-[#2d2f34]/[.4]'} 
                    w-0  border-l-[10px] border-solid border-l-transparent border-b-[40px] `}
                    >
                    </div>

                    <div className={`${pickBtn == 2 ? 'bg-[#2d2f34]/[1]' : 'bg-[#2d2f34]/[.4]'}  flex-1 h-10`}>
                        <p onClick={() => { setPickBtn(2) }} className={`${pickBtn == 2 ? 'text-[#ff1e00] font-bold' : 'text-white'} 
                        hover:text-[#FF0000] hover:transition-colors hover:cursor-pointer 
                        leading-10 text-center text-[16px] opacity-70`}
                        >
                            Nội dung đặc sắc
                        </p>
                    </div>
                </div>
            </div>

            {pickBtn == 1 &&
                <div ref={typeSelectEpisodeContainer}>
                    <div className='flex justify-between px-4 mb-6 mt-4'>
                        <p className='text-[13px] text-white'>Chọn tập {currentFilm.episodes[0].number} - {currentFilm.episodes.length}</p>

                        {typeFilmLists ?
                            <FontAwesomeIcon
                                onClick={() => {
                                    setTypeFilmLists(!typeFilmLists)
                                    setFilmLists(2)
                                }}
                                className=' hover:cursor-pointer opacity-60 text-white' icon={faList} size="lg"
                            />
                            :
                            <FontAwesomeIcon
                                onClick={() => {
                                    setTypeFilmLists(!typeFilmLists)
                                    setFilmLists(1)
                                }}
                                icon={faTableCells}
                                className=' hover:cursor-pointer opacity-60 text-white' size="lg"
                            />
                        }
                    </div>


                    <div ref={episodeContainer} className='overflow-y-scroll'>
                        <p className='text-[13px] opacity-55 px-4 text-white'>Thành viên VIP xem toàn tập</p>

                        {pickFilmLists == 1 && <div className=' grid grid-cols-10 md:grid-cols-12 lg:grid-cols-5 mt-3 gap-y-4 pl-2'>
                            {currentFilm.episodes.map((episode, index) => (
                                <button className='hover:brightness-[1.5] hover:text-[#A52A2A] text-white bg-[#2d2f34] w-9 h-9 lg:w-10 lg:h-10 rounded-md hover:transition-colors font-bold' key={index}>{index + 1}</button>
                            ))}

                        </div>
                        }

                        {pickFilmLists == 2 && <div className='pl-2 mt-2'>
                            {currentFilm.episodes.map((episode, index) => (
                                <div key={index} className='flex items-center mt-4 mb-4 hover:bg-[#2d2f34] hover:cursor-pointer'>
                                    <img loading='lazy' src={currentFilm.imageFilm} className='w-full h-[60px] rounded-[7px] flex-[2] mr-3 object-cover' alt="Ảnh phim" />

                                    <p className='text-white text-[13px] flex-[3] mr-6'>{episode.name}</p>
                                </div>
                            ))}
                        </div>
                        }
                    </div>
                </div>
            }

            {pickBtn == 2 && <div>
                <p className=' text-white text-center'>Anh Phát chúa mõm khing người</p>
            </div>}
        </div>
    )
}
export default forwardRef(SelectEpisode)