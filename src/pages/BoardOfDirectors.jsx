import { useEffect, useRef, useState } from 'react';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import Portfolio from '../components/Portfolio';
import subhash from '../assets/subhash.jpg';
import anil from '../assets/anil.jpg';
import saila from '../assets/saila.jpg';
import roshan from '../assets/roshan.jpg';
import sangeeta from '../assets/sangeeta.jpg';
import './BoardOfDirectors.css';

// One string = one paragraph in the popup.
const directors = [
  {
    name: 'Subhash Amatya',
    role: 'Executive Chairman',
    image: subhash,
    bio: [
      "Subhash Amatya is an accomplished corporate executive with over 20 years of leadership experience in the aviation, hydropower, tourism and hospitality, agriculture, insurance, and investment sectors.",
      "He currently serves as Executive Chairman of Sunrise Holdings, Prabhu Helicopter, River Falls Hydropower (10.3 MW), and Ilum Agro Farm, and as Managing Director of the Trishuli Cascade Hydropower Project (24.6 MW).",
      "He is also an Executive Member of the Airlines Operators Association of Nepal (AOAN), a former Chairman of Prabhu Mahalaxmi Life Insurance, a former director of Prabhu Capital Ltd., and a former director of Shuvam Power Ltd. Mr. Amatya holds a Master's degree in Business Studies from Tribhuvan University and is known for his strategic vision, financial expertise, and ability to drive sustainable growth across industries.",
    ],
  },
  {
    name: 'Anil Prasad Shrestha',
    role: 'Director',
    image: anil,
    bio: [
      "Anil Prasad Shrestha is an established entrepreneur with extensive expertise in finance, insurance, aviation, agriculture, hospitality, and executive leadership.",
      "He currently serves as Chairman of Shuvaramva Agro Farm Pvt. Ltd. and 360 Holding Company Pvt. Ltd., Director of Prabhu Helicopter Ltd. and Mount Everest Distillery, and Managing Director of Hotel Lumbini Heritage.",
      "His previous roles include Independent Director at Prabhu Mahalaxmi Life Insurance and Public Director at Tinau Mission Development Bank. With a Master of Business Administration complemented by Corporate Management Training from the Government of Japan, Mr. Shrestha excels in strategic leadership, project management, effective communication, and critical decision-making. His contributions are instrumental in driving Sunrise Holdings' strategic vision and operational success.",
    ],
  },
  {
    name: 'Saila Shrestha',
    role: 'Director',
    image: saila,
    bio: [
      "Saila Shrestha is a visionary business leader with a distinguished record of strategic leadership across diverse sectors, including travel, aviation, energy, agriculture, distillery, hospitality, and finance. As Executive Chairman of Prabhu Travels Pvt. Ltd., she drives organizational excellence and innovation.",
      "Ms. Shrestha holds directorships at Prabhu Helicopter Ltd., Global Holdings Pvt. Ltd., Hotel Lumbini Heritage, Mount Everest Distillery, and Shuvaramva Agro Farm Pvt. Ltd., and previously served as a Director at Prabhu Capital Ltd. She holds a Master's degree in Business Studies (MBS) from Tribhuvan University.",
      "Ms. Shrestha brings exceptional expertise in corporate governance, strategic oversight, and multi-sectoral leadership, significantly advancing Sunrise Holdings' mission for sustainable growth and industry leadership.",
    ],
  },
  {
    name: 'Roshan Shrestha',
    role: 'Director',
    image: roshan,
    bio: [
      "Superintendent of Police (SP) Mr. Roshan Shrestha is a disciplined and analytical professional with a distinguished career in the Nepal Police. With over two decades of experience, SP Shrestha has specialized in financial crime investigations, risk assessment, regulatory compliance, and organizational leadership.",
      "Leveraging his deep expertise in investigation, compliance, and governance, SP Shrestha is now transitioning into the finance sector, offering unparalleled insight into fraud detection, internal control systems, and operational risk management.",
      "His leadership, discretion, and analytical rigor make him a valuable asset to financial institutions, especially in roles focused on risk and compliance.",
    ],
  },
  {
    name: 'Dr. Sangeeta Shrestha',
    role: 'Director',
    image: sangeeta,
    bio: [
      "Her leadership, discretion, and analytical rigor make her a valuable asset to financial institutions, especially in roles focused on risk and compliance.",
      "With a deep understanding of healthcare systems, data interpretation, and evidence-based decision-making, she aims to bring a unique perspective to financial strategy, risk assessment, and health economics.",
    ],
  },
]

// The popup that opens when a photo is clicked
function DirectorModal({ person, onClose }) {
  const closeRef = useRef(null)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    const previousOverflow = document.body.style.overflow
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden' // page behind does not scroll
    closeRef.current?.focus()

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = previousOverflow
    }
  }, [onClose])

  return (
    <div
      className="bd-modal-backdrop"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        className="bd-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="bd-modal-title"
      >
        <button
          ref={closeRef}
          type="button"
          className="bd-modal-close"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>

        <h3 id="bd-modal-title" className="bd-modal-name">{person.name}</h3>
        <span className="bd-modal-role">{person.role}</span>

        <div className="bd-modal-body">
          <img className="bd-modal-photo" src={person.image} alt={person.name} />
          <div className="bd-modal-text">
            {person.bio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function BoardOfDirectors() {
  const [selected, setSelected] = useState(null)

  return (
    <main>
      <PageHeader
        label="Our Team"
        title="Board of Directors"
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'About', to: '/about/about' },
          { label: 'Board Of Directors' },
        ]}
      />

      <section className="bd">
        <div className="bd-inner">
          <div className="bd-intro">
            <Reveal direction="left">
              <h2>Board of Directors</h2>
              <span className="bd-line"></span>
            </Reveal>
            <Reveal direction="right" delay={150}>
              <p>
                Meet the dedicated individuals behind our success. Our
                leadership team brings a wealth of experience, innovation, and
                passion to everything we do. Together, we drive our mission
                forward and shape the future of our organization.
              </p>
            </Reveal>
          </div>

          <div className="bd-grid">
            {directors.map((person, index) => (
              <Reveal key={person.name} className="bd-card" delay={index * 120}>
                <button
                  type="button"
                  className="bd-card-btn"
                  onClick={() => setSelected(person)}
                  aria-label={`Read about ${person.name}`}
                >
                  <span className="bd-photo-wrap">
                    <img className="bd-photo" src={person.image} alt={person.name} />
                  </span>
                  <span className="bd-name">{person.name}</span>
                  <span className="bd-role">{person.role}</span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Portfolio label="Portfolio" />

      {selected && (
        <DirectorModal person={selected} onClose={() => setSelected(null)} />
      )}
    </main>
  )
}

export default BoardOfDirectors;