import React from 'react'
import logo from './img/logo.svg'
import { FaCalendarAlt } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Step1 = () => {

  function submitForm(e) {
    e.preventDefault();
  }
  return (
    <div className="container mx-auto">
         <section>
        <div>
            <div className="lg:mx-24 md:mx-7 md:my-7 my-5 mx-3">
                <div className='hidden md:block'><img src={logo} alt=""/></div>
                <div className='md:hidden block'><img className='w-[150px]' src={logo} alt=""/></div>
                <div className="md:py-7 py-3 md:text-center text-start">
                    <h2 className="text-[#0052A5] md:text-3xl text-xl  font-bold">International Driver Lcense Application</h2>
                    <p className="text-slate-800 md:text-base text-sm">This form helps you to get Int driver license</p>
                </div>


                <div className='md:hidden block'>
                  <div className='bg-white rounded-2xl my-5'>
                    <div className='flex items-center gap-1 pt-3 px-3'>
                      <button className='bg-[#3FAFEE] px-2 py-1 rounded-full text-xs'>1</button>
                      <div>Personal Data</div>
                    </div>

                    <div className='grid grid-cols-5 gap-2 px-3 py-3'>
                      <div className='border-2 rounded-full border-[#3FAFEE]'></div>
                      <div className='border-2 rounded-full border-[#DBF0FC]'></div>
                      <div className='border-2 rounded-full border-[#DBF0FC]'></div>
                      <div className='border-2 rounded-full border-[#DBF0FC]'></div>
                      <div className='border-2 rounded-full border-[#DBF0FC]'></div>
                    </div>

                  </div>
                </div>

          <div className='hidden md:block'>
            
          <div className=" flex justify-between items-center lg:pr-0 md:pr-5 bg-[#DBF0FC] rounded-full font-semibold">

          <div className="lg:flex gap-2 bg-white rounded-3xl px-5 py-3 shadow-md">
              <div className='md:hidden lg:block'><div className="px-[10px] py-[4px] rounded-full bg-[#3FAFEE] text-white text-sm">1</div></div>
              <div className='lg:hidden block'><button className='px-3 py-1 rounded-full  bg-[#3FAFEE] text-white text-sm'>1</button></div>
              <div>Personal Data</div>
          </div>

          <div className="lg:flex gap-2 opacity-50 lg:px-14 ">
              <div className='md:hidden lg:block'><div className="px-[10px] py-[4px] rounded-full bg-[#3FAFEE] text-white text-sm">2</div></div>
              <div className='lg:hidden block'><button className='px-3 py-1 rounded-full  bg-[#3FAFEE] text-white text-sm'>2</button></div>
              <div className="text-[#0052A5]">Address</div>
          </div>

          <div className="lg:flex gap-2 opacity-50 lg:px-14">
              <div className='md:hidden lg:block'><div className="px-[10px] py-[4px] rounded-full bg-[#3FAFEE] text-white text-sm">3</div></div>
              <div className='lg:hidden block'><button className='px-3 py-1 rounded-full  bg-[#3FAFEE] text-white text-sm'>3</button></div>
              <div className="text-[#0052A5]">Drives license</div>
          </div>

          <div className="lg:flex gap-2 opacity-50 lg:px-14 ">
              <div className='md:hidden lg:block'><div className="px-[10px] py-[4px] rounded-full bg-[#3FAFEE] text-white text-sm">4</div></div>
              <div className='lg:hidden block'><button className='px-3 py-1 rounded-full  bg-[#3FAFEE] text-white text-sm'>4</button></div>
              <div className="text-[#0052A5]">Passport</div>
          </div>

          <div className="lg:flex gap-2 opacity-50 lg:px-14">
              <div className='hidden lg:block'><div className="px-[10px] py-[4px] rounded-full bg-[#3FAFEE] text-white text-sm">5</div></div>
              <div className='lg:hidden block'><button className='px-3 py-1 rounded-full  bg-[#3FAFEE] text-white text-sm'>5</button></div>
              <div className="text-[#0052A5]">Summary</div>
          </div>


          </div>
          </div>



                <div>
                    <div className="bg-white rounded-2xl md:my-14 my-7 ">
                       <div className="md:py-14 py-5 px-5 md:px-14">
                        <div className="text-2xl font-bold md:text-center text-start">Personal Data</div>
                        <div className="text-[#747679]  md:text-center text-start md:text-base text-sm">Provide your Personal Data.</div>

                        <div >
                            <form onSubmit={submitForm}>
                                <div className="md:grid grid-cols-3 gap-5 md:py-10">
                                    <input type="text" placeholder="First Name"  className="border-2 md:px-5  px-10 md:mt-0 mt-7 py-3 rounded-xl"/>
                                    <input type="text" placeholder="Middle Name" className="border-2 md:px-5 px-10      py-3 md:my-0 my-3 rounded-xl"/>
                                    <input type="text" placeholder="Last Name"  className="border-2 md:px-5 px-10     py-3 rounded-xl"/>
                                </div>

                                <div className="md:grid grid-cols-2 gap-5">
                                    <input type="text" placeholder="Email Address"  className="border-2 md:px-5 md:my-0 my-3  px-10 py-3 rounded-xl"/>
                                    <input type="text" placeholder="Phone Number"  className="border-2 md:px-5 px-10 py-3 rounded-xl"/>
                                </div>

                                <div className="md:grid grid-cols-3 gap-5 md:py-10">
                                    <div className="flex border-2 items-center rounded-xl md:my-0 my-3 ">
                                        <div className="pl-5 pr-2"><FaCalendarAlt className='text-[#0052A5]' /></div>
                                        <input type="text" placeholder="Date of birth" className="md:w-full   py-3 rounded-xl"/>
                                    </div>

                                   
                                        <input  className="border-2 md:px-5  px-10 py-3 rounded-xl" type="text" placeholder="City of birth" />
                                  

                                  
                                        <input className="border-2 md:px-5  px-10 py-3 rounded-xl md:my-0 my-3 " type="text" placeholder="State of birth"/>
                                   
                                </div>

                               
                                <div className="text-white flex justify-end">
                                    <Link to={"/Step2"}><button type="submit" className="bg-[#0052A5] opacity-50 flex items-center gap-1 px-7 py-3 rounded-full"><span>Next</span> <FaArrowRight className='text-sm' /></button></Link>
                                </div>
                               
                            </form>
                        </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Step1