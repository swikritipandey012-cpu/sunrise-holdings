import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const titles = {
  '/': 'Sunrise Holdings',
  '/about/about': 'About Us | Sunrise Holdings',
  '/about/board-of-directors': 'Board of Directors | Sunrise Holdings',
  '/about/mission-and-vision': 'Mission & Vision | Sunrise Holdings',
  '/portfolio/hospitality': 'Tourism & Hospitality | Sunrise Holdings',
  '/portfolio/aviation-industry': 'Aviation Industry | Sunrise Holdings',
  '/portfolio/hydropower': 'Hydropower | Sunrise Holdings',
  '/contact-us': 'Contact Us | Sunrise Holdings',
}

// Changes the browser tab title on every page
function PageTitle() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = titles[pathname] || 'Page Not Found | Sunrise Holdings';
  }, [pathname]);

  return null;
}

export default PageTitle;