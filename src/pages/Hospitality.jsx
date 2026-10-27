import PageHeader from '../components/PageHeader';
import CompanySection from '../components/CompanySection';
import Portfolio from '../components/Portfolio';
import lumbiniImage from '../assets/lumbini_hotel_new_f73bc9568d.jpg';
import poolImage from '../assets/lumbini_hotel_next.jpg';
import budhanilkanthaImage from '../assets/hotel_placeholder.jpg';
import '../components/CompanySection.css';

function Hospitality() {
  return (
    <main>
      <PageHeader
        label="Our Portfolio"
        title="Tourism & Hospitality"
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Portfolio' }, { label: 'Tourism & Hospitality' }]}
      />

      <section className="pg-lead">
        <div className="pg-lead-inner has-image">
          <p>
            Tourism and hospitality is the art and science of creating memorable
            experiences for guests, focusing on providing exceptional service,
            comfort, and care.
          </p>
          <div className="pg-lead-image">
            <img src={lumbiniImage} alt="Lumbini Heritage Hotel" />
          </div>
        </div>
      </section>

      <CompanySection
        name="Lumbini Heritage Ltd."
        place="Lumbini, Bhairahawa, Nepal"
        image={poolImage}
        imageAlt="Lumbini Heritage Hotel swimming pool"
        caption="Heritage Architecture"
        paragraphs={[
          <>
            Taking inspiration from the Buddhist concepts of peace and
            enlightenment, the design of <strong>Lumbini Heritage Hotel</strong>{' '}
            aims to create a comfortable and tranquil environment for all
            guests. Established in 2070, the hotel is a landmark property
            located in Lumbini, Nepal, one of the world's most revered
            pilgrimage and heritage sites. Strategically positioned just 1 km
            from the Lumbini Sacred Garden (the birthplace of Lord Buddha),
            12 km from Gautam Buddha International Airport, and 15 km from the
            growing business hub of Bhairahawa, the hotel offers exceptional
            connectivity for both international and domestic travelers.
          </>,
          <>
            Spread across 4 bigha of prime land, the hotel has 147 rooms
            (keys), making it the largest accommodation provider in the region
            by volume. It is the only hotel in Lumbini's vicinity that can cater
            to large groups, conferences, religious tourism delegations, and
            high-end travelers under one roof. Its scale and capacity, combined
            with its unique location and infrastructure, position it as a
            regional leader in hospitality services, with strong potential for
            growth as tourism and air connectivity in the area continue to
            expand. The hotel is currently processing licenses for 5-star
            classification and casino operations, which will enhance future
            revenue streams.
          </>,
        ]}
      />

      <CompanySection
        tone="cream"
        reverse
        name="Budhanilkantha Heritage Hotel Limited"
        place="Budhanilkantha, Kathmandu"
        image={budhanilkanthaImage}
        imageAlt="Budhanilkantha Heritage Hotel"
        paragraphs={[
          <>
            <strong>Budhanilkantha Heritage Private Limited (BHPL)</strong> was
            incorporated in November 2018 and converted into a public company
            with effect from 4th October 2021. Located near the famous
            Budhanilkantha temple and among the best hotels near Tribhuvan
            International Airport, the refreshingly different Lemon Tree
            Premier, Budhanilkantha, Kathmandu, Nepal, is an ideal destination
            for both business and leisure travelers. The hotel, near Boudhanath
            Stupa, enjoys excellent road connectivity to major tourist and
            commercial areas of Kathmandu.
          </>,
          <>
            It is a special-purpose vehicle (SPV) that owns and will operate a
            proposed nine-storied, 5-star hotel in Budhanilkantha, Kathmandu, on
            a plot of approximately 5,820 square meters. The promoter group
            comprises professionals such as chartered accountants and doctors,
            as well as private entrepreneurs.
          </>,
        ]}
      />

      <Portfolio label="Portfolio" />
    </main>
  )
}

export default Hospitality;