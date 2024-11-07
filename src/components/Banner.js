import React from 'react'


const Banner = ({imageLink,mainText,description,colorText,buttonText}) => {
  return (
    <>
    <div className='flex align-center justify-center  mt-10 relative '>
        <div className='brightness-50 '><img src={imageLink} className=' object-cover w-[1250px] h-[400px] rounded-md' alt="banner" /></div>
    <div className='absolute mt-[130px] mr-[600px] ml-[50px] '>
        <p className='font-bold text-[50px] '>{mainText}</p>
         <p className='text-[25px] font-bold mt-2'>{description}</p>
         <p className='text-[30px] font-bold [background:var(--text-gradient)] clipText'>{colorText}</p>
         <button className='mt-3 button p-2 rounded-md'>{buttonText}</button>
        </div>
        
        
        
    </div>
    
    
    </>
    
        
  )
}

export default Banner