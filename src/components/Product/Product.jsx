import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import Currency from "react-currency-formatter";

const MAX_RATING = 5;
const MIN_RATING = 1;

const Product = ({ id, title, price, description, category, image }) => {
  const [rating, setRating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

  const [hasPrime, setHasPrime] = useState(Math.random() < 0.5);

  return (
    <div className="w-full mx-auto bg-white relative flex flex-col m-5 z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>

      <div className="relative w-full h-40">
        <Image
          src={image}
          alt="Product image"
          layout="fill"
          objectFit="contain"
        />
      </div>

      <h4 className="my-4">{title}</h4>

      <div className="flex items-center">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon
              key={i}
              className="text-yellow-500 w-4 h-4"
            />
          ))}
      </div>

      <p className="text-xs my-2 line-clamp-2">{description}</p>

      <div className="b-5">
        <Currency quantity={price} />
      </div>

      {hasPrime && (
        <div className="flex items-center justify-between">
          <div className="relative w-16 h-8">
            <Image
              src={"http://links.papareact.com/fdw"}
              alt="Prime logo"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <p className="text-xs text-gray-400">FREE Next-day Delivery</p>
        </div>
      )}

      <button className="mt-auto button">Add to Basket</button>
    </div>
  );
};

export default Product;
