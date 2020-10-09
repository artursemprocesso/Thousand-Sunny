import React from 'react'
import './index.scss'

export default function Testimonial() {
    return (
        <div className="testimonials">
            <div className="testimonials__text">
                <div className="testimonials__text__stars">
                    <img src="/img/star.svg" alt="" />
                    <img src="/img/star.svg" alt="" />
                    <img src="/img/star.svg" alt="" />
                    <img src="/img/star.svg" alt="" />
                    <img src="/img/star.svg" alt="" />
                </div>
                <p>“Quisque in lacus a urna fermentum euismod. Integer mi nibh, dapibus ac scelerisque eu, facilisis quis purus. Morbi blandit sit amet turpis nec”</p>
                <div className="author">
                    <div className="testimonials__text__author">Edward Newgate</div>
                    <div className="testimonials__text__job">Founder Circle</div>
                </div>

            </div>
            <div className="testimonials__image">
                <div className="testimonials__image__photo">
                    <img src="/img/testimonial1.jpg" alt="photo" />
                </div>
            </div>
            <div className="testimonials__controls">
                <button className="testimonials__controls__before"></button>
                <button className="testimonials__controls__after"></button>
            </div>
        </div>
    )
}
