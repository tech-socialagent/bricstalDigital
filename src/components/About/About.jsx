import React from 'react'
import banner from '../../asserts/about_img02.jpeg'
import img01 from '../../asserts/about_img01.jpeg'
import img02 from '../../asserts/about_img03.jpeg'
import './About.css'
import { AiOutlineRight } from 'react-icons/ai'
import Footer from '../Footer/Footer'
import OurSub from '../OurSub/OurSub'

function About() {
    return (
        <div className="aboutWrap">
            <div className="banner">
                <img className='bannerImg' src={banner} alt="banner" />
                <h1 className='text' >About Us</h1>
            </div>
            <div className="row">
                <div className="img">
                    <img src={img01} alt="img" />
                </div>
                <div className="content">
                    <div className="title">
                        Be an awesome partner for clients and their ambitious missions
                    </div>
                    <div className="des">
                        Our deeds differentiate us and there’s nothing business-as-usual about how we operate. We care deeply about our clients and look beyond their immediate needs, championing the goals that inspire them. Working with us is always a transformational experience; that’s because the best outcomes are often the hardest to achieve, and often bring the kind of value that goes beyond what was first imagined.
                    </div>
                    <div className="more">
                        <h4>Know More</h4>
                        <AiOutlineRight className='iconRight' />
                    </div>
                </div>
            </div>

            <div className="row">

                <div className="content">
                    <div className="title">
                        Achieve enduring commercial success and sustained growth
                    </div>
                    <div className="des">
                        Our deeds differentiate us and there’s nothing business-as-usual about how we operate. We care deeply about our clients and look beyond their immediate needs, championing the goals that inspire them. Working with us is always a transformational experience; that’s because the best outcomes are often the hardest to achieve, and often bring the kind of value that goes beyond what was first imagined.
                    </div>
                    <div className="more">
                        <h4>Know More</h4>
                        <AiOutlineRight className='iconRight' />
                    </div>
                </div>
                <div className="img">
                    <img src={img02} alt="img" />
                </div>
            </div>

            <OurSub />

            <div className="blank"></div>
        <Footer />
        </div>
    )
}

export default About