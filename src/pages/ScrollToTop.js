import React, {useState, useEffect} from "react";
import ArrowCircleUpRoundedIcon from '@mui/icons-material/ArrowCircleUpRounded';
import style from "../components/SectionsProfile/Profiles.module.css"

const ScrollToTop = () =>{
    const [showScrollTopButton,setShowScrollTopButton ] = useState(true);

    useEffect(() =>{
        window.addEventListener('scroll', ()=>{
            if(window.screenY>300){
                setShowScrollTopButton(true);
            }else{
                setShowScrollTopButton(true);
            }
        })
       
    },[]);

    const scrollTop = ()=>{
        window.scrollTo({top:0, behavior: "smooth"});
    }

    return (
        <div>
            {showScrollTopButton && <ArrowCircleUpRoundedIcon className={style.topbtnposition} onClick={scrollTop}/>}
        </div>
    );
}

export default ScrollToTop