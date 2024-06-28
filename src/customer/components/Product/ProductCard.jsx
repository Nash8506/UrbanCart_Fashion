import React from "react";
import "./ProductCard.css";

const ProductCard = () => {
  return (
    <div className="productCard w-[15rem] m-3 transition-all cursor-pointer">
      <div className="h-[20rem]">
        <img
          className="h-full w-full object-cover object-left-top"
          src="https://rukminim2.flixcart.com/image/612/612/krme93k0/dress/p/i/d/3xl-lucy-021022023-purvaja-original-imag5dfgzhsghtcz.jpeg?q=70"
          alt=""
        />
      </div>

      <div className="text-left bg-white p-3">

        <div>
          <p className="font-bold opacity-60">TopBrand</p>
          <p>Casual top black-white</p>
        </div>

        <div className="flex items-center space-x-2 mt-2">
 
                <p className="font-semibold">₹ 199</p>
                <p className="line-through opacity-50">₹ 1999</p>
                <p className="text-green-600 font-semibold">70% OFF</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
