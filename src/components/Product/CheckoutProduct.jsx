import Image from "next/image";
import React from "react";
import CurrencyFormat from "react-currency-format";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "slices/basketSlice";

const CheckoutProduct = ({
  id,
  title,
  price,
  description,
  category,
  image,
  hasPrime,
}) => {
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
      hasPrime,
    };

    //Add item to redux
    dispatch(addToBasket(product));
  };

  const removeItemFromBasket = () => {
    //Remove the item from redux
    dispatch(removeFromBasket({ id }));
  };

  return (
    <div className="grid grid-cols-5">
      <Image
        src={image}
        alt="Product image"
        height={200}
        width={200}
        objectFit="contain"
      />

      <div className="col-span-3 mx-5">
        <p className="font-semibold">{title}</p>
        <p className="text-xs my-2 line-clamp-2">{description}</p>

        <div className="b-5 font-bold">
          <CurrencyFormat
            value={price}
            thousandSeparator={true}
            prefix={"$"}
            displayType={"text"}
          />
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
      </div>

      <div className="flex flex-col gap-y-2 my-auto justify-self-end">
        <button
          onClick={addItemToBasket}
          className="button">
          Add to Basket
        </button>
        <button
          onClick={removeItemFromBasket}
          className="button">
          Remove from Basket
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
