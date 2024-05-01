import React from 'react'
import './Genre.scss';
import TabPageSlide from '../../../components/TabPageSlide/TabPageSlide';
import TopSlide from '../../../components/TabPageSlide/TopSlide';
import GenreSlide from '../../../components/TabPageSlide/GenreSlide/GenreSlide';
export default function Genre({ Genre, setGenre }) {
  return (
    <div>
      {Genre == "" && (

        <div>
          <TopSlide />
          <TabPageSlide key={1} title={'Anime'} setGenre={setGenre} />
          <TabPageSlide title={'Horror'} setGenre={setGenre} />
          <TabPageSlide title={'Shoujo'} setGenre={setGenre} />
          <TabPageSlide title={'Shounen'} setGenre={setGenre} />
          <TabPageSlide title={'Hài hước'} setGenre={setGenre} />
          <TabPageSlide title={'Slice of Life'} setGenre={setGenre} />
          <TabPageSlide title={'Josei'} setGenre={setGenre} />
          <TabPageSlide title={'Isekai'} setGenre={setGenre} />
          <TabPageSlide title={'Romane'} setGenre={setGenre} />
          <TabPageSlide title={'Fantasy'} setGenre={setGenre} />
        </div>
      )}

      {
        Genre != "" && <GenreSlide Genre={Genre} setGerne={setGenre} /> // Khi chọn thể loại, sẽ hiện thành phần này
      }

    </div>
  )
}
