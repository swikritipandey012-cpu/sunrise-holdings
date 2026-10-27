import { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

function Dropdown({ label, items, isActive, isOpen, onToggle, onOpen, onClose }) {
  const closeTimer = useRef(null)

  const cancelClose = () => clearTimeout(closeTimer.current)
  useEffect(() => cancelClose, [])

  // Mouse: opens on hover (small delay on leave so the menu does not flicker).
  // Touch and keyboard: opens with a tap / Enter.
  const handleEnter = (e) => {
    if (e.pointerType !== 'mouse') return
    cancelClose()
    onOpen()
  }

  const handleLeave = (e) => {
    if (e.pointerType !== 'mouse') return
    cancelClose()
    closeTimer.current = setTimeout(onClose, 160)
  }

  const handleClick = (e) => {
    if (e.nativeEvent.pointerType === 'mouse') onOpen()
    else onToggle()
  }

  const classes = ['dropdown', isOpen ? 'open' : '', isActive ? 'current' : '']
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes} onPointerEnter={handleEnter} onPointerLeave={handleLeave}>
      <button
        type="button"
        className="nav-link nav-trigger"
        aria-haspopup="true"
        aria-expanded={isOpen}
        onClick={handleClick}
      >
        {label}
        <span className="chevron" aria-hidden="true"></span>
      </button>

      <div className="dropdown-menu" onClick={onClose}>
        {items.map((item) => (
          <NavLink key={item.to} to={item.to} className="dropdown-item">
            {item.label}
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default Dropdown;