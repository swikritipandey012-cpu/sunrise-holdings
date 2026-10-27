import { Link } from 'react-router-dom';
import './Areas.css';
import Reveal from './Reveal';

const areas = [
  {
    name: 'Hospitality',
    to: '/portfolio/hospitality',
    text: 'Hospitality is the art and science of creating memorable experiences for guests, focusing on providing exceptional service, comfort, and care.',
  },
  {
    name: 'Aviation Industry',
    to: '/portfolio/aviation-industry',
    text: 'The aviation industry is a cornerstone of the global economy, connecting people, businesses, and cultures across the world.',
  },
  {
    name: 'Hydropower',
    to: '/portfolio/hydropower',
    text: 'Hydropower, or hydroelectric power, is a renewable energy source that harnesses the energy of moving water to generate electricity.',
  },
  {
    name: 'Tourism',
    to: '/portfolio/hospitality',
    text: 'The tourism industry is one of the largest and fastest-growing sectors globally, making it a prime area for investment.',
  },
]

function Areas() {
  return (
    <section className="areas">
      <div className="areas-inner">
        <Reveal className="areas-heading">
          <div className="areas-label">
            <span>02 — Our focus</span>
            <span className="areas-label-line"></span>
          </div>
          <h2>Areas of Investments</h2>
        </Reveal>

        <ul className="areas-list">
          {areas.map((area, index) => (
            <li key={area.name}>
              <Reveal delay={index * 200}>
                <Link to={area.to} className="area-row">
                  <span className="area-number">{String(index + 1).padStart(2, '0')}</span>
                  <div className="area-text">
                    <h3>{area.name}</h3>
                    <p>{area.text}</p>
                  </div>
                  <span className="area-arrow">→</span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Areas;