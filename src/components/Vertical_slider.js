import React, { useEffect, useRef, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import AnimatedText from 'react-animated-text-content';
import "../Style/slick.css"


const Vertical_slider = () => {
    const main_vert_slide_class=useRef(null)

    const settings = {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        // fade: true,
        lazyLoad: true,
        autoplay: false,
        
    };

    const [ClassAdded, setClaaAdded] = useState("")

    const slider = useRef(null);

    function scroll(e) {
        if (slider === null)
            return 0;

        e.wheelDelta < 0 ? (
            slider.current.slickNext()
        ) : (
            slider.current.slickPrev()
        );

        if (e.wheelDelta < 0) {
            setClaaAdded("animate__animated  animate__bounceIn")
        }

    };

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('Vertical_slider');
              // entry.target.classList.add('main_3rd_slide')
            }
          });
        });
        // observer.observe(mainCardId.)
        observer.observe(main_vert_slide_class.current);
       
        
        return () => {
          
          observer.unobserve(main_vert_slide_class.current);
          
        };
      }, []);

    useEffect(() => {

        window.addEventListener("wheel", scroll, true);

        return () => {
            window.removeEventListener("wheel", scroll, true);
        };
    }, []);

    // useEffect(() => {
    //     let slickListDiv = document.getElementsByClassName('slick-list')[0]
    //     slickListDiv.addEventListener('wheel', event => {
    //       event.preventDefault()
    //       event.deltaY > 0 ? this.slider.slickNext() : this.slider.slickPrev()
    //     })
    // }, [])

    return (
        <>
            <div ref={main_vert_slide_class}  id="Vert_slide_1" className='container-fluid backgournd-faded' >
                <Row className='vertical-slider1'>
                    <Col>

                        <Slider {...settings} ref={slider} className='vertical_slick_slider d-flex justify-content-center align-item-center'>

                            <div className='card-middle col-12'>
                                <Card className="card-design-fabuk card-design ">

                                    <Card.Body className='d-flex  align-items-center justify-content-center '>

                                        <Card.Text className={`col-9 text-center vert_cards_text ${ClassAdded}`}>
                                        IN 2021, WE SET AN AUDACIOUS GOAL OF HELPING <span className='yellow-text'>1 MILLION <br/> YOUTH</span> TRANSFORM THEIR LIVES IN THE NEXT 5 YEARS
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div>

                                <Card className="card-design-fabuk card-design ">

                                    <Card.Body className='d-flex  align-items-center justify-content-center '>

                                        <Card.Text className={`col-9 text-center vert_cards_text vert_cards_text_lato ${ClassAdded}`} >
                                            1 million is not a random number                                        
                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </div>

                            <div>
                                <Card className="card-design-fabuk card-design ">

                                    <Card.Body className='d-flex  align-items-center justify-content-center '>

                                        <Card.Text className={`col-9 text-center vert_cards_text vert_cards_text_lato vert_cards_text_3rd ${ClassAdded}`}>

                                        It represents 10 % of the estimated 9 million college-going <br/> students in India’s Hindi-speaking belt and serves as a <br/><span className='yellow-text'> tipping point </span>  for driving significant social change.

                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </div>


                            <div>
                                <Card className="card-design-fabuk card-design ">

                                    <Card.Body className='d-flex flex-column  align-items-center justify-content-center '>

                                        <Card.Text className='col-9 text-center vert_cards_text  animate__animated animate__bounce animate__bounceIn'>
                                            How will we <span className='yellow-text'>40X our impact</span>  since 2011?
                                        </Card.Text>
                                        <div className='d-flex justify-content-around '>
                                            <div className="circle mx-5">By driving greater adof ‘the Medha way’ at scale</div>
                                            <div className="circle mx-5">Remaining quality-driven in our direct student engagement</div>
                                            <div className="circle mx-5">And committing to data-driven decision-making at work</div>
                                        </div>

                                    </Card.Body>
                                </Card>
                            </div>

                        </Slider>
                    </Col>
                </Row>

            </div>



        </>
    )
}

export default Vertical_slider