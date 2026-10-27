import { Link } from 'react-router-dom';
import './PageHeader.css';

function PageHeader({ label, title, crumbs }) {
  return (
    <section className="page-header">
      <div className="page-header-inner">
        <span className="page-header-label">{label}</span>
        <h1>{title}</h1>
        <nav className="breadcrumb" aria-label="Breadcrumb">
          {crumbs.map((crumb, index) => (
            <span key={crumb.label}>
              {crumb.to ? <Link to={crumb.to}>{crumb.label}</Link> : <span className="breadcrumb-current">{crumb.label}</span>}
              {index < crumbs.length - 1 && <span className="breadcrumb-sep">/</span>}
            </span>
          ))}
        </nav>
      </div>
    </section>
  )
}

export default PageHeader;