import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./index.scss"

import Header from '../../components/Header'
import Footer from '../../components/Footer'


const cardHolidays = [
    {
        img: "/img/holiday1.jpg",
        title: "Raja Ampat",
        subtitle: "Indonesia",
    },
    {
        img: "/img/holiday2.jpg",
        title: "Fanjingshan",
        subtitle: "China",
    },
    {
        img: "/img/holiday3.jpg",
        title: "Vevey",
        subtitle: "Switzerland",
    },
    {
        img: "/img/holiday4.jpg",
        title: "Skadar",
        subtitle: "Montenegro",
    },
]

export default function HomeScreen({ data }) {
    const { local } = data.match.params

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const getPlusDot = () => {
        let list = []
        for (let i = 0; i < 5; i++) {
            list.push(<div/>)
        }
        return list
    }

    return (
        <div className="holidays">
            <Header currentPage={0} />
            <div className="holidays__plus-dot">
                {getPlusDot()}
            </div>
            <div className="holidays__section">
                <div className="holidays__section__header">
                    <h2>Holidays {local && `in ${local}`}</h2>
                    <Link className="view-all" to="/">View all</Link>
                </div>
                <div className="holidays__section__itens">
                    {cardHolidays.map((el, i) => (
                        <div key={i} className="holidays__section__itens__card">
                            <img src={el.img} alt={el.title} />
                            <div className="holidays__section__itens__card__info">
                                <div className="holidays__section__itens__card__info__title">{el.title}</div>
                                <div className="holidays__section__itens__card__info__subtitle">{el.subtitle}</div>
                            </div>
                        </div>
                    ))}

                </div>

            </div>

            <Footer />

        </div>
    )
}
