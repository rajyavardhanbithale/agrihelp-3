'use client'
import React from 'react';

import ShopHeader from '../components/shop/ShopHeader';
import ShopNav from '../components/shop/ShopNav';
import Shopbox from '../components/shop/Shopbox';
import ProductCarousel from '../components/shop/ProductCarousel';
import Category from '../components/shop/Category';
import PromoSection from '../components/shop/PromoSection';
import ProductCard from '../components/shop/ProductCard';
import ShopFooter from '../components/shop/ShopFooter';
import ShopAbout from '../components/shop/ShopAbout';
import Cart from './cart/page';
import Wishlist from './wishlist/page';
import Contact from './contact/page';
import Account from './checkout/page'



export default function Shop() {
  return (
    <>

     
        {/* <Routes>
          <Route path='/Cart' element={<Cart />} />
        </Routes>
        <Routes>
          <Route path='/wishlist' element={<Wishlist />} />
        </Routes>
        <Routes>
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Routes>
          <Route path='/Account' element={<Account/>} />
        </Routes>
       
        <Routes>
          <Route path='/' element={<ProductCarousel />} />
        </Routes>
        <Routes>
          <Route path='/' element={<Shopbox />} />
        </Routes>
        <Routes>
          <Route path='/' element={<Category />} />
        </Routes>
        <Routes>
          <Route path='/' element={<PromoSection />} />
        </Routes>
        <Routes>
          <Route path='/' element={<ProductCard />} />
        </Routes> */}

        {/* <ShopNav /> */}
        <ShopHeader />
        {/* <ShopAbout /> */}
        <ProductCarousel />
        <Shopbox />
        <Category />
        <PromoSection />
        <ProductCard width={80} path={"shop/product/"} title={"Seeds"} totalItem={6} category={"seeds"} />
        <ProductCard width={80} path={"shop/product/"} title={"Fertilizer"} totalItem={6} category={"fertilizer"} />
                
      
     
       
       {/* <ShopFooter /> */}

    </>
  );
}

// 'use client'
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';


// export default function shop(){
//   const [searchQuery, setSearchQuery] = useState('');
//   const [searchResults, setSearchResults] = useState([]);

//   useEffect(() => {
//       const fetchSearchResults = async () => {
//           try {
//               const response = await axios.get(`http://127.0.0.1:8000/v2/search?item=${searchQuery}`);
//               const data = response.data;

//               // console.log(data);
//               setSearchResults(data);
//           } catch (error) {
//               console.error('Error fetching search results:', error);
//           }
//       };

//       const delayDebounceFn = setTimeout(() => {
//           if (searchQuery.trim() !== '') {
//               fetchSearchResults();
//           }
//       }, 100); // Debounce time in milliseconds

//       return () => clearTimeout(delayDebounceFn);
//   }, [searchQuery]);

//   // console.log(searchResults);

//   function calculateDiscountPercentage(buyingPrice, sellingPrice) {
//     const discountPercentage = ((buyingPrice - sellingPrice) / buyingPrice) * 100;
//     return discountPercentage.toFixed(2); // Optionally round to two decimal places
//   }

//   return (
//     <>

//       <div>
//           <input
//               type="text"
//               placeholder="Search products..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//           />
// {/* 
//           <ul>
//               {searchResults.map((product) => (
//                   <li key={product._id}>{product.name}</li>
//                   // Adjust the property names based on your MongoDB schema
//               ))}
//           </ul> */}
//       </div>
//       <div className="flex flex-wrap">
//         {searchResults.map((product, idx) => (
//           <section
//             key={idx}
//             className="flex flex-col w-full md:w-1/2 lg:w-1/4 px-5 pb-10"
//           >
//             <div className="flex flex-col">
//               <div className="relative flex items-center justify-center">
//                 <img
//                   className="w-48 h-48 object-scale-down"
//                   src={product.images[0]}
//                   alt={product.name}
//                 />
//                 <div className="absolute flex h-full w-full items-center justify-center gap-3 opacity-0 duration-150 hover:opacity-100">
//                   {/* ... (your existing code for hover effects) ... */}
//                 </div>
//                 <div className="absolute right-1 mt-3 flex items-center justify-center bg-amber-400">
//                   <p className="px-2 py-2 text-sm">
//                     &minus; {calculateDiscountPercentage(product?.originalPrice, product?.price)}% OFF
//                   </p>
//                 </div>
//               </div>
//               <div>
//                 <p className="mt-2 text-xl">{product?.name}</p>
//                 <p className="mt-2">{product?.brand}</p>
//                 <p className="text-lg text-violet-900">
//                   &#8377; {product.price}&nbsp;
//                   <span className="text-sm text-gray-500 line-through">&#8377; {product.originalPrice}</span>
//                 </p>
//                 <div className="flex items-center text-xl">
//                   {[...Array(Math.round(parseFloat(product?.rating)))].map((_, index) => (
//                     <svg
//                       key={index}
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                       className="h-4 w-4 text-yellow-400"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                   ))}
//                   <p className="text-lg text-gray-400">&nbsp; {product?.rating * 10}</p>
//                 </div>
//                 <div>
//                   <button className="my-5 h-10 w-full bg-violet-900 text-white">
//                     Add to cart
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </section>
//         ))}
//       </div>
//     </>
//   );
// };


