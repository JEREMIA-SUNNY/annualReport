import React, { useEffect, useRef, useState } from 'react'
import useTypeWriter from 'react-typewriter-hook';
import { Para } from '../../Data/Para'
import { Stories } from '../../Data/Stories';
import swati_image from "../../Assets/Images/swati_medha_employee.png"

export const Slide3 = (props) => {
    const [subject,setsubject] = useState(props.subject)
    const [heading, setheading] = useState(props.head)
    const [employee, setemployee] = useState(props.emp)
    // const [magicName, setMagicName] = useState("“Read the stories that data tells.");
    // const intervalRef = useRef({});
    // const name = useTypeWriter(magicName, { typeSpeed: 50, delayMs: 1000, eraseOnComplete: false });

    // useEffect(() => {
    //   console.log("subject" ,props);
    // }, [])
    
    return (
        <>

            <div className='col-12'>
                <div className='row'>
                    <div className='col-6'>
                        
                        <Stories head_class={props.headClass} empclass={props.empclass} headclass={props.headClass} index={props.index} className={props.className} sub={subject} head={heading} emp={employee}  />
                        
                    </div>
                    <div className='col-6'>
                        <img className='swati_image' src={swati_image}/>
                    </div>
                </div>
            </div>

        </>
    )
}
