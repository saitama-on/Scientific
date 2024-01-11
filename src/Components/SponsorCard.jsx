import React from 'react'

export const SponsorCard = ({sponser}) => {
    return (
        <div className='flex flex-col justify-start items-center px-6 py-4 border drop-shadow-2xl shadow-inner shadow-[#FFFFFF] rounded-xl'>
            <div className='uppercase text-base sm:text-xl lg:text-2xl font-extrabold mb-5'>
               {sponser.name}
            </div>
            <div className='text-xl' >
                <img src={sponser.image} alt={sponser.name} className='w-[290px] h-[250px]  rounded-md' />
            </div>
        </div>
    )
}
