 import React from 'react'; 
 import Navbar from './navbar';
 import "../assets/Home.css";
 import CustomSlider from "../components/custom.slider";
 const images = [
  { imgURL: 'together1.jpg', imgAlt: 'Image 1 Description' },
  { imgURL: 'together2.jpg', imgAlt: 'Image 2 Description' },
  { imgURL: 'together3.jpg', imgAlt: 'Image 3 Description' },
  { imgURL: 'together4.jpg', imgAlt: 'Image 4 Description' }
];
const Home = () => {
  

  return (
    
    <div>
      <Navbar/>
      <div class="main-content">
      <div className="App">
      <CustomSlider>
        {images.map((image, index) => {
          return (
            <img
              key={index}
              src={require(`../assets/image/${image.imgURL}`)} // Use relative path here
              alt={image.imgAlt}
            />
          );
        })}
      </CustomSlider>
      </div>
      </div>
      
     
      
    </div>
  );
};

export default Home;
