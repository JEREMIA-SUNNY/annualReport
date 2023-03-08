import React, { useState } from 'react'
import Carousel, { consts } from "react-elastic-carousel";
import { Slide1 } from '../SubComponent/Strengthing/Slide1';
import { Slide2 } from '../SubComponent/Strengthing/Slide2';
import { Slide3 } from '../SubComponent/Strengthing/Slide3';
import { Slide4 } from '../SubComponent/Strengthing/Slide4';
import { Slide6 } from '../SubComponent/Strengthing/Slide6';
import arrowleft from '../Assets/Images/Arrow_left_black.png'
import arrowright from '../Assets/Images/arrow_right_black.png'

export const Strengthen = () => {

 const myArrow=({ type, onClick, isEdge })=> {
    const pointer = type === consts.PREV ? <img src={arrowleft}/> : <img src={arrowright}/>
    return (
      <button onClick={onClick} disabled={isEdge}>
        {pointer}
      </button>
    )
  }
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const handleOnChange = (currentItem, pageIndex) => {
      setCurrentPageIndex(pageIndex);
  };
  
  return (
    <>
      <div id="Strength" className="Strength">
        <Carousel className='Strength_main' renderArrow={myArrow} onChange={handleOnChange}>
          <div className="Item Strength-item1 col-10">
            <Slide1 index={currentPageIndex}/>
          </div>
          <div className="item">
            <Slide2  index={currentPageIndex}/>
          </div>
          <div className="item">
            <Slide3 empclass="emp_slide_1" headClass="head_slide_1" index={currentPageIndex} className="cursor_slide" subject = "In the development sector, your wins often feel far and few compared to failures. And this may compel you to remember only the good things to survive. However, good perceptions based on small samples do not represent everyone you work with. So while you remember the good, it’s worthwhile to be conscious and curious about what data says. Data shows you the cracks, but it also tells you what is working – and how you can replicate the best practices.”" head="“Read the stories that data tells." emp="-  Swati, Medha employee" />
          </div>
          <div className="item" >
            <Slide4 index={currentPageIndex}/>
          </div>
          <div className="item">
            <Slide3 empclass="emp_slide_2" headClass="head_slide_2" index={currentPageIndex} className="cursor_slide2" head="“I make my arguments with confidence." subject="One of my core responsibilities is to build better relationships with colleges. Data plays an important role here, as I need to delve deeper into our previous work on campus. 

Data gives me insights, such as the streams our programs are more effective in or the time of the year when students are more likely to take our programs. These inputs help me form better strategies for my area and its campus' performance." emp="-  Swati, Medha employee" />
          </div>
          <div className="item">
            <Slide6  index={currentPageIndex} />
          </div>
          <div className="item">
            <Slide3 empclass="emp_slide_3" headClass="head_slide_3" index={currentPageIndex} className="cursor_slide3" head="I can better showcase my area." subject="SIS's third version has made our work on the ground incredibly convenient. We can update all details in a single place and in real time while registration and certification are automated.
For facilitators, with many details to track, it eases their admin work and leaves more time to focus on students. As an AVP, it helps me see how my area is growing and showcase its story using numbers from registration to internship." emp="-  Swati, Medha employee" />
          </div>
        </Carousel>
      </div>
    </>
  )
}
