import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import lumbini_hotel_new_f73bc9568d from '../assets/lumbini_hotel_new_f73bc9568d.jpg';
import aviation_industry_77fd75a3e7 from '../assets/aviation_industry_77fd75a3e7.jpg';
import hydropower_a1c982ffe3 from '../assets/hydropower_a1c982ffe3.jpg';

import './Hero.css';

const slides = [
  {
    image: lumbini_hotel_new_f73bc9568d,
    title: 'Hotel & Tourism',
    to: '/portfolio/hospitality',
    text: 'Hospitality is the art and science of creating memorable experiences for guests, focusing on providing exceptional service, comfort, and care.',
  },
  {
    image: aviation_industry_77fd75a3e7,
    title: 'Aviation Industry',
    to: '/portfolio/aviation-industry',
    text: 'The aviation industry is a cornerstone of the global economy, connecting people, businesses, and cultures across the world.',
  },
  {
    image: hydropower_a1c982ffe3,
    title: 'Hydropower in Nepal',
    to: '/portfolio/hydropower',
    text: 'Hydropower, or hydroelectric power, is a renewable energy source that harnesses the energy of moving water to generate electricity.',
  },
]


function Hero(){
    const [current, setCurrent] = useState(0)
    const goNext = () => setCurrent ((current + 1) % slides.length)
    const goPrev = () => setCurrent((current - 1 + slides.length) % slides.length)

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrent((prev) => (prev + 1) % slides.length)
        }, 6000)

        return () => clearTimeout(timer)
    }, [current])

    return (
        <section className="hero">
        {slides.map((item, index) => (
            <div
            key={item.title}
            className={index === current ? 'hero-slide active' : 'hero-slide'}
            >
            <img className="hero-image" src={item.image} alt={item.title} />
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <span className="hero-label">Portfolio</span>
                <h1>{item.title}</h1>
                <p>{item.text}</p>
                <Link to={item.to} className="btn" tabIndex={index === current ? 0 : -1}>Learn More <span>→</span></Link>
            </div>
            </div>
        ))}

        <div className="hero-controls">
            <span className="hero-counter">
            {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
            </span>
            <button className="hero-arrow" onClick={goPrev} aria-label="Previous slide">←</button>
            <button className="hero-arrow" onClick={goNext} aria-label="Next slide">→</button>
        </div>

        <div className="hero-progress">
            {slides.map((item, index) => (
            <span
                key={item.title}
                className={index === current ? 'hero-bar active' : 'hero-bar'}
            ></span>
            ))}
        </div>
        </section>
    )
}

export default Hero;