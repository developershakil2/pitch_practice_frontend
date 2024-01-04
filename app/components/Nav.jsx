'use client'





const Nav = ()=>{


    return(
        <>
        
        <div className="container py-2 navBar mx-auto h-[90px] flex justify-between">
            <div className="nav_left py-2 h-full flex items-center">
              <a href="/">
              <img className="w-[180px] h-[60px]" src="images/tlogo.png" alt="pitch practice "/>
              </a>

            </div>
            <div className="nav_right h-full flex items-center">
              <a className="font-black text-white bg-[green] px-6 py-2 rounded-xl" href="/talk">Let's Talk</a>
            </div>
        </div>
        </>
    )
}


export default Nav;