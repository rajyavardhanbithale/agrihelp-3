import React from 'react';

function Wishlist({ imageSrc, productName, availability, price }) {
  return (
    <div className="flex w-full h-44 flex-row items-center justify-between border py-5 px-4">
      <div className="flex w-full items-center gap-4">
        <img width="100px" className="object-cover" src={imageSrc} alt={`${productName} image`} />
        <div className="flex flex-col justify-center">
          <p className="text-xl font-bold">{productName}</p>
          <p className="text-gray-500">
            Availability: <span className={`font-medium ${availability === 'In Stock' ? 'text-green-600' : 'text-red-600'}`}>{availability}</span>
          </p>
        </div>
      </div>
      <div className="flex w-3/5 items-center justify-between flex-row">
        <p className="mt-2 text-xl font-bold text-violet-900">${price}</p>
        <div className="mt-2 flex items-center">
          <button className="w-full px-2 bg-amber-400 py-2 lg:px-5">Add to cart</button>
          <i className="ml-5 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
              {/* SVG Path for icon */}
            </svg>
          </i>
        </div>
      </div>
    </div>
  );
}

function ProductSection() {
  return (
    <section className="hidden w-full max-w-[1200px] grid-cols-1 gap-8 px-5 pb-10 md:grid">
      <ProductCard
        imageSrc="./assets/images/kitchen.png"
        productName="ITALIAN KITCHEN"
        availability="In Stock"
        price="320.00"
      />
      {/* Add more ProductCard components with different product details */}
    </section>
  );
}

export default Wishlist;