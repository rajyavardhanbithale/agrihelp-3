import React from 'react';
import imageSrc from './assets/Carousel.jpeg'; // Replace with the correct image source
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import "../../App.css"
import Link from 'next/link';
function ProductCarousel() {
  const images = [
    'https://images.pexels.com/photos/158827/field-corn-air-frisch-158827.jpeg',
    'https://images.pexels.com/photos/259280/pexels-photo-259280.jpeg',
    'https://images.pexels.com/photos/55766/pexels-photo-55766.jpeg',
    'https://images.pexels.com/photos/8919791/pexels-photo-8919791.jpeg',
    'https://images.pexels.com/photos/10838610/pexels-photo-10838610.jpeg',
    'https://images.pexels.com/photos/14242188/pexels-photo-14242188.jpeg'

  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,      // Enable autoplay
    autoplaySpeed: 4000, // Set the interval (in milliseconds)


  };
  return (
    <div className="relative">
      {/* <img
        className="w-full object-cover brightness-50 filter lg:h-[500px]"
        src="assets/Carousel.jpeg"
        alt="ProductCarousel"
      /> */}
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`} className="w-full object-cover brightness-[0.3] filter lg:h-[500px]" />
          </div>
        ))}
      </Slider>

      <div className="absolute top-1/2 left-1/2 mx-auto flex w-11/12 max-w-[1200px] -translate-x-1/2 -translate-y-1/2 flex-col text-center text-white lg:ml-5">
        <h1 className="text-4xl font-bold sm:text-5xl lg:text-left">
          Best Product &ldquo;Farmer&apos;s Choice&ldquo;
        </h1>
        <p className="pt-3 text-xs lg:w-3/5 lg:pt-5 lg:text-left lg:text-base">
          &ldquo;Farmer&apos;ss Choice&ldquo; offers superior agricultural products,
          handpicked by dedicated farmers. Embrace the exceptional quality and
          freshness of our carefully cultivated selection, delivering the essence
          of premium farming to your table.
        </p>
        <Link href={"/shop/search"}>

        <button className="mx-auto mt-5 w-1/2 bg-teal-600 rounded-xl p-5 text-gray-50 transition duration-500 flex items-center  hover:bg-teal-600 lg:mx-0 lg:h-10 lg:w-2/12 justify-center">
          Order Now
        </button>
        </Link>
      </div>
    </div>
  );
}

export default ProductCarousel;