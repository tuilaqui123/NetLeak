import React, { useRef, useState, useEffect } from 'react';

const SearchInput = ({handleInputChange, query}) => {
return (
    <div className='flex justify-center pt-[7%] w-[120%]'>
    {/* <h2> Tìm kiếm</h2> */}
    <form onSubmit={e => { e.preventDefault(); }} className='w-[60%]'>
        <div className='mt-3 flex justify-between shadow-md border-2 boder-grey-200 rounded-lg w-[100%] h-[170%] text-white'>
        <input className='pl-3 w-full outline-none rounded-md bg-neutral-700 italic'
        type="text" 
        placeholder='Tìm tên phim, diễn viên,...'
        value={query}
        onChange={handleInputChange}/>
        
        </div>
    </form>
</div>
)
}
export default SearchInput
