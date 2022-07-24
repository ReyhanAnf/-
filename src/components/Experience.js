import { useEffect, useState } from "react";
import './animate.css';

const Experience = ({textLang}) => {
    let [anim, setAnim] = useState(0);
    let [kol, setKol] = useState(0);
    let [kval, setKval] = useState(0);
    let [sem, setSem] = useState(0);

    let autoSlide = true;
    let slideInterval;
    let [intervalTime, setIntervalTime] = useState(2000);

    function nextSlide(){
        if(kol < textLang['certificates'].length){
            setTimeout(()=>{
                setKol(kol+1);
                setSem(kol)
            },1500);
        }else if(kol >= textLang['certificates'].length){
            setTimeout(()=>{
                setKol(0);
                setSem(kol);
            },1500);
        }
        setKval(kol%4);
        setAnim(1);
    }

    function autoS(){
        slideInterval = setInterval(nextSlide, intervalTime);
    }

    useEffect(()=>{
        setKval(0);
    },[])

    useEffect(()=>{
        if(autoSlide){
            autoS();
            setAnim(0);
        }
        return () => clearInterval(slideInterval)
    }, [kol])

    return(
        <div onClick={()=>{setAnim(!anim)}} className="eksperience" id="eksperience">
            <div>
            <h2 className="text-center font-semibold my-4">{textLang['nav'][2]}</h2>
            </div>
            <div className="Blog p-1" id="blog">
            <div>
            <h2 className="text-center font-semibold mt-6 mb-4 ">{textLang['exp'][4]}</h2>
            </div>
            <div className={`${anim ? 'slides':'nothing'} coming soon w-full`}>
            <div className="w-[90%] h-[14em] bg-first/50 flex rounded-lg mx-auto my-3 flex-col shadow-sfirst2">
                <div className="text-center ">
                <h2>Certificate</h2>
                </div>
                <div className="flex flex-row h-[110%] p-2 group w-full mx-auto self-center">
                    <div className= {`bg-clip-content justify-self-center w-full bg-[url('${textLang['certificates'][kol]}')] bg-center  bg-cover bg-scroll rounded-lg h-[100%] px-2 flex items-center group-hover:bg-opacity-75 shadow-inner shadow-first2`}>
                        
                    </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Experience;