import React,{Fragment,useEffect,useState,useRef} from 'react';
import {ReactComponent as MySVG} from '../../Assets/Images/CircleGreen.svg';


import './FirstCircle.css';


const FirstCircleUi = function FirstCircleUi() {

    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        },
        {
          root: null,
          rootMargin: '0px',
          threshold: 1.0,
        }
      );
  
      if (ref.current) {
        observer.observe(ref.current);
      }
  
      return () => {
        if (ref.current) {
        
          observer.unobserve(ref.current);
        }
      };
    }, []);
    

    const addAnimation = ()=>{
        const elementIdList = ['firstBubble','SecondBubble','thirdBubble','fourthBubble','fifthBubble','sixthBubble'];
        if(isVisible){
            
        setTimeout(()=>{
            document.getElementById(elementIdList[0]).style.animation = "fadeIn 2s forwards"

        },1000)

        setTimeout(()=>{
            document.getElementById(elementIdList[1]).style.animation = "fadeIn 2s forwards"

        },3000)
        setTimeout(()=>{
            document.getElementById(elementIdList[2]).style.animation = "fadeIn 2s forwards"

        },5000)
        setTimeout(()=>{
            document.getElementById(elementIdList[3]).style.animation = "fadeIn 2s forwards"

        },7000)
        setTimeout(()=>{
            document.getElementById(elementIdList[4]).style.animation = "fadeIn 2s forwards"

        },9000)
        setTimeout(()=>{
            document.getElementById(elementIdList[5]).style.animation = "fadeInFromBottom 2s forwards"

        },11000)

        setTimeout(()=>{
            document.getElementById('svg').style.animation = "fadeInFromBottom 2s forwards"
        },13000)


        }

    }

    useEffect(()=>{
        addAnimation()

    },[isVisible])




  return (
    <div ref={ref}>

        {isVisible?<div className='container row flex-column justify-content-around'>
            <div className='row'>
                <div className='col-12'>
                        <div className='row align-items-center'>
                            <div className='col-6 main_heading'>
                            Make vocational education aspirational in UP
                            </div>
                            <div className='col-6 headingPara'>
                            We renewed our 8-year-old partnership with the Department of Technical Education, Uttar Pradesh (DTE-UP) to strengthen polytechnic education, by:
                            </div>
                        </div>
                </div>

                </div>

     
            <div className='row circle_container'>
                    <MySVG className="img-fluid arrow-svg" id="svg"/>
                    <div className='row'>
                            <div className='col-12'>
                                <div className='row justify-content-center mt-5'>
                                    <div className='col-4 grayed_bubble text-center grayed_bubble' id='thirdBubble'>
                                        <div>
                                        Improving the physical learning facilities,
                                        </div>
                                    
                                    </div>
                                </div>

                                <div className='row justify-content-center mb-5'>
                                    <div className='row justify-content-between' style={{width:"68vw"}}>
                                        <div className='col-4 grayed_bubble text-center' id='SecondBubble'>
                                            <div>
                                                    Introducing an industry-relevant curriculum,

                                            </div>
                                   
                                        </div>
                                        <div className='col-4 grayed_bubble text-center' id='fourthBubble'>
                                        Helping industry and academia work closely
                                        </div>

                                    </div>
                                    
                                </div>

                                <div>
                                    <div className='row justify-content-between'>
                                        <div className="col-4 grayed_bubble text-center" id="firstBubble">
                                        Building experiential facilitation skill in teachers,

                                        </div>
                                        
                                        <div className='col-4 orange_bubble text-center' id='sixthBubble'>
                                        Potentially impact 70,000+ young people
                                        </div>
                                        <div className='col-4 grayed_bubble text-center' id='fifthBubble'>
                                        Driving data-backed governance in the system
                                        </div>
                                    </div>
                                </div>
                            

                            </div>
                        </div>

                </div> 


        </div>:<div></div>}
        </div>
  )
}

export default FirstCircleUi;