import React from 'react'
import './Register.css'

export const  Register = () =>{


        const handleClick = ()=>{
            window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSd_XP-cGs7wKU9QJ9VkP-S8GaaSDEk-TfzqJ5og2VsDLlJ9jA/viewform?usp=sharing";
        }

    return (
        <div className="Register-div">
            <button className="text-[#5172E7] text-2xl w-[500px] h-[68px] rounded-full border drop-shadow-lg flex justify-center items-center bg-white font-semibold text-opacity-80 cursor-pointer transition-transform transform hover:scale-105 hover:drop-shadow-xl duration-300 ease-in-out" onClick={handleClick}>Submit Your Ideas</button>
        </div>
    )
}