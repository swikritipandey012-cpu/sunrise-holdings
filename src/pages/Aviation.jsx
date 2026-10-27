import PageHeader from '../components/PageHeader';
import CompanySection from '../components/CompanySection';
import Portfolio from '../components/Portfolio';
import aviationImage from '../assets/aviation_industry_77fd75a3e7.jpg';
import skyImage from '../assets/sky_1448c5329c.jpg';
import '../components/CompanySection.css';

function Aviation() {
  return (
    <main>
      <PageHeader
        label="Our Portfolio"
        title="Aviation Industry"
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Portfolio' }, { label: 'Aviation Industry' }]}
      />

      <section className="pg-lead">
        <div className="pg-lead-inner has-image">
          <p>
            The aviation industry is a cornerstone of the global economy,
            connecting people, businesses, and cultures across the world.
          </p>
          <div className="pg-lead-image">
            <img src={skyImage} alt="Helicopter in flight" />
          </div>
        </div>
      </section>

      <CompanySection
        name="Prabhu Helicopter Ltd."
        place="History"
        image={aviationImage}
        imageAlt="Prabhu helicopter"
        link="https://prabhuhelicopter.com/"
        paragraphs={[
          <>
            Prabhu Helicopter Ltd. is under the umbrella of the Prabhu Group, a
            well-established corporate house for the past three decades. Since
            its inception, it has proven a very good track record in both flying
            and service. Specializing in helicopter services within the tourism
            industry, Prabhu Helicopter provides service with two Airbus
            helicopters, and an agreement with Airbus France has been signed for
            one additional Airbus helicopter.
          </>,
          <>
            It has its own hangar facility in Pokhara. Safety is Prabhu
            Helicopter's utmost focus and priority, and the company is committed
            to providing the highest standard of safety and quality in all
            facets of operations and maintenance. Prabhu Helicopter has filed
            for an initial public offering with SEBON.
          </>,
        ]}
      />

      <Portfolio label="Portfolio" />
    </main>
  )
}

export default Aviation;