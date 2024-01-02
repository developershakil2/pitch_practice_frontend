'use client'
import AOS from 'aos';
import 'aos/dist/aos.css';


const FeatureSection = ()=>{
  AOS.init();
    return(

        <>
         <section className="mt-[150px]">
            <h2  data-aos-easing="linear"
                data-aos-duration="700" data-aos="fade-down" className="text-center text-5xl mt-4 font-black">Feature & Benifits</h2>
            <div className="h-[3px] bg-black mb-4 w-[80px] mx-auto"></div>
            <div className="w-[270px] mx-auto">
                <p
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="text-center">Accelerate Your Sales Journey – Here's How Pitch Practice Changes the Game</p>
            </div>

            <div className="feature container mx-auto mt-[40px] flex justify-between ">
                <div className="featuere_left w-[45%] pl-5">
                    <div data-aos="fade-down-right" 
                       data-aos-easing="linear"
                       data-aos-duration="1000"
                    className="freature_row my-4">
                        <h2 className="font-black text-[20px]"><span>🌟</span>Customized 1:1 Role-Play Experiences</h2>
                      <p className="text-md ">
                      Sharpen your pitch in live sessions with top advisors and receive instant, actionable feedback.
                      </p>
                    </div>

                    <div  data-aos="fade-down-right"   data-aos-easing="linear"
                data-aos-duration="1100" className="freature_row my-4">
                        <h2 className="font-black text-[20px]"><span>🤖</span>Your AI Sales Partner, Alex™</h2>
                      <p className="text-md ">
                      Refine your skills with our responsive AI for solo practice.
                      </p>
                    </div>


                    <div  data-aos="fade-down-right"   data-aos-easing="linear"
                data-aos-duration="1200" className="freature_row my-4">
                        <h2 className="font-black text-[20px]"><span>🎓</span>Bite-Sized Training Modules</h2>
                      <p className="text-md ">
                      Dive into concise modules tailored for on-the-go advisors.
                      </p>
                    </div>

                    <div  data-aos="fade-down-right"   data-aos-easing="linear"
                data-aos-duration="1300" className="freature_row my-4">
                        <h2 className="font-black text-[20px]"><span>⏱️</span>On-Demand Practice Sessions</h2>
                      <p className="text-md ">
                      Sync practice with your life; learn on your terms, whenever, wherever. Flexible scheduling aligns with your busy life for consistent skill development.
                      </p>
                    </div>


                    <div  data-aos="fade-down-right"   data-aos-easing="linear"
                data-aos-duration="1400" className="freature_row my-4">
                        <h2 className="font-black text-[20px]"><span>🛡️</span>Advanced Objection Handling</h2>
                      <p className="text-md ">
                      Overcome any challenge, turn 'maybes' into 'yeses'.
                      </p>
                    </div>

                </div>
                <div className="feature_right w-[45%]">
                <div data-aos="fade-down-left"   data-aos-easing="linear"
                data-aos-duration="1000" className="freature_row my-4">
                        <h2 className="font-black text-[20px]"><span>🧠</span>Microlearning</h2>
                      <p className="text-md ">
                      Rapid lessons for quick skill boosts – because every minute matters.
                      </p>
                    </div>


                    <div  data-aos="fade-down-left"   data-aos-easing="linear"
                data-aos-duration="1100" className="freature_row my-4">
                        <h2 className="font-black text-[20px]"><span>🌱</span>Continuous Skill Evolution</h2>
                      <p className="text-md ">
                      As you grow, so does your training – always the right challenge at the right time.
                      </p>
                    </div>


                    <div  data-aos="fade-down-left"   data-aos-easing="linear"
                data-aos-duration="1200" className="freature_row my-4">
                        <h2 className="font-black text-[20px]"><span>👥</span>Group Role-Play Dynamics</h2>
                      <p className="text-md ">
                      Engage in group sessions for collaborative learning and diversified feedback. Benefit from the collective wisdom of our vibrant community.

                      </p>
                    </div>

                    <div  data-aos="fade-down-left"   data-aos-easing="linear"
                data-aos-duration="1300" className="freature_row my-4">
                        <h2 className="font-black text-[20px]"><span>🤝</span>Networking and Community Engagement</h2>
                      <p className="text-md ">
                     
                      From AI-assisted goal setting to masterclasses, we’ve got it all. Access a vast library of sales resources, from AI-assisted goal setting to comprehensive training programs and industry insights.

                     </p>
                    </div>

                    <div  data-aos="fade-down-left"   data-aos-easing="linear"
                data-aos-duration="1400" className="freature_row my-4">
                        <h2 className="font-black text-[20px]"><span>📚</span>Resource Rich Platform</h2>
                      <p className="text-md ">
                      Join a vibrant community of financial sales professionals for shared learning, mentorship, and networking.
           </p>
                    </div>
                </div>
            </div>
         </section>
        </>
    )
}


export default FeatureSection;