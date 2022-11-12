import React from 'react'
import './OurSub.css'
import { AiOutlineRight } from 'react-icons/ai'

function OurSub() {
    return (

        <div className="wrapper">
            <h1>Our Subsidiaries</h1>
            <div className="cards">

                <div className="card">
                    <div className="cardWrap">
                        <div className="Ctitle">Social Agent</div>
                        <div className="Cdes">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</div>
                        <div className="more">
                            <h4>Know More</h4>
                            <AiOutlineRight className='CiconRight' />
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="cardWrap">
                        <div className="Ctitle">Crafted Lines</div>
                        <div className="Cdes">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</div>
                        <div className="more">
                            <h4>Know More</h4>
                            <AiOutlineRight className='CiconRight' />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default OurSub