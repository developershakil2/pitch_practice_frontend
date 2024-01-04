'use client'
import React, {useState, createContext , useEffect} from 'react';
import axios from 'axios';


export const ContextApi = createContext();
const ContextComponent = ({children})=>{
   
const [sideNav, setSideNav] = useState(false)
const [disorpro, setDisorpro] = useState(false)
const [answer1, setAnswer1]= useState('')
const [chatAnswer,setChatAnswer] = useState([])
const [chat,setChat] = useState('')
const [tags, setTags] =useState('')
const [checkRight, setCheckRight] = useState('chat')
const [firstAnswer, setFirstAnswer] = useState([`Hi, I'm Alex, your personal finance assistant! Whether you're into investment strategies, financial planning, or understanding economic trends, I'm here to help. What specific areas within finance interest you the most?`])
const [fuser, setFuser]= useState(null)
const [load, setLoad] = useState(false)
useEffect(() => {
  console.log("Updated chatAnswer:", chatAnswer);
}, [chatAnswer]);
useEffect(()=>{
  const tag = localStorage.getItem('tags')
    setTags(tag)
    const getUser = JSON.parse(localStorage.getItem('user'));
    setFuser(getUser)
},[])

const getAnswer = async () => {
    
    try {
      setLoad(true)
      const response = await axios.post('https://pitchpractice.onrender.com/chat',{con:chat, prompt:`all about financial ${tags}`});
         setAnswer1(response.data.data);
        
         if (response && response.data.data && response.data.data.choices && response.data.data.choices.length > 0) {
          console.log("Response data:", response.data);
          console.log("Response data choices:", response.data.choices);
    
          const newChatContent = response.data.data.choices[0]?.message?.content;
             
                if(fuser?.userId){
                  const res = await axios.post('https://pitchpractice.onrender.com/init',{
                    userId:fuser?.userId,
                    userRequest:chat,
                    systemRequest:newChatContent
                  })
                  console.log(res.data.message)
                }
             
          if (newChatContent) {
            const newChatAnswer = [...chatAnswer, newChatContent];
            setChatAnswer(newChatAnswer);
            
            setChat('')
            console.log("Updated chatAnswer:", newChatAnswer);
            setLoad(false)
          } else {
            console.error("Content is undefined or null.");
          }
        } else {
          console.error("No choices or empty choices array in the response.");
        }
    
  
    } catch (error) {
      console.error("Error making API request:", error);
      if (error.response) {
        console.error("Detailed error response:", error.response.status, error.response.data);
      }
    }
  };
  

  const selectOption = (title, tags, answer) => {
    localStorage.setItem('tags', tags);
    const newData = [...firstAnswer, answer]
    setChatAnswer([])
    setFirstAnswer(newData)
  };
  


    return(
       <ContextApi.Provider  value={{setCheckRight, load, checkRight, firstAnswer,chatAnswer,selectOption, setChatAnswer, chat, setChat,getAnswer,answer1,sideNav,setSideNav,disorpro, setDisorpro}}>
            {children}
       </ContextApi.Provider>
    )
}


export default ContextComponent;