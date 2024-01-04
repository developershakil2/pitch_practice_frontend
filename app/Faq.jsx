'use client'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Faq from "react-faq-component";
import PropTypes from 'prop-types';



const data = {
    title: "FAQ ",
    rows: [
        {
            title: "Is it easy to schedule practice sessions",
            content: `Yes. Book a session like you book a ride – it's that simple.`,
        },
        {
            title: "How secure is my data?",
            content:
                "Your privacy is paramount. We guard it with cutting-edge security measures.",
        },
        {
            title: "Can I track my progress?",
            content: `Absolutely. Visualize your growth with our detailed analytics dashboard. `,
        },
        {
            title: "Are live feedback sessions available?",
            content: `Yes. Get real-time insights from Alex™ and expert advisors.`,
        },
        {
        title: "Does Pitch Practice support beginners?",
        content: `100%. Start strong with foundational skills and scale up.`,
    },
    ],
};
const styles = {
    // bgColor: 'white',
    titleTextColor: "#111",
    rowTitleColor: "#111",
    // rowContentColor: 'grey',
    // arrowColor: "red",
};

const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
};

const FaqSection = ()=>{
    if (typeof document !== 'undefined') {
        AOS.init();
      }
  
    return(

        <>
         <section className="mt-[150px]">
            <div className="container mx-auto">
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
            </div>
         </section>
        </>
    )
}


export default FaqSection;