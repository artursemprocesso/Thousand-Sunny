import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./index.scss"

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Testimonial from '../../components/Testimonial'
import Trending from '../../components/Trending'

const listLocations = ["Africa", "America", "Antarctica", "Asia", "Europe"]

export default function HomeScreen() {
    const [location, setLocation] = useState("")

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const getPlusDot = () => {
        let list = []
        for (let i = 0; i < 14; i++) {
            list.push(<div/>)
        }
        return list
    }

    return (
        <div className="home">
            <Header currentPage={1}/>
            <div className="home__plus-dot">
                {getPlusDot()}
            </div>
            <div className="container">

                <div className="row home__section--main home__section--reverse">
                    <div className="home__section__text">
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
                    <div className="home__section__image">
                        <img src="/img/img1.png" alt="" />
                    </div>
                </div>
                <div className="row home__section">
                    <div className="home__section__image">
                        <img src="/img/img2.png" alt="" />
                    </div>
                    <div className="home__section__text">
                        <h2>A new way to explore the world</h2>
                        <p>For decades travellers have reached for Lonely Planet books when looking to plan and execute their perfect trip, but now, they can also let Lonely Planet Experiences lead the way</p>

                        <Link className="btn" to="/explore">Learn more</Link>

                    </div>
                </div>
                <div className="row home__section home__section--reverse">
                    <div className="home__section__text">

                        <h2>Guides by Thousand Sunny</h2>
                        <p>Packed with tips and advice from our on-the-ground experts, our city guides app (iOS and Android) is the ultimate resource before and during a trip.</p>

                        <Link className="btn" to="/download">Download</Link>

                    </div>
                    <div className="home__section__image">
                        <img src="/img/img3.png" alt="" />
                    </div>
                </div>
            </div>

            <div className="home__section__testimonials">
                <h2>Testimonials</h2>
                <Testimonial />
            </div>

            <div className="home__section__trendig">
                <div className="home__section__trendig__header">
                    <h2>Trending stories</h2>
                    <Link className="view-all" to="/">View all</Link>
                </div>
                <Trending />
            </div>

            <Footer />
        </div >
    )
}
