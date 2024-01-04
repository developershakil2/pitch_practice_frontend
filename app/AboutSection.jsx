'use client'
import AOS from 'aos';
import 'aos/dist/aos.css';



const AboutSection = ()=>{
    
    if (typeof document !== 'undefined') {
        AOS.init();
      }
    return(
        <>
        <div className="about_sec mt-[150px] flex justify-between container mx-auto">
            <div data-aos="fade-down-right" 
                       data-aos-easing="linear"
                       data-aos-duration="1000" className="about_left w-[50%]">
             <h2 data-aos="zoom-in"   data-aos-easing="linear"
                       data-aos-duration="1000" className="text-5xl font-black ">About</h2>
             <div className="h-[3px] w-[80px] bg-black"></div>
             <p className="text-xl leading-[35px] font-bold">
             Discover a sales training revolution with Pitch Practice ™. Your AI mentor, Alex™, alongside seasoned industry pros, is poised to escalate your pitch game. With real-time feedback and personalized scenarios, you're not just practicing; you're evolving. Leave behind the outdated, lengthy sales training routines and embrace focused, modular learning with targeted, bite-sized sessions designed to elevate your sales skills from day one. Here, practice makes pitch-perfect
             </p>
            </div>

            <div data-aos="flip-left"
                       data-aos-easing="linear"
                       data-aos-duration="1000" className="about_right w-[50%] h-[400px]">
                <img className="w-full h-full" src='images/about.gif'alt="about "/>
            </div>
        </div>
        </>
    )
}

export default AboutSection;