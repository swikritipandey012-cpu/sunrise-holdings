import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';
import Dropdown from './Dropdown';

const aboutItems = [
  { label: 'About', to: '/about/about' },
  { label: 'Board of Directors', to: '/about/board-of-directors' },
  { label: 'Mission & Vision', to: '/about/mission-and-vision' },
]

const portfolioItems = [
  { label: 'Tourism & Hospitality', to: '/portfolio/hospitality' },
  { label: 'Aviation Industry', to: '/portfolio/aviation-industry' },
  { label: 'Hydropower', to: '/portfolio/hydropower' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [openMenu, setOpenMenu] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const navRef = useRef(null)
  const { pathname } = useLocation()

  // Shrinks the bar and hides the orange strip after a little scrolling
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Click outside or Escape closes any open dropdown
  useEffect(() => {
    const onClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenMenu(null)
      }
    }
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpenMenu(null)
        setMobileOpen(false)
      }
    }
    document.addEventListener('mousedown', onClickOutside)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClickOutside)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  const closeMobile = () => setMobileOpen(false)
  const toggle = (name) => setOpenMenu((current) => (current === name ? null : name))

  return (
    <header
      ref={navRef}
      className={scrolled ? 'navbar scrolled' : 'navbar'}
    >
      <div className="navbar-strip">
        <a href="tel:014169003">01-416-9003</a>
        <Link to="/contact-us">Contact Us</Link>
      </div>

      <div className="navbar-main">
        <Link to="/" className="navbar-brand">
          <img className="navbar-logo" src={logo} alt="Sunrise Holdings logo" />
        </Link>

        <nav className="navbar-links" aria-label="Main">
          <NavLink to="/" end className="nav-link">Home</NavLink>

          <Dropdown
            label="About"
            items={aboutItems}
            isActive={pathname.startsWith('/about')}
            isOpen={openMenu === 'about'}
            onToggle={() => toggle('about')}
            onOpen={() => setOpenMenu('about')}
            onClose={() => setOpenMenu(null)}
          />

          <Dropdown
            label="Portfolio"
            items={portfolioItems}
            isActive={pathname.startsWith('/portfolio')}
            isOpen={openMenu === 'portfolio'}
            onToggle={() => toggle('portfolio')}
            onOpen={() => setOpenMenu('portfolio')}
            onClose={() => setOpenMenu(null)}
          />

          <NavLink to="/contact-us" className="nav-link">Contact Us</NavLink>
        </nav>

        <button
          className="hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={mobileOpen ? 'mobile-menu open' : 'mobile-menu'}>
        <Link to="/" className="mobile-link" onClick={closeMobile}>Home</Link>

        <p className="mobile-group">About</p>
        {aboutItems.map((item) => (
          <Link key={item.to} to={item.to} className="mobile-link sub" onClick={closeMobile}>
            {item.label}
          </Link>
        ))}

        <p className="mobile-group">Portfolio</p>
        {portfolioItems.map((item) => (
          <Link key={item.to} to={item.to} className="mobile-link sub" onClick={closeMobile}>
            {item.label}
          </Link>
        ))}

        <Link to="/contact-us" className="mobile-link" onClick={closeMobile}>Contact Us</Link>
        <a href="tel:014169003" className="mobile-phone">01-416-9003</a>
      </div>
    </header>
  )
}

export default Navbar;