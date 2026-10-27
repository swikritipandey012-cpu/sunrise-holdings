import Reveal from './Reveal';
import './CompanySection.css';

// One company: photo on one side, text on the other.
// reverse = photo on the right. tone="cream" = cream background.
function CompanySection({ name, place, image, imageAlt, caption, paragraphs, link, reverse = false, tone = 'white' }) {
  const classes = ['pg-company', tone === 'cream' ? 'alt' : '', reverse ? 'reverse' : '']
    .filter(Boolean)
    .join(' ')

  return (
    <section className={classes}>
      <div className="pg-company-inner">
        <Reveal className="pg-company-visual" direction={reverse ? 'right' : 'left'}>
          <div className="pg-photo">
            <img src={image} alt={imageAlt || name} />
          </div>
          {caption && <div className="pg-badge">{caption}</div>}
        </Reveal>

        <Reveal className="pg-company-text" direction={reverse ? 'left' : 'right'} delay={150}>
          <span className="pg-label">Company Introduction</span>
          <h2>{name}</h2>
          {place && <span className="pg-place">{place}</span>}
          {paragraphs.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
          {link && (
            <a href={link} className="btn" target="_blank" rel="noopener noreferrer">
              Learn More <span>→</span>
            </a>
          )}
        </Reveal>
      </div>
    </section>
  )
}

export default CompanySection;