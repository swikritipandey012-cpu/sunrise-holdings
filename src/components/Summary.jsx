import { Link } from 'react-router-dom';
import './Summary.css';
import Reveal from './Reveal';
import corporate_office_19a1259398 from '../assets/corporate_office_19a1259398.jpg';

function Summary() {
  return (
    <section className="summary">

      <div className="summary-inner">
        <Reveal className="summary-text" direction="left">
          <div className="summary-label">
            <span>01 — Who we are</span>
            <span className="summary-label-line"></span>
          </div>

          <h2>Executive Summary</h2>

          <p className="summary-statement">
            Sunrise Holdings is a visionary investment company dedicated to
            unlocking Nepal's potential through strategic investments in{' '}
            <Link to="/portfolio/hydropower">hydropower</Link>,{' '}
            <Link to="/portfolio/hospitality">tourism</Link>, and{' '}
            <Link to="/about/mission-and-vision">infrastructure development</Link>.
          </p>

          <p className="summary-body">
            With a focus on sustainability and long-term impact, we aim to
            drive economic growth, empower communities, and position Nepal as
            a leader in clean energy and sustainable tourism.
          </p>

          <Link to="/about/mission-and-vision" className="btn summary-cta">
            Learn More <span>→</span>
          </Link>
        </Reveal>

        <Reveal className="summary-visual" direction="right" delay={200}>
          <div className="summary-photo">
            <img
              className="summary-image"
              src={corporate_office_19a1259398}
              alt="Glass office building"
            />
          </div>

          <div className="summary-badge">
            <span className="summary-badge-year">2008</span>
            <span className="summary-badge-text">A.D. · Year of establishment</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Summary;