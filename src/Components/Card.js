import React from 'react'
import '../index.css'
function Card({menudata}) {
  return (
    <>
    <div className='flex justify-center mt-10'>
    <div className='grid place-content-center max-[960px]:grid-cols-1 max-[1500px]:grid-cols-2 grid-cols-3 gap-14'>
    {
            menudata.map((curelem)=>{
                const {id,name,catagory,image,description}=curelem;
                return <>
                    <div className='h-[650px] w-[450px] max-[470px]:w-[400px] max-[420px]:w-[350px]  bg-[#fff] border shadow-lg flex flex-col p-9'>
      <span className='h-10 w-10 text-[#aaa] border border-[#aaa] rounded-full flex justify-center items-center mb-2'>{id}</span>
                                            <span className='text-[#aaa] text-xl'>{name}</span>
                                            <h2 className='card-title'>{name}</h2>
                                            <span className='text-[#aaa] text-md mt-1 mb-2'>
                                            {description}
                                            </span>
                                            <div className='card-read '>read</div>
                                            <img src={image} className='card-media ' />
                                            <div className='flex justify-end'>
                                            <span className='card-tag h-10 w-36 text-[#989393] border-2 border-[#ccc9c9]  flex  justify-center mt-6 items-center   text-xl cursor-pointer hover:bg-[#ccc9c9] hover:text-white'>Visit now</span>
                                            </div>
      </div>
                </>
            })
        }
      </div> 
      </div>
    </>
  )
}

export default Card
