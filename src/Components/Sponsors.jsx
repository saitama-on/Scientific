import React from 'react'
import { SponsorCard } from './SponsorCard'


const Sponsers=[
    // {
    //     name:'Reading partner ',
    //     image:'./assets/sponsers/Reading_partner.jpeg',
    // },
    {
        name:'Title Sponsor',
        image:'./assets/sponsers/Title_Sponser.png',
    },

    // {
    //     name:'Knowledge partners',
    //     image:'./assets/sponsers/Knowledge_partner.jpeg',
    // },
    // {
    //     name:'Silver Sponsor',
    //     image:'./assets/sponsers/Silver_Sponser.jpeg',
    // },
]


export const Sponsors = () => {
    return (
        
        <div className='flex justify-center items-center'>
           {Sponsers.map((sponser, index) => {
                        return (
                            <SponsorCard sponser={sponser} key={index}/>
                        )
                    }
                    )}
        </div>
    )

}
// old style with grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mx-4 content-center justify-items-center place-content-center place-items-center