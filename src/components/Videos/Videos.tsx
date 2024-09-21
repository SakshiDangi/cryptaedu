import React from 'react'
import Video from './Video'

const Videos = (props?:any) => {
  return (
    <div className='flex flex-wrap items-center justify-center w-full '>
        <Video data={props.data}/>
    </div>
  )
}
export default Videos;