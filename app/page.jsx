'use client'
import AboutSection from "@/app/AboutSection"

import FaqSection from "./Faq"
import FeatureSection from "@/app/FeatureSection"
import HomeLastSection from "@/app/HomeLastSection"
import Nav from "@/app/components/Nav"
import PropTypes from 'prop-types';


export default function Home() {
  return (
    <main >
     <Nav/>
      
      <div className="hero_sec mt-[70px] container mx-auto flex justify-between">
           <div className="hero_sec_left justify-center flex-col items-center flex w-[55%] h-[500px]">
                       <h1 className="font-bold text-start head_title leading-[70px] text-[55px]">
                       Elevate Your Sales Game with Pitch Practice – Where Every Pitch Counts
                       </h1>
                       <div ></div>
                       <h4 className="font-black second_head mt-5 w-full text-start text-xl ">
                       Fast-Track Your Earnings with Tailored, Bite-Sized Sales Mastery
                       </h4>
                       <h4 className="my-5 font-bold text-lg">
                       Welcome to Pitch Practice ™ – the future of sales mastery. Built for financial advisors, our AI-driven platform gives you a competitive edge with real-time role-play, targeted microlearning, and invaluable industry connections
                       </h4>
                      <div className="w-full flex justify-start">
                      <a className="font-black text-white bg-[#051205] px-8 py-5 text-xl rounded-xl" href="/talk">Let's Get Started</a>
                      </div>
                      
           </div>
           <div className="hero_sec_right h-[450px] w-[40%]">
             <div className="w-full h-full overflow-y-hidden">
             <img src="images/hero.gif" className="w-full hero_img h-[455px]  " alt="hero"/>
             </div>
           </div>
      </div>
      <FeatureSection/>

      <AboutSection/>
      <FaqSection/>
      <HomeLastSection/>
    </main>
  )
}
