import React from 'react'
import './IdeaSubmissionForm.css'
export const IdeaSubmissionForm = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
        <div className='text-5xl font-extrabold drop-shadow-xl shadow-[#5172E7]'>
            Submit Your Idea
        </div>
        
        <div>

            <div className='flex flex-row w-[100vw] items-center justify-center pb-10 pt-6'>
                <label htmlFor="TypeOfSolution" className='pr-10 text-xl font-semibold'>Type of proposed solution:</label>


                <select name="TypeOfSolution" id="TypeOfSolution" >
                    <option value="Working Model/Prototype based">Working Model</option>
                    <option value="Idea based Solution">Prototype based</option>
                </select>
            </div>

            <div className='flex flex-row w-[100vw] justify-center space-x-20'>

                <div className='flex-col space-y-8'>

                    <div className='INPBOX h-16 w-[25vw]'>
                        <label htmlFor="Name" className='text-[#5E6366] font-bold text-xs'>Your Full Name</label>
                        <input type="text" name="Name" id="Name" className='outline-none text-[#ABAFB1] text-base font-medium' placeholder='John Doe'  />
                    </div>


                    <div className='INPBOX h-16 w-[25vw]'>
                        <label htmlFor="Standard" className='text-[#5E6366] font-bold text-xs'>Standard</label>
                        <select name="Standard" id="Standard"  className='bg-transparent outline-none text-[#ABAFB1] text-base font-medium' >
                            <option value="6th">6th</option>
                            <option value="7th">7th</option>
                            <option value="8th">8th</option>
                            <option value="9th">9th</option>
                            <option value="10th">10th</option>
                            <option value="11th">11th</option>
                            <option value="12th">12th</option>
                        </select>
                    </div>


                    <div className='h-16 w-[25vw] flex flex-row justify-between'>
                        <div className='INPBOX w-[20%] h-full flex justify-center items-center'>
                            <select name="MainContactCountryCode" id="MainContactCountryCode" className='bg-transparent text-[#5E6366] font-bold text-xs outline-none'>
                                <option value="91">+91</option>
                            </select>
                        </div>
                        <div className='INPBOX w-[75%] h-full flex '>
                            <label htmlFor="MainContactNumber" className='text-[#5E6366] font-bold text-xs'>Phone Number</label>
                            <input type="text" name="MainContactNumber" id="MainContactNumber" className='outline-none  text-[#ABAFB1]' />                            
                        </div>
                    </div>


                    
                    <div className='INPBOX h-16 w-[25vw]'>
                        <label htmlFor="Email" className='text-[#5E6366] font-bold text-xs'>Your Email ID</label>
                        <input type="text" name="Email" id="Email" className='outline-none text-[#ABAFB1] text-base font-medium' />
                    </div>

                    
                    <div className='INPBOX h-16 w-[25vw]'>
                        <label htmlFor="Group" className='text-[#5E6366] font-bold text-xs'>Group Name (if any)</label>
                        <input type="text" name="Group" id="Group" className='outline-none text-[#ABAFB1] text-base font-medium' />
                    </div>

                    <div className='INPBOX h-28 w-[25vw]'>
                        <label htmlFor="GroupMemberNames" className='text-[#5E6366] font-bold text-xs'>Group Member's Names</label>
                        <input type="text" name="GroupMemberNames" id="GroupMemberNames" className='outline-none text-[#ABAFB1] text-base font-medium' />
                    </div>


                    <div className='INPBOX h-16 w-[25vw]'>
                        <label htmlFor="School" className='text-[#5E6366] font-bold text-xs'>Your school Name</label>
                        <input type="text" name="School" id="School" className='outline-none text-[#ABAFB1] text-base font-medium' />
                    </div>



                    <div className='INPBOX h-28 w-[25vw]'>
                        <label htmlFor="SchoolAddress" className='text-[#5E6366] font-bold text-xs'>Your School Address</label>
                        <input type="text" name="SchoolAddress" id="SchoolAddress" className='outline-none text-[#ABAFB1] text-base font-medium' />
                    </div>



                </div>

                <div className='flex-col space-y-8'>

                    <div className='INPBOX h-16 w-[25vw]'>
                        <label htmlFor="MentorNames" className='text-[#5E6366] font-bold text-xs'>Mentor/Teacher Name</label>
                        <input type="text" name="MentorNames" id="MentorNames" className='outline-none text-[#ABAFB1] text-base font-medium' />
                    </div>



                    <div className='h-16 w-[25vw] flex flex-row justify-between'>
                        <div className='INPBOX w-[20%] h-full flex justify-center items-center'>
                            <select name="MentorContactCountryCode" id="MentorContactCountryCode" className='bg-transparent'>
                                <option value="91" className='text-[#5E6366] font-bold text-xs'>+91</option>
                            </select>
                        </div>
                        <div className='INPBOX w-[75%] h-full flex '>
                            <label htmlFor="MentorContactNumber" className='text-[#5E6366] font-bold text-xs'>Mentor Phone Number</label>
                            <input type="text" name="MentorContactNumber" id="MentorContactNumber" className='outline-none text-[#ABAFB1] text-base font-medium' />                            
                        </div>
                    </div>


                    
                    <div className='INPBOX h-16 w-[25vw]'>
                        <label htmlFor="MentorEmail" className='text-[#5E6366] font-bold text-xs'>Mentor Email ID</label>
                        <input type="text" name="MentorEmail" id="MentorEmail" className='outline-none text-[#ABAFB1] text-base font-medium' />
                    </div>

                    
                    <div className='INPBOX h-16 w-[25vw]'>
                        <label htmlFor="ProjectTitle" className='text-[#5E6366] font-bold text-xs'>Project Title</label>
                        <input type="text" name="ProjectTitle" id="ProjectTitle" className='outline-none text-[#ABAFB1] text-base font-medium' />
                    </div>

                    <div className='INPBOX h-28 w-[25vw]'>
                        <label htmlFor="ProjectObjective" className='text-[#5E6366] font-bold text-xs'>Objective of the Project (Max. character 3000)</label>
                        <input type="text" name="ProjectObjective" id="ProjectObjective" className='outline-none text-[#ABAFB1] text-base font-medium' />
                    </div>



                    <div className='INPBOX h-28 w-[25vw]'>
                        <label htmlFor="Abstract" className='text-[#5E6366] font-bold text-xs'>Abstract (Max. character 3500)</label>
                        <input type="text" name="Abstract" id="Abstract" className='outline-none text-[#ABAFB1] text-base font-medium' />
                    </div>


                    <div className='INPBOX h-28 w-[25vw]'>
                        <label htmlFor="ProjectOutcome" className='text-[#5E6366] font-bold text-xs'>Outcome of the Project (Max. character 3000)</label>
                        <input type="text" name="ProjectOutcome" id="ProjectOutcome" className='outline-none text-[#ABAFB1] text-base font-medium' />
                    </div>


                </div>

            </div>


            <div className='flex flex-col w-[100w] items-center space-y-5 pt-10'>
                <div className='text-xl text-black font-bold'>
                    Upload document
                </div>

                <div className='text-xl text-black font-semibold'>
                    (Recommendation letter from teacher) (optional)
                </div>

                <div className='flex flex-row'>

                    <button id='UploadButton' className='h-[50px] w-[150px] text-[#272727] hover:text-white hover:bg-black hover:border-black transition-all duration-300'>
                        Browse
                    </button>
                    <div>

                    </div>

                </div>

            </div>


            <div className='flex w-[100vw] justify-center items-center pt-10 '>
                <button id='SubmitButton' className='h-[58px] w-[250px] drop-shadow-2xl shadow-[#5172E7] hover:text-white hover:bg-[#5172E7] transition-all duration-300'>
                    Submit
                </button>

            </div>


        </div>

    </div>
  )
}


