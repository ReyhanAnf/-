
const Introjust = ({setSel, sel, lang, setLang, textLang}) => {
    return(
        <div className="flex flex-col justify-around items-center mb-7 pt-7 bg-gradient-to-t from-first2 to-first">
                <div className="mb-2 mt-7 p-1 font-semibold"><h1 className="job bahasa">{textLang['hero'][0]}</h1></div>
                    <div className="pilihBahasa top-20 flex items-center scale-75 cursor-pointer ">
                        <div className="text-xs font-semibold px-1">Bahasa</div>
                        <div className="bg-second w-11 rounded-xl shadow-sfirst2">
                        <label  htmlFor="pb" className="cursor-pointer " >
                            <input onClick={()=>{setLang(!lang)}}  type="checkbox" name="pb" id="pb" className="peer ml-6 checked:ml-0 scale-50 transition-all duration-300" />
                            <span className="bg-first fixed h-4/5 w-5 items-center top-[3px] left-[70px] peer-checked:left-[50px] peer-checked:bg-first2 shadow-lg rounded-full transition-all duration-300" />
                        </label>
                        </div>
                        <div className="text-xs font-semibold px-1">Language</div>
                    </div>
                    <div className="text-center mx-5 mt-7 " >
                        <span className="font-serif italic text-sm quotes">
                        "{textLang['hero'][1]}"
                        </span><br />
                        <span className="block font-serif py-2 my-1 text-lg katakata">
                        {textLang['hero'][2]}
                        </span><br />
                    <div className="text-sm">
                        <div className="bg-second/75 w-[80%] h-10 rounded-xl mx-auto shadow-lg hover:shadow-2xl hover:ring-1 transition-all duration-300 cursor-pointer animate-bounce">
                            <div onClick={()=>{setSel(!sel)}} className="pt-2 readmore">{textLang['hero'][3]}</div>
                        </div>  
                    </div>
                    <div class="font-mono my-5 px-2 py-4 bg-first2/50 rounded-lg text-center md:w-[60%] md:mx-auto ">
                         {textLang['intro'][0]} <br/> {textLang['intro'][1]}
                    </div>
                     
                </div>
            </div>
    )
}

export default Introjust;