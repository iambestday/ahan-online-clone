import React from 'react'

function Products() {
  return (
    <div className='flex flex-col sm:flex-row justify-between my-2 '>
        <div className='max-h-screen sm:w-2/5 sm:ml-2 border h-80 border-solid rounded-md p-2'>
      
        <p className="text-sm	 font-semibold mb-2">انتخاب محصول</p>
        <div className='grid grid-cols-6 sm:grid-cols-12 grid-rows-6  gap-1'>
 
             <div className="bg-zinc-200 h-10 w-10"></div>
             <div className="bg-zinc-200 h-10 w-10"></div>
             <div className="bg-zinc-200 h-10 w-10"></div>
             <div className="bg-zinc-200 h-10 w-10"></div>
             <div className="bg-zinc-200 h-10 w-10"></div>
             <div className="bg-zinc-200 h-10 w-10"></div>
             <div className="bg-zinc-200 h-10 w-10"></div>

             <div className="bg-zinc-200 h-10 w-10"></div>
             <div className="bg-zinc-200 h-10 w-10"></div>
             <div className="bg-zinc-200 h-10 w-10"></div>
             <div className="bg-zinc-200 h-10 w-10"></div>
             <div className="bg-zinc-200 h-10 w-10"></div>
             <div className="bg-zinc-200 h-10 w-10"></div>
             <div className="bg-zinc-200 h-10 w-10"></div>

       
      </div>
        </div>
        
    
    
    <div className='max-h-screen flex flex-col sm:w-3/5 border h-80 border-solid rounded-md p-2'>
    <p className="text-sm	 font-semibold mb-2">لیست قیمت</p>
    <div className="bg-zinc-200 h-10 w-full mb-2"></div>
    <div className="bg-zinc-200 h-10 w-full"></div>
    </div>
    </div>
    
  )
}

export default Products