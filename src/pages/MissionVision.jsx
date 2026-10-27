import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import Portfolio from '../components/Portfolio';
import missionImage from '../assets/corporate_office_19a1259398.jpg';
import './MissionVision.css';

function MissionVision() {
  return (
    <main>
      <PageHeader
        label="Our Purpose"
        title="Mission & Vision"
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'About', to: '/about/about' },
          { label: 'Mission And Vision' },
        ]}
      />

      <section className="mv-intro">
        <div className="mv-intro-inner">
          <Reveal direction="left" className="mv-intro-text">
            <h2>Our Mission & Vision</h2>
            <p className="mv-lead">
              Sunrise Holdings is a visionary investment company dedicated to
              unlocking Nepal's potential through strategic investments in
              hydropower, tourism, and infrastructure development.
            </p>
            <p className="mv-body">
              With a focus on sustainability and long-term impact, we aim to
              drive economic growth, empower communities, and position Nepal as
              a leader in clean energy and sustainable tourism.
            </p>
          </Reveal>

          <Reveal direction="right" delay={150} className="mv-intro-visual">
            <img className="mv-photo" src={missionImage} alt="Our Mission & Vision" />
          </Reveal>
        </div>
      </section>

      <section className="mv-summary">
        <div className="mv-summary-inner">
          <Reveal direction="left" className="mv-summary-heading">
            <h2>Executive Summary</h2>
            <span className="mv-line"></span>
          </Reveal>

          <Reveal direction="right" delay={150} className="mv-summary-copy">
            <p>
              Sunrise Holdings is a visionary investment company dedicated to
              unlocking Nepal's potential through strategic investments in
              hydropower, tourism, and infrastructure development. With a focus
              on sustainability and long-term impact, we aim to drive economic
              growth, empower communities, and position Nepal as a leader in
              clean energy and sustainable tourism.
            </p>
            <p>
              Sunrise Holdings is spearheading projects that address energy
              demands, support the green economic transition, and position Nepal
              as a regional energy exporter. In addition, investments in tourism
              are strengthening global interest in Nepal through eco-tourism,
              adventure travel, and modern hospitality infrastructure.
            </p>
            <p>
              The strategy is underpinned by infrastructure development, which
              provides the connectivity and logistics support necessary for
              growth in various other sectors. By combining competence, capital,
              and strategic partnerships, Sunrise Holdings works towards
              sustainable progress, improved livelihoods, and a better future
              for Nepal and the Nepalese people.
            </p>
          </Reveal>
        </div>
      </section>

      <Portfolio label='Portfolio'/>
    </main>
  )
}

export default MissionVision;