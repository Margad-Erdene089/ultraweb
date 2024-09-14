import React from 'react';
import '../assets/Navbar.css'; 

const Navbar = () => {
  return (
    <div class="father">
       <div class='header'> 
            
            <a href="home"  class="logo">Социал Демократ Монголын Эмэгтэйчүүдийн Холбоо </a>
      
            
            
            <nav class="navbar">
                  <ul>   
                  <li><a class="active" href="#home">Нүүр Хуудас</a></li>
                  <li><a href="#about">Бидний тухай</a></li>
                  <li><a href="#information">Мэдээ Мэдээлэл</a></li>
                  <li><a href="#comingSoon">Тун Удахгүй</a></li>
                  <li><a href="#contact">Бидэнтэй Холбогдох</a></li>
                  </ul>
              </nav>
          </div>
    </div>
   
  );
};

export default Navbar;
