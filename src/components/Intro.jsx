import { Link } from 'react-router-dom';
import './Intro.css';
import Reveal from './Reveal';

function Intro(){
    return(
        <section className="intro">
            <div className="intro-inner">
                <Reveal className="intro-heading" direction='left'>
                    <span className="intro-label">Company Introduction</span>
                    <h2>Sunrise Holdings</h2>
                </Reveal>

                <Reveal className="intro-text" direction='right' delay={150}>
                    <p>
                        Since its establishment in 2008 A.D., <strong>Sunrise Holdings</strong> has
                        implemented diversified investment and careful risk management as its
                        investment strategy, which has assured long-term sustainability and
                        provided value to our investors. Our firm has made significant progress in
                        diversifying our assets and looking into new prospects across a range of
                        industries, mainly hydropower, hotel and tourism.
                    </p>

                    <p>
                        We continue to prioritize innovation and to stay ahead of the competition.
                        We continue to assess market trends, utilizing the experience of our staff,
                        and adjusting dynamically to the changing environment.
                    </p>
                    <Link to="/about/about" className="btn intro-button">Learn More <span>→</span></Link>
                </Reveal>
            </div>
        </section>
    )
}

export default Intro;