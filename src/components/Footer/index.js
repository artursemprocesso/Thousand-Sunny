import React from 'react'
import './index.scss'

import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer__container">
                <div className="footer__container__columns">
                    <div className="footer__container__columns__col--main">
                        <img className="footer__container__logo" src="/logo.svg" alt="" />
                        <p>Plan and book your perfect trip with
                        expert advice, travel tips destination
                            information from us</p>
                        <p>©2020 Thousand Sunny. All rights reserved</p>
                    </div>
                    <div className="footer__container__columns__col">
                        <h5>Destinations</h5>
                        <ul>
                            <li><Link to="/holidays/Africa">Africa</Link></li>
                            <li><Link to="/holidays/Antarctica">Antarctica</Link></li>
                            <li><Link to="/holidays/Asia">Asia</Link></li>
                            <li><Link to="/holidays/Europe">Europe</Link></li>
                            <li><Link to="/holidays/America">America</Link></li>
                        </ul>
                    </div>
                    <div className="footer__container__columns__col">
                        <h5>Shop</h5>
                        <ul>
                            <li><Link to="/">Destination Guides</Link></li>
                            <li><Link to="/">Pictorial & Gifts</Link></li>
                            <li><Link to="/">Special Offers</Link></li>
                            <li><Link to="/">Delivery Times</Link></li>
                            <li><Link to="/">FAQs</Link></li>
                        </ul>
                    </div>
                    <div className="footer__container__columns__col">
                        <h5>Interests</h5>
                        <ul>
                            <li><Link to="/">Adventure Travel</Link></li>
                            <li><Link to="/">Art And Culture</Link></li>
                            <li><Link to="/">Wildlife And Nature</Link></li>
                            <li><Link to="/">Family Holidays</Link></li>
                            <li><Link to="/">Food And Drink</Link></li>
                        </ul>
                    </div>
                </div>

            </div>
                <div className="footer__container__divisor" />
            <div className="footer__container">
            <div className="footer__container__social">
                    <a href="http://" target="_blank" rel="noopener noreferrer"><img src="/img/twitter.png" alt="" /></a>
                    <a href="http://" target="_blank" rel="noopener noreferrer"><img src="/img/facebook.png" alt="" /></a>
                    <a href="http://" target="_blank" rel="noopener noreferrer"><img src="/img/instagram.png" alt="" /></a>
                    <a href="http://" target="_blank" rel="noopener noreferrer"><img src="/img/linkedin.png" alt="" /></a>
                    <a href="http://" target="_blank" rel="noopener noreferrer"><img src="/img/youtube.png" alt="" /></a>
                </div>
            </div>
        </div>
    )
}
