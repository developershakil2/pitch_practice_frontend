
'use client';
import React,{useState, useContext} from 'react'
import { ContextApi } from '@/app/utilities';
import SecondSideBar from "@/app/components/SecondSideBar";

const Talk = ()=>{

    const {chatAnswer,firstAnswer, setCheckRight, checkRight, chat, setChat, setSideNav,answer1, getAnswer,  setDisorpro} = useContext(ContextApi);
    const [btn,setBtn] = useState('transparent')
    const [btn1, setBtn1] = useState('transparent')
    const [checkLog, setCheckLog] = useState(true)
 
       console.log(chatAnswer, 'answer')
    const dis = ()=>{
            setSideNav(true)
            setDisorpro(false)
            setBtn('#f0dbbf')
            setBtn1('transparent')
            setCheckRight('chat')
    }

    const pro = ()=>{
        setSideNav(true)
        setDisorpro(true)
        setBtn1('#f0dbbf')
        setBtn('transparent')
        setCheckRight('chat')
}



    return(
        <>
        <div className="talk_wrapper bg-[#F0E5D8] flex justify-between">
            
            
            
            
            
            <div className="talk_left flex ">
                <div className="side_bar bg-[#F0E5D8] w-[100px] h-screen border-r-[1px]">
                   <button style={{background:btn}} onClick={dis} className={`side_bar_button p-4 outline-none flex-col flex justify-center items-center m-5 w-[70px] h-[70px] rounded-xl mx-auto    hover:bg-[#f0dbbf]`}>
                          <img src="images/star.png" alt="star" className="w-[40px] h-[40px]"/>
                          <span className="text-xs">Discover</span>
                   </button>

                   <button onClick={pro} style={{background:btn1}} className="side_bar_button p-4 outline-none flex-col flex justify-center items-center m-5 w-[70px] h-[70px] rounded-xl mx-auto  bg-transparent hover:bg-[#f0dbbf]">
                          <img src="images/user1.jpeg" alt="star" className="rounded-full w-[40px] h-[40px]"/>
                          <span className="text-xs">Profile</span>
                   </button>
                </div>

                <div className="second_side_bar ">
                    <SecondSideBar/>
                </div>
            </div>






      
          {
            checkRight === 'chat'?
            <div className="talk_right w-full  h-screen">
            <div className="inner_nav"></div>

            <div className="chat_wrapper pl-16 w-full flex justify-end flex-col h-full">
                <div className="only_chat_wrapper w-[80%] flex flex-col overflow-y-scroll items-end justify-center mx-auto h-full">

             
                <p className="text-2xl my-10 px-5">
                {firstAnswer !== null ? firstAnswer.map((el, ind)=>(
                    
                     <p key={ind} className="text-2xl my-10 px-5">
                            {el}
                     </p>
                )):'' }

                </p>
            
               {chatAnswer && chatAnswer?.map((el, indx) => (
                    <p key={indx} className="text-2xl my-10 px-5">
                    {el}
                    </p>
                    ))}


                </div>
                <div className="chatw w-[80%] flex justify-between items-center my-10 rounded-2xl h-[90px] mx-auto bg-[#FCFAF7] shadow-2xl ">
                    <h2 className=" bg-[#F0E5D8] text-black h-[60px] w-[60px] text-center ml-2 p-3 rounded-full text-2xl font-black">PP</h2>
                      <input value={chat} onChange={(e)=>setChat(e.target.value)} className="h-full w-[80%] text-2xl font-black bg-transparent outline-none pl-6" placeholder="Talk With Alex" />
                    <button onClick={getAnswer} className=" bg-black text-white h-[40px] mr-3 w-[40px] text-center  rounded-full font-black"><img src="images/uparrow.png" alt="uparrow" className="w-full h-full rounded-full"/></button>
                </div>
            </div>
        </div>:


          checkRight === 'share'?
          <div className="talk_right w-full  h-screen">
                <h2>refer a friend</h2>
            </div>:




       checkRight ==='account'?
<div className="talk_right w-full  h-screen">
            <div className="account_wrapper w-full h-full flex justify-center items-center">
     

                <>
                {
                    checkLog === true? <div className="w-[370px] bg-[#efeee8e4] px-14 py-14 shadow-xl backdrop-blur-[30px] flex flex-col justify-center items-center  rounded-xl">
                    <h2 className="font-black text-2xl mb-3  ">Sign In</h2>
                  

                       <div className="my-3">
                       <input className="w-[360px] px-4 h-[60px] rounded-xl outline-none" placeholder="your email" type="email" />
                       </div>


                       <div className="my-3">
                       <input className="w-[360px] px-4 h-[60px] rounded-xl outline-none" placeholder="enter password" type="password" />
                       </div>

                       <div className="my-3">
                       <button className="w-[360px] bg-[#111] text-white px-4 h-[60px] rounded-xl outline-none"  >Login</button>
                       </div>
                       <button onClick={()=> setCheckLog(false)}>I Don't have an account <span className="text-blue-600 ml-2">Register</span></button>
               </div> :
               
               
               <div className="w-[370px] bg-[#efeee8e4] px-14 py-14 shadow-xl backdrop-blur-[30px] flex flex-col justify-center items-center  rounded-xl">
                    <h2 className="font-black text-2xl mb-3  ">Sign Up</h2>
                    <div className="my-3">
                       <input className="w-[360px] px-4 h-[60px]  border-[1px]  rounded-xl outline-none" placeholder="your full name" type="text" />
                       </div>


                       <div className="my-3">
                       <input className="w-[360px] px-4 h-[60px] rounded-xl outline-none" placeholder="your email" type="email" />
                       </div>


                       <div className="my-3">
                       <input className="w-[360px] px-4 h-[60px] rounded-xl outline-none" placeholder="enter password" type="password" />
                       </div>

                       <div className="my-3">
                       <button className="w-[360px] bg-[#111] text-white px-4 h-[60px] rounded-xl outline-none"  >Register</button>
                       </div>
                       <button onClick={()=> setCheckLog(true)}>I have an account <span className="text-blue-600 ml-2">Register</span></button>
               </div>



               

                }
               


                </>



                </div>
            </div>
:''
          }

           

            

            
          



        </div>
        
        </>
    )
}


export default Talk;