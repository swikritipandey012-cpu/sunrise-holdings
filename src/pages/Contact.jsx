import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import '../components/CompanySection.css';

function Contact() {
  return (
    <main>
      <PageHeader
        label="Get in Touch"
        title="Contact Us"
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Contact Us' }]}
      />

      <section className="ct">
        <div className="ct-inner">
          <Reveal direction="left" className="ct-info">
            <h2>Contact Details</h2>
            <span className="pg-line"></span>
            <p className="ct-name">Sunrise Holdings Limited</p>
            <p>2nd Floor, Prabhu Group Building, Kathmandu</p>
            <p>
              Tel: <a href="tel:014169003">01-416-9003</a>
            </p>
          </Reveal>

          <Reveal direction="right" delay={150}>
            <iframe
              className="ct-map"
              title="Sunrise Holdings location map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Prabhu+Capital+Limited,+Kathmandu&output=embed"
            ></iframe>
          </Reveal>
        </div>
      </section>
    </main>
  )
}

export default Contact;