import React, {useRef, useState,useEffect } from 'react';

export const Second= () => {

  const [isVisible, setIsVisible] = useState(false);
  
  const elementRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('example-element-visible');
        }
      });
    });
    
    observer.observe(elementRef.current);
    
    return () => {
      observer.unobserve(elementRef.current);
    };
  }, []);
  
  return (
    <>
    
    
        <div  className='Seond_slide'>
            <p ref={elementRef} className={`second_slide_text`} style={{}}>
            OVER THE PAST DECADE, <span className="yellow-text"> 85,000+</span> PASSIONATE YOUTH HAVE <br /> ENGAGED WITH US TO <span className="yellow-text">START CAREERS THEY ENJOY </span>
            </p>
        </div>
    
    </>
  )
}


