import { Link } from 'react-router-dom';
import './Portfolio.css';
import lumbini_hotel_new_f73bc9568d from '../assets/lumbini_hotel_new_f73bc9568d.jpg';
import aviation_industry_77fd75a3e7 from '../assets/aviation_industry_77fd75a3e7.jpg';
import hydro_c0360c08f5 from '../assets/hydro_c0360c08f5.jpg';

const portfolio = [
  {
    title: 'Tourism & Hospitality',
    text: 'Budhanilkantha Heritage Private Limited (BHPL) was incorporated in November 2018 and converted into a public company with effect from 4th October 2021.',
    image: lumbini_hotel_new_f73bc9568d,
    to: '/portfolio/hospitality',
  },
  {
    title: 'Aviation Industry',
    text: 'Prabhu Helicopter Ltd. is under the umbrella of the Prabhu Group, a well-established corporate house for the past three decades. Since its inception, it has proven a very good track record in both flying and service.',
    image: aviation_industry_77fd75a3e7,
    to: '/portfolio/aviation-industry',
  },
  {
    title: 'Hydropower',
    text: 'River Falls Power Limited (RFPL) is a public limited company, incorporated on October 5, 2004 as a private limited company and later converted to a public limited company in October 2015.',
    image: hydro_c0360c08f5,
    to: '/portfolio/hydropower',
  },
]

function Portfolio({ label = '03 — Portfolio' }) {
  return (
    <section className="pt">
      <div className="pt-inner">
        <div className="pt-heading">
          <div className="pt-label">
            {label}
            <span className="pt-label-line"></span>
          </div>
          <h2>Our Portfolio</h2>
        </div>

        <div className="pt-grid">
          {portfolio.map((item) => (
            <Link key={item.title} to={item.to} className="pt-card">
              <img className="pt-img" src={item.image} alt={item.title} />
              <div className="pt-shade"></div>

              <div className="pt-content">
                <h3>{item.title}</h3>
                <span className="pt-rule"></span>
                <div className="pt-reveal">
                  <p>{item.text}</p>
                  <span className="pt-more">Learn More →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio;