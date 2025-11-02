import { useEffect, useState } from 'react';
import './styles/base.scss'
import './styles/theme.scss'   
import Hero from './sections/Hero/Hero';
import Features from './sections/Features/Features';
import Pricing from './sections/Pricing/Pricing';
import Faq from './sections/Faq/Faq';
import Contact from './sections/Contact/Contact';
import Header from './components/Header/Header';

export default function App() {
  const [hideHeader, setHideHeader] = useState(false);
  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
  };

   useEffect(() => {
    const hero = document.getElementById('home');
    if (!hero) return;

    // Hero görünümden çıkınca header gizlensin
    const io = new IntersectionObserver(
      ([entry]) => {
        setHideHeader(!entry.isIntersecting);
      },
      {
        threshold: 0.01,
      }
    );

    io.observe(hero);
    return () => io.disconnect();
  }, []);


  return (
    <>
     <a className='visually-hidden' href='#home'>İçeriğe atla</a>
     <Header onToggleTheme={toggleTheme} hidden={hideHeader} />
     <Hero/>
     <Features/>
     <Pricing/>
     <Faq/>
     <Contact/>
      
    </>
  );
}
