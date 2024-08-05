import React from 'react'
import pic from './img/pic.svg'
import { FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';

const TakeAPhoto = () => {
  return (
    <div className="container mx-auto">
        <section>
        <div className='w-full h-[800px] bg-[#484848]'>
       <Link to={"/AgainStep3"}> <div className='flex justify-end mx-10 pt-10'><FaTimes className='text-white' /></div></Link>
            <div className="flex justify-center">
                <div className="w-[700px] h-[400px] bg-[#232323] border border-white rounded-md"></div>
            </div>

           

            <div className="flex justify-center pt-14"> <img className="w-14" src={pic} alt=""/></div>
        
        </div>
    </section>
    
    </div>
  )
}

export default TakeAPhoto