
'use client'
import React, {useContext} from 'react';
import { ContextApi } from '../utilities';
import Items from '@/app/fi.json'


const SecondSideBar=()=>{
      const {sideNav, disorpro,setCheckRight, selectOption} = useContext(ContextApi);


      
    return(
      <>
         {
            disorpro === true?
            <>
          
    
            {
          sideNav === true?  <div className="second_sidebar_inner h-screen overflow-y-scroll bg-[#F0E5D8] p-3 pt-5 w-[380px]">
          
          <button onClick={()=> setCheckRight('account')} className="second_sidebar_inner_row px-3 w-full outline-none my-5  hover:bg-[#45fc4b4d] items-center h-[70px] flex justify-between">
             <div className="second_sidebar_inner_row_right flex items-center justify-start w-[70%]">
                 <img className="w-[35px] h-[35px] rounded-full" src="images/user1.jpeg" alt="user"/>
                 <span className="ml-3 text-md">Account</span>
             </div>
  
             <div classNmae="w-[30%] arrow_wrapper flex justify-end items-center">
                 <img src="images/rightArrow.png" alt="arrow" className="w-[15px] h-[15px]"/>
             </div>
          </button>
  
  
  
  
  
  
  
          {/* <button className="second_sidebar_inner_row px-3 w-full outline-none my-5  hover:bg-[#45fc4b4d] items-center h-[70px] flex justify-between">
             <div className="second_sidebar_inner_row_right flex items-center justify-start w-[70%]">
                 <img className="w-[35px] h-[35px] rounded-full" src="images/voice.png" alt="user"/>
                 <span className="ml-3 text-md">Voice Setting</span>
             </div>
  
             <div classNmae="w-[30%] arrow_wrapper flex justify-end items-center">
                 <img src="images/rightArrow.png" alt="arrow" className="w-[15px] h-[15px]"/>
             </div>
          </button>
  
  
  
  
  
          <button className="second_sidebar_inner_row px-3 w-full outline-none my-5  hover:bg-[#45fc4b4d] items-center h-[70px] flex justify-between">
             <div className="second_sidebar_inner_row_right flex items-center justify-start w-[70%]">
                 <img className="w-[35px] h-[35px] rounded-full" src="images/face.png" alt="user"/>
                 <span className="ml-3 text-md">Give Feedback</span>
             </div>
  
             <div classNmae="w-[30%] arrow_wrapper flex justify-end items-center">
                 <img src="images/rightArrow.png" alt="arrow" className="w-[15px] h-[15px]"/>
             </div>
          </button> */}
  
  
          <button onClick={()=>setCheckRight('share')} className="second_sidebar_inner_row px-3 w-full outline-none my-5  hover:bg-[#45fc4b4d] items-center h-[70px] flex justify-between">
             <div className="second_sidebar_inner_row_right flex items-center justify-start w-[70%]">
                 <img className="w-[35px] h-[35px] rounded-full" src="images/share.png" alt="user"/>
                 <span className="ml-3 text-md">Share PP with others</span>
             </div>
  
             <div classNmae="w-[30%] arrow_wrapper flex justify-end items-center">
                 <img src="images/rightArrow.png" alt="arrow" className="w-[15px] h-[15px]"/>
             </div>
          </button>
  
  
          <div className="w-full h-[2px] bg-black my-16"></div>
  
  
          <a href="https://x.com" className="second_sidebar_inner_row px-3 w-full outline-none my-5  hover:bg-[#45fc4b4d] items-center h-[70px] flex justify-between">
             <div className="second_sidebar_inner_row_right flex items-center justify-start w-full">
                 <img className="w-[35px] h-[35px] rounded-full" src="images/x.png" alt="user"/>
                 <span className="ml-3 text-md">Follow Us on X</span>
             </div>
  
            
          </a>
  
          <a href="https://facebook.com" className="second_sidebar_inner_row px-3 w-full outline-none my-5  hover:bg-[#45fc4b4d] items-center h-[70px] flex justify-between">
             <div className="second_sidebar_inner_row_right flex items-center justify-start w-full">
                 <img className="w-[35px] h-[35px] rounded-full" src="images/facebook.png" alt="user"/>
                 <span className="ml-3 text-md">Find Us on Facebook</span>
             </div>
  
           
          </a>
  
          <a href="https://instagram.com" className="second_sidebar_inner_row px-3 w-full outline-none my-5  hover:bg-[#45fc4b4d] items-center h-[70px] flex justify-between">
             <div className="second_sidebar_inner_row_right flex items-center justify-start w-full">
                 <img className="w-[35px] h-[35px] rounded-full" src="images/instragram.png" alt="user"/>
                 <span className="ml-3 text-md">Connect Us on  Instagram</span>
             </div>
  
           
          </a>
  
  
          <div className="w-full h-[1px] bg-black my-16"></div>
  
  
  
  
          <a href="/policy" className="second_sidebar_inner_row px-3 w-full outline-none my-5  hover:bg-[#45fc4b4d] items-center h-[70px] flex justify-between">
             <div className="second_sidebar_inner_row_right flex items-center justify-start w-[70%]">
                 <img className="w-[35px] h-[35px] rounded-full" src="images/security.png" alt="user"/>
                 <span className="ml-3 text-md">Privacy & Policy</span>
             </div>
  
             <div classNmae="w-[30%] arrow_wrapper flex justify-end items-center">
                 <img src="images/rightArrow.png" alt="arrow" className="w-[15px] h-[15px]"/>
             </div>
          </a>
  
  
          <a href='/terms' className="second_sidebar_inner_row px-3 w-full outline-none my-5  hover:bg-[#45fc4b4d] items-center h-[70px] flex justify-between">
             <div className="second_sidebar_inner_row_right flex items-center justify-start w-[70%]">
                 <img className="w-[35px] h-[35px] rounded-full" src="images/term.png" alt="user"/>
                 <span className="ml-3 text-md">Terms of Service</span>
             </div>
  
             <div classNmae="w-[30%] arrow_wrapper flex justify-end items-center">
                 <img src="images/rightArrow.png" alt="arrow" className="w-[15px] h-[15px]"/>
             </div>
          </a>
  
  
  
    </div>:''
        }
            
        
        </>:<>
        <h2 className="mt-3 pl-3  font-black text-3xl text-start">Discover</h2>
        {
          sideNav === true? 
          
          <div className="second_sidebar_inner flex-wrap  flex justify-around h-screen overflow-y-scroll bg-[#F0E5D8] p-3 pt-5 w-[380px]">
           
         
           {
            Items.map((el,indx)=>(
               <>
                <div key={indx} onClick={()=> selectOption(el.title, el.tags, el.answer)} className="w-[160px] my-2 cursor-pointer hover:transform hover:scale-[1.1] transition-all rounded-bl-xl rounded-br-xl bg-[#F0DBBF] h-[300px] ">
                      <img src={el.img} alt="f1" className="w-full rounded-tl-xl rounded-tr-xl h-[150px]" />
                    <div className="pl-2 pr-2 w-full">
                    <h2 className=" font-black mt-3 leading-[22px] text-xl">{el.title}</h2>
                    
                    </div>
              </div>
              <div className="h-[100px]"></div>
               </>
               
            ))
           }
           
              
           
  

             

  
    </div>:''
        }
        </>
         }
      </>
    )
}

export default SecondSideBar;