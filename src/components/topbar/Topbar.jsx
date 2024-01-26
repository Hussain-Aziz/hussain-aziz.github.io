import React, { useEffect, useState } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { FaLaptopCode } from "react-icons/fa";
import { BiMessageSquareDetail } from 'react-icons/bi';

import './topbar.css';

const usePageLocation = () => {
  const [loc, setLoc] = useState(window.location.hash);
  useEffect(() => {
    const sections = [...document.querySelectorAll('header[id]'), ...document.querySelectorAll('section[id]')];

    function updateHash() {
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const innerHeight = window.innerHeight / 2;

        if (rect.top <= innerHeight && rect.bottom >= innerHeight) {
          setLoc(`#${section.id}`);
        }
      });
    }

    window.addEventListener('scroll', updateHash);

    return () => {window.removeEventListener('scroll', updateHash)}
  }, []);

  return loc;
};

const Topbar = () => {
  const loc = usePageLocation()

  return (
    <nav>
      <a href="#home" className={loc === '#home' || loc === '' ? 'active' : ''} title="Home"><AiOutlineHome /></a>
      <a href="#portfolio" className={loc === '#portfolio' ? 'active' : ''} title="Portfolio"><FaLaptopCode /></a>
      <a href="#about" className={loc === '#about' ? 'active' : ''} title="About"><AiOutlineUser /></a>
      <a href="#contact" className={loc === '#contact' ? 'active' : ''} title="Contact"><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Topbar;