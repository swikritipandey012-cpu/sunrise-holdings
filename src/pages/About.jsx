import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import Portfolio from '../components/Portfolio';
import '../components/CompanySection.css';

const model = [
  {
    title: 'Sustainability-Driven',
    text: 'We prioritize environmentally sustainable and socially inclusive projects in hydropower, tourism, and infrastructure.',
  },
  {
    title: 'Value Creation',
    text: 'We focus on high-growth opportunities that deliver both financial returns and long-term economic impact for Nepal.',
  },
  {
    title: 'Synergy and Diversification',
    text: 'We leverage interlinked investments across hydropower, tourism, and infrastructure to maximize efficiency and minimize risk.',
  },
]

function About() {
  return (
    <main>
      <PageHeader
        label="Company Introduction"
        title="About Us"
        crumbs={[{ label: 'Home', to: '/' }, { label: 'About' }]}
      />

      <section className="pg-lead">
        <div className="pg-lead-inner">
          <p>
            Since its establishment in 2008 A.D., Sunrise Holdings has
            implemented diversified investment and careful risk management as
            its investment strategy, which has assured long-term sustainability
            and provided value to our investors.
          </p>
        </div>
      </section>

      {/* History */}
      <section className="pg-split">
        <div className="pg-split-inner">
          <Reveal direction="left">
            <span className="pg-label">History</span>
            <h2>About Company</h2>
            <span className="pg-line"></span>
          </Reveal>
          <Reveal direction="right" delay={150} className="pg-copy">
            <p>
              Since its establishment in 2008 A.D., Sunrise Holdings has
              implemented diversified investment and careful risk management as
              its investment strategy, which has assured long-term
              sustainability and provided value to our investors. Our firm has
              made significant progress in diversifying our assets and looking
              into new prospects across a range of industries, mainly
              hydropower, hotel and tourism.
            </p>
            <p>
              We continue to prioritize innovation and to stay ahead of the
              competition. We continue to assess market trends, utilizing the
              experience of our staff and adjusting dynamically to the changing
              environment.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="pg-split alt">
        <div className="pg-split-inner">
          <Reveal direction="left">
            <h2>Executive Summary</h2>
            <span className="pg-line"></span>
          </Reveal>
          <Reveal direction="right" delay={150} className="pg-copy">
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

      {/* Investment Thesis */}
      <section className="pg-split">
        <div className="pg-split-inner">
          <Reveal direction="left">
            <h2>Investment Thesis</h2>
            <span className="pg-line"></span>
          </Reveal>
          <Reveal direction="right" delay={150} className="pg-copy">
            <p>
              Sunrise Holdings believes that Nepal's hydropower and tourism
              potential is the backbone of the country's sustainable economic
              growth.
            </p>
            <p>
              Sunrise Holdings is strategically positioned to capitalize on
              Nepal's immense growth potential, leveraging its natural
              resources, its geographic advantage, and the rising demand for
              sustainable development.
            </p>
            <p>
              By aligning financial returns with societal progress, we deliver
              value that goes beyond profits, creating a legacy of shared
              prosperity for all stakeholders.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Investment Model */}
      <section className="pg-cards-wrap">
        <div className="pg-split-inner" style={{ gridTemplateColumns: '1fr', paddingBottom: 40 }}>
          <Reveal direction="left">
            <h2>Investment Model</h2>
            <span className="pg-line"></span>
          </Reveal>
        </div>
        <div className="pg-cards">
          {model.map((item, index) => (
            <Reveal key={item.title} delay={index * 150}>
              <div className="pg-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Portfolio label="Portfolio" />
    </main>
  )
}

export default About;