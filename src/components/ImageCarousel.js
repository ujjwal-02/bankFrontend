import React, { useState, useEffect } from 'react';

const ImageCarousel = () => {
  // Define an array of image URLs
  const images = [
    'https://i.pinimg.com/474x/e8/14/40/e814404504f06eb047b788ec81d115fa.jpg',
    'https://www.gstsuvidhacenters.com/WebsiteAssets/images/Services/DirectMoneyTransfer.png',
    'https://clappay.in/assets/img/customer.jpg',
    'https://minibankindia.com/assets/img/Money%20transfer/4.png',
    'https://navi.com/blog/wp-content/uploads/2022/09/Prepaid-Credit-Card.jpg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to switch to the next image
  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Automatically switch to the next image every 5 seconds
  useEffect(() => {
    const interval = setInterval(showNextImage, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="image-carousel-container">
      <img
        src={images[currentImageIndex]}
        alt="Carousel"
        className="image-carousel"
      />
    </div>
  );
};

export default ImageCarousel;
