'use client'
import AOS from 'aos';
import 'aos/dist/aos.css';



const HomeLastSection = ()=>{
  if (typeof document !== 'undefined') {
    AOS.init();
  }
    return(

        <>
         <div className="container footer_wrapper mt-[100px] mx-auto flex justify-between">
            <div className="left_side w-[45%]">
            <div data-aos="fade-down-right" 
                       data-aos-easing="linear"
                       data-aos-duration="1000"
                    className="freature_row my-4">
                        <h2 className="font-black text-[20px]"><span></span>Call to Action</h2>
                      <p className="text-md ">
                      Step Up to the Big Leagues with Pitch Practice. Chat with Alex now to secure your spot on the waitlist. 
                      </p>
                    </div>

                    <div  data-aos="fade-down-right"   data-aos-easing="linear"
                data-aos-duration="1100" className="freature_row my-4">
                        <h2 className="font-black text-[20px]"><span></span>Sign-Up for Early Access: Skip the Wait with Early Access to Alex ™ </h2>
                      <p className="text-md ">
                      Or Lead the Charge for Exclusive Early Access for Just $19.99
                      </p>
                    </div>


                    <div  data-aos="fade-down-right"   data-aos-easing="linear"
                data-aos-duration="1100" className="freature_row my-4">
                        <h2 className="font-black text-[20px]"><span></span>Exclusive Early Access Benefits</h2>
                      <p className="text-md ">
                      Become a Pioneer Member. Be the first to tap into new dimensions of sales training and have a say in the future of Pitch Practice. Pioneer Members receive special pitch sessions, unique pricing, and limited time offers.
                        Limited spots – secure yours now!

                      </p>
                    </div>
            </div>


            <div className="right_side h-[370px]  w-[45%]">
              <img src="images/deal.gif"alt="gif" className="w-full object-cover h-[370px]"/>
            </div>
         </div>


         <footer className="mt-[100px] bg-slate-300 w-full py-5">
            <div className="container mx-auto ">
              <div className="footer_left">
                <h3>
                Stay ahead of the curve – Play Pitch Practice. Your next big close starts here
                </h3>
                <div className="social_wrapper w-[180px] flex justify-between my-4">
                  <a href="https://facebook.com">
                      <img className="w-[30px] h-[30px] rounded-full" src="images/facebook.png" alt="fb"/>
                  </a>
                  <a href="https://x.com">
                      <img className="w-[30px] h-[30px] rounded-full" src="images/x.png" alt="x"/>
                  </a>
                  <a href="https://instragram.com">
                      <img className="w-[30px] h-[30px] rounded-full" src="images/instragram.png" alt="x"/>
                  </a>
                  <a href="https://linkedin.com">
                      <img className="w-[30px] h-[30px] rounded-full" src="images/link.png" alt="x"/>
                  </a>
                </div>
                <div className='w-[180px]'>
                  <a href="/privacy" className="text-blue-600 font-bold">
                    Privacy & Policy
                  </a>
                </div>
              </div>
            </div>
         </footer>
        </>
    )
}

export default HomeLastSection;