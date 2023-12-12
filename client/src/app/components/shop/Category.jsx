import React from 'react';

function Categories() {
  const category = {
    "seed": {
      "name": "seed",
      "image": "https://www.poshtik.in/cdn/shop/products/sunflower_seeds.jpg",
      "href": "/shop/search/seed"
    },
    "fertilizer": {
      "name": "fertilizer",
      "image": "https://www.tradeindia.com/_next/image/?url=https%3A%2F%2Ftiimg.tistatic.com%2Ffp%2F1%2F007%2F569%2Fpromoting-healthy-and-strong-growth-urea-source-of-nitrogen-granular-fertilizer-215.jpg&w=750&q=75",
      "href": "/shop/search/fertilizer"
    },
    "pump": {
      "name": "pump",
      "image": "https://www.inverter.com/images/thumbs/0000849_5-hp-horizontal-centrifugal-pump_550.jpeg",
      "href": "/shop/search/fertilizer"
    },
    "pesticide": {
      "name": "pesticide",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbgCja6fMyaL1N3cixVyTMxsApzOxc7D86j-15WMMAd_Ip1VxJBfGziYzEKL37Opyd8NU&usqp=CAU",
      "href": "/shop/search/fertilizer"
    },
    "equipment": {
      "name": "equipment",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMgh4nphvHBpQJF1l7PMT7_kyt3hyXYnwYB7X7UgKGzkOWuV-rhyZjzC8Lsb3EwfFdOLY&usqp=CAU",
      "href": "/shop/search/fertilizer"
    },
    "organicProducts": {
      "name": "Organic Products",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSonkaWy730goAUAO_deInGd5rGTBI4GZOmoZSxxfJxJNm0DlYRicqu5llfgUYnvpcWA6c&usqp=CAU",
      "href": "/shop/search/fertilizer"
    },

  }


  return (
    <>
      <div>
        <h2 className="mx-auto mb-8 mt-16 max-w-[1200px] px-8 text-center text-3xl tracking-widest">SHOP BY CATEGORY</h2>
        <section className="mx-auto grid max-w-[1200px] grid-cols-2 px-5 lg:grid-cols-3 lg:gap-8">
          {Object.entries(category).map(([key, item]) => (
            <a key={key} href={item.href} className='py-5 px-5'>
              <div className="relative cursor-pointer">
                <img
                  className="rounded-xl mx-auto object-cover object-center h-[200px] w-[450px] brightness-50 duration-300 hover:brightness-90 "
                  src={item.image}
                  alt={item.name}
                />
                <p className="tracking-wider  text-xl font-weight-bold capitalize pointer-events-none absolute top-1/2 left-1/2 w-11/12 -translate-x-1/2 -translate-y-1/2 text-center text-white lg:text-xl">
                  {item.name}
                </p>
              </div>

            </a>
          ))}
        </section>
      </div>
    </>
  );
}

export default Categories;
