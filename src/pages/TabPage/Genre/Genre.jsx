import React from 'react'
import './Genre.scss';
import TabPageSlide from '../../../components/TabPageSlide/TabPageSlide';
import TopSlide from '../../../components/TabPageSlide/TopSlide';
import GenreSlide from '../../../components/TabPageSlide/GenreSlide/GenreSlide';
export default function Genre({Genre}) {
  return (
    <div>
      {Genre == "" && (

        <div>
           <TopSlide/>
                <TabPageSlide title={'Anime'} />
                <TabPageSlide title={'Horror'} />
                <TabPageSlide title={'Shoujo'} />
                <TabPageSlide title={'Shounen'} />
                <TabPageSlide title={'Hài hước'} />
                <TabPageSlide title={'Slice of Life'} />
                <TabPageSlide title={'Josei'} />
                <TabPageSlide title={'Isekai'} />
                <TabPageSlide title={'Romane'}/>
                <TabPageSlide title={'Fantasy'}/>
          </div>
      )}

      {
        Genre!= "" &&   <GenreSlide Genre={Genre} /> // Khi chọn thể loại, sẽ hiện thành phần này
      }
    
    </div>
  )
}
