import React from 'react'

const Video = (props?:any) => {

  // let {link, title, subtitle} = props.data;
  return (
    <>
    {
      props.data.map((items?:any,index?:number)=>{
        let {link, subtitle, title} = items;
        return (
          <div className='md:w-[300px] h-auto m-[30px] lg:w-[308px] p-1 rounded bg-white shadow-2xl pb-[10px] hover:scale-105 duration-100 ease-in-out'>
          <iframe src={link} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <div className='px-[10px]'>
          <p className='text-[14px] font-800 bg-red-300 py-0.5 pl-[9px] pr-2 w-[100px] shadow-lg'>{subtitle}</p>
          <p className='text-[16px] font-bold text-[#101828]  gap-[2px] line-clamp-2 md:px-[30px]'>{title}</p> 
          </div>
          </div>
        )
      })
    } 
    </>
  )
}
export default Video
