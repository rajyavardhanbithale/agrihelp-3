import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';



function ProductCard(props) {
  console.log(props.width);
  const [item, setItem] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/v2/shop-item?item=8");
        if (response.status === 200) {
          setItem(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();


    return () => {
      // Cleanup code here (if needed)
    };
  }, []);

  function calculateDiscountPercentage(buyingPrice, sellingPrice) {
    const discountPercentage = ((buyingPrice - sellingPrice) / buyingPrice) * 100
    return Math.round(discountPercentage.toFixed(2))  // Optionally round to two decimal places
    
  }

  console.log(props.width);

  return (
    <>
     <h2 className="mt-16 mx-auto mb-16 max-w-[1200px] px-8 text-center text-3xl tracking-widest">Seeds</h2>
     <div className={`flex flex-wrap w-[${props?.width}%] ml-auto mr-auto`}>
        {item.map((product, idx) => (
          <section
            key={idx}
            className="flex flex-col w-full md:w-1/2 lg:w-1/4 px-5 pb-10"
          >
            <div className="flex flex-col">
              <div className="relative flex items-center justify-center">
                <img
                  className="w-48 h-48 object-scale-down"
                  src={product.images[0]}
                  alt={product.name}
                />
                <div className="absolute flex h-full w-full items-center justify-center gap-3 opacity-0 duration-150 hover:opacity-100">
                  {/* ... (your existing code for hover effects) ... */}
                </div>
                <div className="absolute top-0 right-1 mt-3 flex items-center justify-center bg-amber-400">
                  <p className="px-2 py-2 text-sm">
                     {calculateDiscountPercentage(product?.originalPrice, product?.price)}% OFF
                  </p>
                </div>
              </div>
              <div>
                <p className="mt-2 text-xl h-[3.6rem] overflow-hidden">{product?.name}</p>
                <p className="mt-2">{product?.brand}</p>
                <p className="text-lg text-violet-900">
                  &#8377; {product.price}&nbsp;
                  <span className="text-sm text-gray-500 line-through">&#8377; {product.originalPrice}</span>
                </p>
                <div className="flex items-center text-xl">
                  {[...Array(Math.round(parseFloat(product?.rating)))].map((_, index) => (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-4 w-4 text-yellow-400"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                  <p className="text-lg text-gray-400">&nbsp; {product?.rating * 10}</p>
                </div>
                <div>
                  {/* <button className="rounded-2xl my-5 h-10 w-full bg-teal-600 text-gray-50 hover:bg-teal-800 transition duration-500 ease-in-out">
                    Add to cart
                  </button> */}
                  <Link href={`${props.path}${product?.productId}`}>

                  <button className="rounded-2xl my-5 h-10 w-full bg-teal-600 text-gray-50 hover:bg-teal-800 transition duration-500 ease-in-out">
                    View
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}

export default ProductCard;
