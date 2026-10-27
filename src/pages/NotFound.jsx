import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';

// Shown when someone opens a web address that does not exist
function NotFound() {
  return (
    <main>
      <PageHeader
        label="Error 404"
        title="Page Not Found"
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Page Not Found' }]}
      />
      <section style={{ padding: '96px 48px', background: 'var(--white)', textAlign: 'center' }}>
        <p style={{ margin: '0 0 32px', fontSize: 17, lineHeight: 1.8, color: 'var(--muted)' }}>
          Sorry, the page you are looking for does not exist.
        </p>
        <Link to="/" className="btn">Back to Home <span>→</span></Link>
      </section>
    </main>
  )
}

export default NotFound;