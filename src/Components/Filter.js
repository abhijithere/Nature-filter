import React from 'react'

function Filter({filteritem,menulist}) {
  return (
    <>
    <div className='mt-14 text-center btn-group '>
        {
            menulist.map((curelam)=>{
                return <>
                      <button className=' bg-white btn-group__item' onClick={()=>filteritem(curelam)}>{curelam}</button>
                </>
            })
        }    
      </div>
    </>
  )
}

export default Filter
