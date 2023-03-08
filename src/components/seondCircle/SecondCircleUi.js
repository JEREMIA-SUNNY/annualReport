
import React,{Fragment,useEffect,useState,useRef} from 'react';

import {ReactComponent as MySVG} from '../../Assets/Images/Ellipse.svg';


import './SecondCircle.css';


const SecondCircleUi = function SecondCircleUi() {

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
        const elementIdList = ['fBubble','sBubble','thBubble','foBubble'];

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
            document.getElementById('ellip_svg').style.animation = "fadeInFromBottom 2s forwards"
        },9000)

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
                                Elevate on-the-job vocational training in Haryana
                            </div>
                            <div className='col-6 headingPara'>
                            Over the next 2 years, we will help the Skill Development and Industrial Training Department, Haryana (SDIT-Haryana) scale their dual-system of training model for vocational education students by:
                            </div>
                        </div>
                </div>

                </div>

     
            <div className='row circle_container'>
                    <MySVG className="img-fluid semi-circle-svg-img" id="ellip_svg"/>
                    <div className='row'>
                            <div className='col-12' style={{zIndex:1}}>
                                <div className='row justify-content-center mt-5'>
                                    <div className='col-6 row justify-content-center align-items-center text-center second_grayed_bubble' id='sBubble'>
                                        <div>
                                        Building strong industry partnerships for quality OJTs
                                        </div>
                                    
                                    </div>
                                </div>

                                <div className='row justify-content-center second_row'>
                                    <div className='row justify-content-between'>
                                        <div className='col-4 row justify-content-center align-items-center text-center second_grayed_bubble' id='fBubble'>
                                            <div>
                                            Providing on-the-job trainings (OJT) of 6 months’ duration

                                            </div>
                                   
                                        </div>
                                        <div className='col-4 row justify-content-center align-items-center text-center second_grayed_bubble' id='thBubble'>
                                            Doubling the number of OJT units in the state
                                        </div>

                                    </div>
                                    
                                </div>

                                <div>
                                    <div className='row justify-content-center'>
                                        
                                        <div className='col-6 row justify-content-center align-items-center text-center green_circle' id='foBubble'>
                                            <div>
                                                <div className='row justify-content-center' 
                                                    style={{
                                                        color:" #FFFFFF",
                                                        fontSize: "1.5rem" ,
                                                        fontWeight:700

                                                    }}>
                                                        Potentially impacting
                                                    </div>
                                                <div className='row justify-content-center'
                                                style={{
                                                    color:"#FFB900",
                                                    fontSize: "4rem" ,
                                                    fontWeight:400

                                                }}>
                                                    XXXX
                                                </div>
                                                <div className='row justify-content-center' 
                                                style={{
                                                    color:" #FFFFFF",
                                                    fontSize: "1.5rem",
                                                    fontWeight:700

                                                }}>
                                                    of students
                                                </div>

                                            </div>
                                       
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

export default SecondCircleUi;