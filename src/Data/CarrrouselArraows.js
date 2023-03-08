import React from 'react'

export const CarrrouselArraows = (props) => {


    // const carouselRef = React.useRef(null);

    function handlePrevClick() {
        props.handleprev()
    }

    function handleNextClick() {

        props.handlenext()
    }
    return (
        <>

            <div className='row arrowbuttons'>
                {/* <div className='d-flex justify-content-between'> */}
                    <span className='col-6 back_main'>back to main</span>
                    <span className='col-6 arrows'>
                        <button className="rec-arrow rec-arrow-left" onClick={handlePrevClick}>L</button>
                        <button className="rec-arrow rec-arrow-right" onClick={handleNextClick}>R</button>
                    </span>
                {/* </div> */}

            </div>

        </>
    )
}
