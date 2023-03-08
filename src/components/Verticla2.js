import React, { useEffect, useRef, useState } from 'react';
import Carousel, { consts } from 'react-elastic-carousel'
import { items } from '../Data/items';
import fab_uk from '../Assets/Images/FAB_Uttarakhand.png'
import proffesional from '../Assets/Images/prof_new_trans.png'
import veteran from '../Assets/Images/veteran_trans_new.png'
import Xicon from '../Assets/Images/cross_new_trans.png'
import arrowleft from '../Assets/Images/Arrow_left_black.png'
import arrowright from '../Assets/Images/arrow_right_black.png'

import FirstCircleUi from '../components/firstCircle/FirstCircleUi';
import SecondCircleUi from '../components/seondCircle/SecondCircleUi';

// import '../app.scss'

export const Verticla2 = () => {
    const [currentPageIndex, setCurrentPageIndex] = useState(0);
    const myArrow=({ type, onClick, isEdge })=> {
        const pointer = type === consts.PREV ? <img className={currentPageIndex == 0 ?"d-none":"position_middle_left"} src={arrowleft}/> : <img className={"position_middle_right"} src={arrowright}/>
        return (
          <button onClick={onClick} disabled={isEdge}>
            {pointer}
          </button>
        )
      }
    const [setclassforlist, setsetclassforlist] = useState("")
    

  
    const handleOnChange = (currentItem, pageIndex) => {
        setCurrentPageIndex(pageIndex);
    };





   

    const duration = 1000; // ms
    const delay = 500; // ms

    const animStr = (i) => `fadeIn ${duration}ms ease-out ${delay * (i + 1)}ms forwards`;



    return (
        <>
            <div id="vert2_slide" className="styling-example">
                <Carousel className='vertical2-slide_main' renderArrow={myArrow} itemsToShow={1} onChange={handleOnChange}>
                    <div className='vertical2-slide d-flex justi'>

                        <div className='col-12'>
                            <div className='row'>
                                <div className='col-7'>
                                    <div className='verticalslide1Head col-12'>
                                        <p className={currentPageIndex == 0 ? "verticalslide1Head-text animate__animated animate__fadeInDown " : "verticalslide1Head-text"} >
                                            BY DRIVING GREATER ADOPTION OF ‘THE <br /> MEDHA WAY’ WITH STATE GOVERNMENTS <br /> TO IMPACT MORE STUDENTS
                                        </p>
                                    </div>
                                    <div className='verticalslide1Head col-11'>
                                        <p className={currentPageIndex == 0 ? "verticalslide1Head-text-1 animate__animated animate__fadeInLeft " : "verticalslide1Head-text-1"} >Partnering with more <span className='greentext'>like-minded</span> state education departments,<br /> industry leaders, and peers will help us elevate the learning<br /> experience <span className='greentext'>and bring career opportunities youth care about to <br /> more than 100,000 students per year.</span>  Last year, we took steps to:</p>
                                    </div>
                                </div>
                                <div className='col-5'>
                                    <div className='vertical-slide1-img'>
                                        <img className={currentPageIndex == 0 ? "vert1-slide1-img animate__animated animate__fadeInRight " : "vert1-slide1-img"} src={fab_uk} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='vertical2-slide d-flex '>
                        <div className='col-12'>
                            <div className='row'>
                                <div className='col-7'>
                                    <div className='vertical-slide2-img'>
                                        <img className='vert1-slide2-img ' src={fab_uk} />
                                    </div>
                                </div>
                                <div className='col-5'>
                                    <div className={currentPageIndex == 1 ? "verticalslide1Head animate__animated animate__fadeInDown" : ""}>
                                        <p className='scaleknoledge'>Scale as a Knowledge Partner</p>
                                    </div>
                                    <div className={currentPageIndex == 1 ? "verticalslide1Head animate__animated animate__flipInX" : ""}>
                                        <p className='residenseoursystem col-10'>Redesigned our System Adoption team to be self-sufficient:</p>
                                    </div>

                                    <div className='verticalslide1Head3 col-10'>
                                        <ul className={currentPageIndex == 1 ? "list" : ""} >
                                            <li className='marginstate animatedlisttext mt-5 d-flex '>
                                                <img className='animatedlisticon mx-4' src={proffesional} />

                                                Seasoned professionals <br />leading 6 diverse verticals,
                                            </li>
                                            <li className='marginstate animatedlisttext  mt-5  d-flex '>
                                                <img className='animatedlisticon mx-4' src={Xicon} />

                                                State heads overseeing project <br /> teams of experts and generalists,
                                            </li>
                                            <li className='marginstate animatedlisttext  mt-5  d-flex '>
                                                <img className='animatedlisticon mx-4 ' src={veteran} />

                                                An industry veteran <br />leading the team.
                                            </li>

                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='vertical2-slide d-flex justi'>
                        <div className='col-12 '>
                            <div className='row d-flex upper-content-3rdslide'>
                                <div className={currentPageIndex == 2 ? "col-5 animate__animated animate__fadeInDown" : "col-5"} >
                                    <p className='uppercontent-head'>Transform higher education in Haryana</p>
                                </div>
                                <div className={currentPageIndex == 2 ? "col-7 animate__animated animate__bounceInUp" : "col-7"} >
                                    <p className='uppercontent-text'>We completed the halfway mark in a 2-year venture with<br /> the Department of Higher Education, Haryana (DHE- <br />Haryana) to prepare college students for meaningful work <br /> roles. In this time, we:</p>
                                </div>
                            </div>

                            <div className='row'>
                                
                                <div className="col-12 cards_3 d-flex justify-content-center">
                                    <div className="row   d-flex justify-content-center">
                                        <div className="col-4">
                                            <div className="border-0 h-100 mr-2">
                                                <img src={fab_uk} className={currentPageIndex == 2 ? "card-img-top small-image-vertical2 animate__animated animate__backInLeft" : "card-img-top small-image-vertical2"} alt="..." />
                                                <div className="card-body">
                                                    {/* <h5 className="card-title fw-bold">Card title</h5> */}
                                                    <p className={currentPageIndex == 2 ?"card-text text-center card_3vert2_text animate__animated animate__backInUp":"card-text text-center card_3vert2_text"}>
                                                    Provided hands-on coaching<br/> to 130 teachers and skill instructors
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className=" border-0 h-100 mx-2">
                                                <img src={fab_uk} className={currentPageIndex == 2 ?"card-img-top small-image-vertical2 animate__animated animate__backInDown":"card-img-top small-image-vertical2"} alt="..." />
                                                <div className="card-body">
                                                    {/* <h5 className="card-title fw-bold">Card title</h5> */}
                                                    <p className={currentPageIndex == 2 ?"card-text text-center card_3vert2_text animate__animated animate__backInUp":"card-text text-center card_3vert2_text"}>
                                                    Hosted career-focused webinars <br/> with employer partners
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="border-0 h-100 ">
                                                <img src={fab_uk} className={currentPageIndex == 2 ? "card-img-top small-image-vertical2 animate__animated animate__backInRight":"card-img-top small-image-vertical2"} alt="..." />
                                                <div className="card-body">
                                                    {/* <h5 className="card-title fw-bold">Card title</h5> */}
                                                    <p className={currentPageIndex == 2 ?"card-text text-center card_3vert2_text animate__animated animate__backInUp":"card-text text-center card_3vert2_text"}>
                                                    Improved classroom learning <br/> experience and career exposure<br/> for ~3000 students
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <FirstCircleUi className="vertical2-slide d-flex "/>
                    <SecondCircleUi/>
                    {/* <div className='vertical2-slide d-flex '>
                        <div className='col-12'>
                            <div className='row upper-content-3rdslide'>
                                <div className='col-5'>
                                    <p className='uppercontent-head'>Make vocational education aspirational in UP</p>
                                </div>
                                <div className='col-6 mx-5'>
                                    <p className='uppercontent-text'>We renewed our 8-year-old partnership with the Department of Technical Education, Uttar Pradesh (DTE-UP) to strengthen polytechnic education, by:</p>
                                </div>
                            </div>
                            <div className="semi-circle"></div>
                            <div className='col-12 half-circle-animation'>
                                <div className='row first-line-content'>
                                    <div className='col-12 d-flex justify-content-center first-line-content-box'>
                                        <p className='first-line-content-box-text'>Improving the physical learning facilities,</p>
                                    </div>
                                </div>
                                <div className='row d-flex justify-content-between second-line-content'>

                                    <div className='col-4 px-5'>
                                        <p className='first-line-content-box-text'>Introducing an industry-relevant curriculum,</p>
                                    </div>
                                    <div className='col-4 px-5'>
                                        <p className='first-line-content-box-text' >Helping industry and academia work closely</p>
                                    </div>


                                </div>
                                <div className='row d-flex justify-content-around third-line-content'>
                                    <div className='col-4'>
                                        <p className='first-line-content-box-text'>Building experiential facilitation skill in teachers,</p>
                                    </div>
                                    <div className='col-4'>
                                        <p className='first-line-content-box-text yellowbackground'>Potentially impact 70,000+ young people</p>
                                    </div>
                                    <div className='col-4'>
                                        <p className='first-line-content-box-text'>Driving data-backed governance in the system</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='vertical2-slide d-flex '>

                        <div className='col-12'>
                            <div className='row upper-content-3rdslide'>
                                <div className='col-5'>
                                    <p className='uppercontent-head'>Elevate on-the-job vocational training in Haryana</p>
                                </div>
                                <div className='col-6 mx-5'>
                                    <p className='uppercontent-text'>Over the next 2 years, we will help the Skill <br /> Development and Industrial Training Department,<br /> Haryana (SDIT-Haryana) scale their dual-system of <br /> training model for vocational education students by:</p>
                                </div>
                            </div>
                            <div className="semi-circle1"></div>
                            <div className='col-12 half-circle-animation'>
                                <div className='row first-line-content'>
                                    <div className='col-12 d-flex justify-content-center first-line-content-box'>
                                        <p className='first-line-content-box-text'>Building strong industry partnerships for quality OJTs</p>
                                    </div>
                                </div>
                                <div className='row d-flex justify-content-between second-line-content'>

                                    <div className='col-4 px-5'>
                                        <p className='first-line-content-circle-text'>Providing on-the-job trainings (OJT) of 6 months’ duration</p>
                                    </div>
                                    <div className='col-4 px-5'>
                                        <p className='first-line-content-box-text' >Doubling the number of OJT units in the state</p>
                                    </div>


                                </div>
                                <div className='row d-flex flex-column potential'>
                                    <p className='potential-text '>Potentially impacting</p>
                                    <p className='potential-text yellow-text'>XXXX</p>
                                    <p className='potential-text '>of students</p>
                                </div>
                                <div className='row d-flex justify-content-around third-line-content'>

                                    <div className='col-4'>
                                        <p className='greenbackgraound'></p>
                                    </div>

                                </div>
                            </div>
                        </div>


                    </div> */}

                    <div className='vertical2-slide d-flex'>6</div>
                </Carousel>
            </div>

        </>
    )
}
