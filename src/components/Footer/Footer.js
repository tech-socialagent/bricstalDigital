import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className="footerWrap">
            <div className="company">
                <ul className='lists'>
                    <h1>Company</h1>
                    <li >About us</li>
                    <li>What we do</li>
                    <li>Who we work with</li>
                    <li>News</li>
                    <li>Diversity, Equity and Inclusion</li>
                    <li>Careers</li>
                    <li>Investors</li>
                    <li>Contact us</li>
                </ul>
            </div>
            <div className="Insights">
                <ul>
                <h1>insights</h1>
                    <li>Articles</li>
                    <li>Blogs</li>
                    <li>Books</li>
                    <li>Podcasts</li>
                </ul>
            </div>
            <div className="siteInfo">
                <ul>
                <h1>site info</h1>
                    <li>Privacy policy</li>
                    <li>Accessibility statement</li>
                    <li>Modern slavery statement</li>
                    <li>Corporate Social Responsibility Policy</li>
                    <li>Code of conduct</li>
                    <li>Integrity helpline</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer