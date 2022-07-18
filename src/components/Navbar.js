import reyhan from './img/reyhan.svg';

const Navbar = ({nav, setNav}) => {
    // let [hid,setHid] = useState(true);
    // let [op, setOp] = useState(0);
    return(
        <div className="flex flex-row justify-between bg-gradient-to-b from-first2 to-first">
            <div onClick={()=>{setNav(!nav)}} className="imenu m-4 p-1 z-40 transition-all duration-300 cursor-pointer" id="button-nav">
                <svg className="w-5 h-5" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 210 210" style={{enableBackground: 'new 0 0 210 210'}} xmlSpace="preserve">
                <path id="XMLID_4_" d="M75,0H15C6.716,0,0,6.716,0,15v60c0,8.284,6.716,15,15,15h60c8.284,0,15-6.716,15-15V15
                            C90,6.716,83.284,0,75,0z" />
                <path id="XMLID_6_" d="M75,120H15c-8.284,0-15,6.716-15,15v60c0,8.284,6.716,15,15,15h60c8.284,0,15-6.716,15-15v-60
                            C90,126.716,83.284,120,75,120z" />
                <path id="XMLID_8_" d="M195,0h-60c-8.284,0-15,6.716-15,15v60c0,8.284,6.716,15,15,15h60c8.284,0,15-6.716,15-15V15
                            C210,6.716,203.284,0,195,0z" />
                <path id="XMLID_10_" d="M195,120h-60c-8.284,0-15,6.716-15,15v60c0,8.284,6.716,15,15,15h60c8.284,0,15-6.716,15-15v-60
                            C210,126.716,203.284,120,195,120z" />
                </svg>
            </div>
            <div className="text-slate-900 text-xl my-2 py-2 pb-5 border-b-2 border-slate-400"><h1>Reyhan Andrea Firdaus</h1></div>
            <div  className="w-11 h-11 rounded-full m-2 py-2 cursor-pointer">
                <img src={reyhan} alt="Reyhan" className="relative -top-7 right-1 pt-1 scale-90 hover:animate-spin"  />
                {/* <div className={`${hid ? 'hidden' : 'flex'} flex-col w-80 h-[450px] rounded-lg left-0 fixed z-30 top-60  shadow-lg`}>
                    <img onClick={()=>{setOp(op+1)}} src={reyhan} alt="Reyhan" className=" scale-75 relative -top-[45%] z-30" />
                    
                </div>
                <div className={`${op === 9 ? 'absolute' : 'hidden'}`}>HAlooooo</div> */}
            </div>
        </div>
    )
}

export default Navbar;