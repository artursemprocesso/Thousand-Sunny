import React from 'react'
import "./index.scss"
import {Link} from 'react-router-dom'

const cardTrendingStories = [
    {
        img: "/img/photo1.jpg",
        title: "The many benefits of taking a healing holiday",
        description: "‘Helaing holidays’ are on the rise to help maximise your health and happines...",
    },
    {
        img: "/img/photo2.jpg",
        title: "The best Kyoto restaurant to try Japanese food",
        description: "From tofu to teahouses, here’s our guide to Kyoto’s best restaurants to visit...",
    },
    {
        img: "/img/photo3.jpg",
        title: "Skip Chichen Itza and head to this remote Yucatan",
        description: "It’s remote and challenging to get, but braving the jungle and exploring these ruins without the...",
    },
    {
        img: "/img/photo4.jpg",
        title: "Surf’s up at these beginner spots around the world",
        description: "If learning to surf has in on your to-do list for a while, the good news is: it’s never too late...",
    },
]
export default function Trending() {
    return (
        <div className="trending">
            {cardTrendingStories.map((el, i) => (
                <div key={i} className="trending__card">
                    <img src={el.img} alt={el.title} />
                    <h4>{el.title}y</h4>
                    <p>{el.description}</p>
                    <Link to="/">Read more</Link>
                </div>
            ))}
        </div>
    )
}
