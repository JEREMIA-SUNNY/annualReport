// import React from 'react'

// export const Slider2 = () => {
//   return (
//     <>

//     </>
//   )
// }


// import React, { useState } from "react";
// import Slider from "react-slick";
// import "../Style/slider2.css"

// export const Slider2 = () => {
//   const [sliderSettings, setSliderSettings] = useState({
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 2,
//     slidesToScroll: 2,
//   });

//   return (
//     <>
//         <Slider  id="new-slider"  {...sliderSettings}>
//       <div>Slide 1</div>
//       <div>Slide 2</div>
//       <div>Slide 3</div>
//       <div>Slide 4</div>
//       <div>Slide 5</div>
//     </Slider>
//     </>

//   );
// };

// export default slider2;



import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Fab_uk from "../Assets/Images/FAB_Uttarakhand.png"

const Data=["A","B","C"]
export const Slider2 = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 0 && index < 4) {
        setIndex(index + 1);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    console.log(index)
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [index]);
  
  function scroll(e) {
    // if (slider === null)
    //     return 0;

    e.wheelDelta < 0 ? (
      // console.log(e.wheelDelta)
      setIndex(index=>index+1)
      // slider.current.slickNext()
    ) : (
      setIndex(index=>index-1)
      
        // slider.current.slickPrev()
    );

    // if (e.wheelDelta < 0) {
    //     setClaaAdded("animate__animated animate__bounce animate__bounceIn")
    // }

};
  useEffect(() => {
    window.addEventListener("wheel", scroll, true);

    return () => {
        window.removeEventListener("wheel", scroll, true);
    };
  }, [])


  return (
    <>

      {/* <div className='text-head FirstSlide_text' >
        <h1 className='animate__animated animate__backInUp Audacious_text'>An Audacious Year at Medha</h1>
        <div className="line"></div>
        <p className="animate__animated animate__backInUp Annual_text">Annual Report</p>
        <p className="animate__animated animate__bounce Time_text">2021 - 2022</p>
      </div> */}

    </>
  );
};

// export default slider2;


