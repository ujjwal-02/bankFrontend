import React from 'react';

const ShopHere = () => {
  const imageList = [
    {
      src: 'https://i.pinimg.com/474x/62/2a/df/622adf8fcd1816f363429d1c124e2350.jpg',
      alt: 'Zomato',
    },
    {
      src: 'https://i.pinimg.com/474x/db/03/dd/db03dd9ea70fdf096278cc452ff4c651.jpg',
      alt: 'Uber',
    },
    {
      src: 'https://i.pinimg.com/474x/df/3c/3c/df3c3c9c6fcbe761c88f9c8010f61da4.jpg',
      alt: 'Ola',
    },
    {
      src: 'https://i.pinimg.com/474x/8e/3e/d0/8e3ed0a2a12839591305528a8ac95b2c.jpg', 
      alt: 'Swiggy 1',
    },
    {
      src: 'https://i.pinimg.com/474x/7d/4b/9a/7d4b9a1b191f5eabb1e80c6179b113ba.jpg',
      alt: 'Swiggy 2',
    },
    {
      src: 'https://i.pinimg.com/474x/34/44/68/3444682f8d3afb201a72ef9231a9a7d8.jpg',
      alt: 'Swiggy 2',
    },
  ];

  // Shuffle the image list to randomize their positions
  for (let i = imageList.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [imageList[i], imageList[j]] = [imageList[j], imageList[i]];
  }

  return (
    <div className="shop-here-container">
      <h1 className="shop-here-title" style={{ textAlign: 'center' }}>
        Money Made Simple, by FlashPay
      </h1>
      <div className="shop-here-logos" style={gridContainerStyle}>
        {imageList.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="shop-here-logo"
            style={imageStyle}
          />
        ))}
      </div>
    </div>
  );
};

const gridContainerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)', // Adjust the number of columns as needed
  gridGap: '10px',
  placeItems: 'center',
};

const imageStyle = {
  margin: '10px',
  padding: '1px',
  width: '350px',
  height: '200px',
};

export default ShopHere;
