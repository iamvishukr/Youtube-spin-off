import React, { useEffect } from 'react'
import { GOOGLE_API_KEY, YOUTUBE_SEARCH_RESULTS_API } from '../utils/constant';

const SearchList = () => {

    useEffect(() =>{
        search();
    },[]);
    const search = async () => {
        const data = await fetch(YOUTUBE_SEARCH_RESULTS_API + GOOGLE_API_KEY)
        const json = await data.json();
        console.log(json);
    }
  return (
    <div className=''>
        {/* <SearchList /> */}
    </div>
  )
}

export default SearchList