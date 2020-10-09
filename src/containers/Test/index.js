import React, { useEffect, useState } from 'react'
import './index.scss'
import { Link } from 'react-router-dom'

import Header from '../../components/Header'
import Testimonial from '../../components/Testimonial'
import Footer from '../../components/Footer'

const listLocations = ["Africa", "America", "Antarctica", "Asia", "Europe"]

export default function Test() {
    const [location, setLocation] = useState("")

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="test">
            <Header />
            <div className="row test__section--main test__section--reverse">
                <div className="test__section__text">
                    <h1>Explore and Travel</h1>
                    <h3>Holiday finder</h3>
                    <select name="location" id="location" placeholder="Location" onChange={e => setLocation(e.target.value)}>
                        <option value="">Location</option>
                        {listLocations.map((el, i) => (
                            <option key={i} value={el}>{el}</option>
                        ))}
                    </select>
                    <select name="location" id="location" placeholder="Location">
                        <option value="">Activity</option>
                    </select>
                    <select name="location" id="location" placeholder="Location">
                        <option value="">Grade</option>
                    </select>
                    <select name="location" id="location" placeholder="Location">
                        <option value="">Date</option>
                    </select>
                        <Link className="btn" to={`/holidays/${location}`}>Explore</Link>
                </div>
                <div className="test__section__image">
                    <img src="/img/img1.png" alt="" />
                </div>
            </div>
            <div className="row test__section">
                <div className="test__section__image">
                    <img src="/img/img2.png" alt="" />
                </div>
                <div className="test__section__text">
                    <h2>Teste</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem illum maiores accusamus, commodi consequuntur nesciunt quasi cum similique optio facere eaque nam minima obcaecati odio veniam? Sequi deleniti totam iure!</p>
                </div>
            </div>
            <div className="row test__section test__section--reverse">
                <div className="test__section__text">
                    <h2>Teste</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem illum maiores accusamus, commodi consequuntur nesciunt quasi cum similique optio facere eaque nam minima obcaecati odio veniam? Sequi deleniti totam iure!</p>
                </div>
                <div className="test__section__image">
                    <img src="/img/img3.png" alt="" />
                </div>
            </div>

            <div className="test__section__testimonials">
                <h2>Teste</h2>
                <Testimonial />
            </div>

            <div className="test__section__trendig">
                <h2>Teste</h2>
            </div>

            <Footer />
        </div>
    )
}
