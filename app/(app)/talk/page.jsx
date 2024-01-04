
'use client';
import React,{useState, useRef, useContext, useEffect, useLayoutEffect} from 'react'
import { ContextApi } from '@/app/utilities';
import SecondSideBar from "@/app/components/SecondSideBar";
import axios from 'axios';
const Talk = ()=>{

    const {chatAnswer,firstAnswer, setCheckRight, checkRight, chat, setChat, setSideNav,answer1, getAnswer,  setDisorpro} = useContext(ContextApi);
    const [btn,setBtn] = useState('transparent')
    const [btn1, setBtn1] = useState('transparent')
    const [checkLog, setCheckLog] = useState(true)
    const [clip, setClip] = useState(false)
    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
     const [getUserInfo, setGetUserInfo] = useState(null)
   const [signEmail, setSignEmail] = useState('')
   const [signPassword, setSignPassword] = useState('')
   const [signUserName, setSignUserName] = useState('')

   
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
  const closeAll= ()=>{
    setSideNav(false)
        setDisorpro(false)
  }
    const copy = async()=>{
        const url = window.location.href;
      await  navigator.clipboard.writeText(url)
      setClip(true)

      setTimeout(()=>{
        setClip(false)
      },2000)
    }


    const login = async () => {
      try {
        const response = await axios.post("http://localhost:5000/login", {
          email: loginEmail,
          password: loginPassword
        });
    
        if (response.status === 200) {
          const userIn = {
            username: response.data.user.username,
            userId: response.data.user._id,
            isVerified: response.data.user.isVerified,
            chats:response.data.user.chats
          };
    
          localStorage.setItem('user', JSON.stringify(userIn));
    
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        }
      } catch (error) {
        console.error(error);
        alert('Error');
      }
    };
    
    useEffect(() => {
      const getUser = localStorage.getItem('user');
      if (getUser) {
        const user = JSON.parse(getUser);
        setGetUserInfo(user);
      }
    }, []);
    const chatContentRef = useRef(null);

    useEffect(() => {
      // Scroll to the bottom when chatAnswer changes
      if (chatContentRef.current) {
        chatContentRef.current.scrollTop = chatContentRef.current.scrollHeight;
      }
    }, [chatAnswer]);

    const signup = async()=>{
      try{
        const response = await axios.post("http://localhost:5000/register-user",{
          username:signUserName,
          password:signPassword,
          email:signEmail
        })

        if(response.status == 200){
          alert(response.data.message)
        }

      }catch(error){
        console.log(error)
      }
    }

    const logout = ()=>{
      localStorage.removeItem("user");
      window.location.reload()
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

                <div className="second_side_bar z-10  ">          
                    <SecondSideBar closeAll={closeAll}  pro={pro} dis={dis} btn1={btn1} btn={btn} getUser={getUserInfo}/>
                </div>
            </div>






      
          {
            checkRight === 'chat'?
            <div className="talk_right w-full  h-screen">
            <div className="inner_nav">
            <button style={{background:btn}} onClick={dis} className={`side_bar_button1 p-4 outline-none flex-col flex justify-center items-center m-5 w-[70px] h-[70px] rounded-xl mx-auto    hover:bg-[#f0dbbf]`}>
                          <img src="images/star.png" alt="star" className="w-[40px] h-[40px]"/>
                         
                         
                   </button>
            </div>

            <div className="chat_wrapper pl-16 w-full flex justify-end flex-col h-full">
      <div className="only_chat_wrapper w-[80%] flex flex-col overflow-y-scroll items-end justify-center mx-auto h-full">
        <div ref={chatContentRef} className='chat_content'>
          {firstAnswer !== null ? firstAnswer.map((el, ind) => (
            <p key={ind} className="text-2xl my-10 px-5">
              {el}
            </p>
          )) : ''}

          {chatAnswer && chatAnswer?.map((el, indx) => (
            <div key={indx} className="text-2xl my-10 px-5">
              {el}
            </div>
          ))}
        </div>
      </div>
      <div className="chatw w-[80%] flex justify-between items-center my-10 rounded-2xl h-[90px] mx-auto bg-[#FCFAF7] shadow-2xl ">
        <h2 className=" bg-[#F0E5D8] text-black h-[60px] w-[60px] text-center ml-2 p-3 rounded-full text-2xl font-black">PP</h2>
        <input
          value={chat}
          onChange={(e) => setChat(e.target.value)}
          className="h-full w-[80%] chatfield text-lg font-black bg-transparent outline-none pl-4"
          placeholder="Talk With PP"
        />
        <button
          onClick={getAnswer}
          className="bg-black text-white h-[40px] mr-3 w-[40px] flex justify-center items-center text-center rounded-full font-black"
        >
          <img src="images/uparrow.png" alt="uparrow" className="w-[40px] h-[40px] rounded-full" />
        </button>
      </div>
    </div>
        </div>:


          checkRight === 'share'?
          <div className="talk_right flex-col flex justify-center items-center w-full  h-screen">
          <button  style={{background:btn}} onClick={dis} className={` p-4 mobile_btn_pr outline-none absolute top-2 left-2 flex-col flex justify-center items-center  w-[70px] h-[70px] rounded-xl  hover:bg-[#f0dbbf]`}>
                          <img src="images/left-arrow.svg" alt="star" className="w-[40px] h-[40px]"/>
                         
                                                   
                   </button>
            <img className="w-[200px] h-[200px] rounded-full" src='images/refer.png' alt="refer"/>
                 <h2  className="text-2xl font-black">refer a friend</h2>
                 {
                     
                    clip === true ? <div className="bg-[green] my-5 text-white p-2 rounded-xl" >you copied link</div>:
                    ''
                 }
                 <button onClick={copy} className="px-6 py-3 bg-black text-white mt-5 rounded-xl">Copy Link</button>
            </div>:




       checkRight ==='account'?
<div className="talk_right w-full  h-screen">
<button  style={{background:btn}} onClick={dis} className={` p-4 mobile_btn_pr outline-none flex-col flex justify-center items-center  w-[70px] h-[70px] rounded-xl  hover:bg-[#f0dbbf]`}>
                          <img src="images/left-arrow.svg" alt="star" className="w-[40px] h-[40px]"/>
                         
                                                   
                   </button>

            <div className="account_wrapper w-full h-full flex justify-center items-center">
           
           {
            getUserInfo? <div className="w-full h-full flex justify-center items-center flex-col">
                 <p className="text-center w-full font-balck text-xl font-black ">we have saved your chats your total is {getUserInfo?.chats.length}</p>
                    <h2 className="my-3 text-center w-full font-black text-xl">{getUserInfo?.username}</h2>
                  <button className="outline-none bg-black text-white rounded-xl px-10 py-3" onClick={logout}>logout</button>
              </div>:
                              <>
                              {
                                  checkLog === true? <div className="w-[370px] bg-[#efeee8e4] px-14 py-14 shadow-xl backdrop-blur-[30px] flex flex-col justify-center items-center  rounded-xl">
                                  <h2 className="font-black text-2xl mb-3  ">Sign In</h2>
                                
                                     <div className="my-3">
                                     <input value={loginEmail} onChange={(e)=> setLoginEmail(e.target.value)} className="w-[360px] px-4 h-[60px] rounded-xl outline-none" placeholder="your email" type="email" />
                                     </div>
              
              
                                     <div className="my-3">
                                     <input value={loginPassword} onChange={(e)=>setLoginPassword(e.target.value)} className="w-[360px] px-4 h-[60px] rounded-xl outline-none" placeholder="enter password" type="password" />
                                     </div>
              
                                     <div className="my-3">
                                     <button onClick={login} className="w-[360px] bg-[#111] text-white px-4 h-[60px] rounded-xl outline-none"  >Login</button>
                                     </div>
                                     <button onClick={()=> setCheckLog(false)}>I Don't have an account <span className="text-blue-600 ml-2">Register</span></button>
                             </div> :
                             
                             
                             <div className="w-[370px] bg-[#efeee8e4] px-14 py-14 shadow-xl backdrop-blur-[30px] flex flex-col justify-center items-center  rounded-xl">
                                  <h2 className="font-black text-2xl mb-3  ">Sign Up</h2>
                                  <div className="my-3">
                                     <input value={signUserName} onChange={(e)=>setSignUserName(e.target.value)} className="w-[360px] px-4 h-[60px]  border-[1px]  rounded-xl outline-none" placeholder="your full name" type="text" />
                                     </div>
              
              
                                     <div className="my-3">
                                     <input value={signEmail} onChange={(e)=>setSignEmail(e.target.value)} className="w-[360px] px-4 h-[60px] rounded-xl outline-none" placeholder="your email" type="email" />
                                     </div>
              
              
                                     <div className="my-3">
                                     <input value={signPassword} onChange={(e)=>setSignPassword(e.target.value)} className="w-[360px] px-4 h-[60px] rounded-xl outline-none" placeholder="enter password" type="password" />
                                     </div>
              
                                     <div className="my-3">
                                     <button onClick={signup} className="w-[360px] bg-[#111] text-white px-4 h-[60px] rounded-xl outline-none"  >Register</button>
                                     </div>
                                     <button onClick={()=> setCheckLog(true)}>I have an account <span className="text-blue-600 ml-2">Login</span></button>
                             </div>
              
                              }
                             
              
              
                              </>
              
           }


                </div>
            </div>
:''
          }

           

        </div>
        
        </>
    )
}


export default Talk;