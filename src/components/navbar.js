import React from 'react';
import '../assets/Navbar.css'; // Import the CSS file

const Navbar = () => {
  return (
    <div className='header'> {/* Wrapping everything inside a parent div */}
            
      <a href="https://example.com"  class="logo">Социал Демократ Монголын Эмэгтэйчүүдийн холбоо </a>

      <div id="menu" className="fas fa-bars"></div>
      
      <nav class="navbar">
            <ul>   
            <li><a class="active" href="#home">Нүүр Хуудас</a></li>
            <li><a href="#about">Бидний тухай</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#work">Мэдээ мэдээлэл</a></li>
            <li><a href="#experience">Тун удахгүй</a></li>
            <li><a href="#contact">Бидэнтэй Холбогдох</a></li>
            </ul>
        </nav>
    </div>
  );
};

export default Navbar;
