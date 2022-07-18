import { useState, useEffect } from "react";


const Project = ({textLang}) => {
    let [index, setIndex] = useState(0);

    let autoSlide = true;
    let slideInterval;
    let intervalTime = 5000;

    function overproject(val){
        let value = [0,1,2]
        if(val === 'kiri'){
            if(index !== 0){
                setIndex(index-1);
                value = [3*index+0,3*index+1,3*index+2];
                
            }else{
                setIndex(index+2);
                value = [3*index+0,3*index+1,3*index+2];
                
            }
        }else if(val === 'kanan'){
            if(index !== 2){
                setIndex(index+1);
                value = [3*index+0,3*index+1,3*index+2];
                
            }else{
                setIndex(index-2);
                value = [3*index+0,3*index+1,3*index+2];
                
            }
        }
        return value;
    }
    let [isipro, setIsipro] = useState([0,1,2])

    function tricky(){
        setIsipro(overproject('kanan'))
    }

    function autoS(){
        slideInterval = setInterval(tricky, intervalTime);
    }

    useEffect(()=>{
        setIsipro([0,1,2])
    },[])

    useEffect(()=>{
        if(autoSlide){
            autoS();
        }
        return () => clearInterval(slideInterval)
    }, [isipro])

  return(
    <div  className="project p-1  " id="project">
                <div>
                <h2 className="text-center font-semibold mt-6 mb-4 ">{textLang['nav'][3]}</h2>
                </div>
                <div className="md:overflow-hidden  md:h-[13em] md:flex md:flex-col w-[100%] md:flex-wrap">
                <div className="pinit erenpro w-full">
                <div onClick={()=>{window.location = 'https://erenpro.herokuapp.com'}} className="hidden md:block w-[90%] h-[12em] bg-first/50 flex rounded-lg mx-auto my-3 flex-col shadow-sfirst2">
                    <div className="text-center ">
                        <h2>{textLang['project'][isipro[0]]}</h2>
                    </div>
                    <div className="flex flex-row h-full p-2">
                        <div className="w-[30%] text-xs h-[90%] pt-3">
                        {textLang['project'][isipro[2]]}
                        </div>
                        <div className={`w-[70%] ${textLang['project'][isipro[1]]} bg-center bg-cover rounded-lg h-[90%] px-2 shadow-md shadow-first2`}>
                        </div>
                    </div>
                </div>
                <div onClick={()=>{window.location = 'https://erenpro.herokuapp.com'}} className="md:hidden w-[90%] h-[12em] bg-first/50 flex rounded-lg mx-auto my-3 flex-col shadow-sfirst2">
                    <div className="text-center ">
                        <h2>{textLang['project'][0]}</h2>
                    </div>
                    <div className="flex flex-row h-full p-2">
                        <div className="w-[30%] text-xs h-[90%] pt-3">
                        {textLang['project'][2]}
                        </div>
                        <div className={`w-[70%] ${textLang['project'][1]} bg-center bg-cover rounded-lg h-[90%] px-2 shadow-md shadow-first2`}>
                        </div>
                    </div>
                </div>
                </div>
                <div className="coming soon w-full">
                    <div className="w-[90%] h-[12em] bg-first/50 flex rounded-lg mx-auto my-3 flex-col shadow-sfirst2">
                    <div className="text-center ">
                        <h2>{textLang['project'][3]}</h2>
                    </div>
                    <div className="flex flex-row h-full p-2">
                        <div className="w-[70%] bg-second/75 rounded-lg h-[90%] px-2 text-center pt-14 shadow-md shadow-first2">
                        {textLang['project'][4]}
                        </div>
                        <div className="w-[30%] text-xs h-[90%] ml-1 pt-3">
                        {textLang['project'][5]}
                        </div>
                    </div>
                    </div>
                </div>
                <div className="coming soon w-full">
                    <div className="w-[90%] h-[12em] bg-first/50 flex rounded-lg mx-auto my-3 flex-col shadow-sfirst2">
                    <div className="text-center ">
                        <h2>{textLang['project'][6]}</h2>
                    </div>
                    <div className="flex flex-row h-full p-2">
                        <div className="w-[30%] text-xs h-[90%] pt-3 ">
                        {textLang['project'][8]}
                        </div>
                        <div className="w-[70%] bg-second/75 rounded-lg h-[90%] px-2 text-center pt-14 shadow-md shadow-first2">
                        {textLang['project'][7]}
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="hidden md:flex md:justify-between">
                  <div onClick={()=>{setIsipro(overproject('kiri'))}} className="pkiri rounded-full h-10 w-10 relative bg-slate-600/40 -top-32 text-center md:flex md:self-center md:items-center cursor-pointer hover:scale-110 transition-all duration-300"> <span>A</span> </div>
                  <div onClick={()=>{setIsipro(overproject('kanan'))}} className="pkanan rounded-full h-10 w-10 relative bg-slate-600/40 -top-32 text-center md:flex md:self-center md:items-center md:justify-self-end cursor-pointer hover:scale-110 transition-all duration-300"> <span>B</span> </div>
                </div>

                
            </div>
  )
};

export default Project;