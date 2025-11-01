

import './styles/base.scss'
import './styles/theme.scss'   
import Hero from './sections/Hero/Hero';
import Features from './sections/Features/Features';
import Pricing from './sections/Pricing/Pricing';
import Faq from './sections/Faq/Faq';
import Contact from './sections/Contact/Contact';

export default function App() {
  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (
    <>
     <a className='visually-hidden' href='#home'>İçeriğe atla</a>
     <Hero/>
     <Features/>
     <Pricing/>
     <Faq/>
     <Contact/>
      <button className="themeToggle" onClick={toggleTheme} aria-pressed="false">
        Tema
      </button>
    </>
  );
}
