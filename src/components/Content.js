
import Skills from "./Skils";
import Experience from "./Experience";
import Blog from "./Blog";
import Project from "./Project";
import Contact from "./Contact";


const Content = ({setSel, sel, textLang}) => {
   
    return(
        <div  className={`${ sel ? 'top-[20%]' : 'top-[60%]'} isi pb-64 h-screen md:pb-0 z-30 absolute md:static md:grid md:grid-cols-2 md:gap-3 top-[90%] nav-hero md:h-auto transition-all duration-75 bg-second/90 shadow-xl shadow-first2 rounded-t-3xl  overflow-y-scroll `}>

            <div className="search flex flex-row  justify-evenly mt-9 md:absolute md:-top-4 md:left-[3.5%] md:scale-75 ">
                <div className="rounded-md shadow-sfirst1 ">
                <input type="search" className="border-2 border-first px-1 rounded-md" name="search" id="search" />
                </div>
                <div>
                <button className="bg-slate-800 py-1 px-2 rounded-md text-first -mt-2 shadow-sfirst2">Cari</button>
                </div>
                <div >
                    <button onClick={()=>{setSel(!sel)}} className={`${sel? 'block':'hidden'} selengkapnya bg-slate-800 py-1 px-2 rounded-md text-first -mt-2 shadow-sfirst2`}>X</button>
                </div>
            </div>


            <Skills />
            <Experience textLang={textLang}/>
            <Blog textLang={textLang}/>
            <Project textLang={textLang}/>
            <Contact textLang={textLang}/>


            <div>
                <div className="footer text-center text-sm p-1">
                <div className="w-30 my-7 px-4  h-8 font-sans rounded-xl shadow-md hover:scale-105 cursor-pointer transition-all duration-300 ring-1 ring-first2 bg-first mx-auto">Unduh CV Saya</div>
                <div className="w-24 my-7 px-4 py-2  h-8 font-sans rounded-xl shadow-md hover:scale-105 cursor-pointer transition-all duration-300 ring-1 ring-first2 bg-first mx-auto"><a href="https://github.com/ReyhanAnf/-/">Lihat Resource</a></div>
                {textLang['credit'][0]} <b>{textLang['credit'][1]}</b>
                </div>
                <div className="footer text-center text-sm p-1">
                {textLang['credit'][2]} <br /> <b>{textLang['credit'][3]}</b>
                </div>
            </div>
        </div>
    )
}

export default Content