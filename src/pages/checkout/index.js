import CheckoutProduct from "components/Product/CheckoutProduct";
import Image from "next/image";
import React, { useId } from "react";
import { useSelector } from "react-redux";
import { selectItems } from "slices/basketSlice";

const Checkout = () => {
  const items = useSelector(selectItems);

  return (
    <div className="bg-gray-100">
      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* Left section */}
        <div className="relative w-full h-[250px] grow shadow">
          <Image
            src={"https://links.papareact.com/ikj"}
            alt="Hero image"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="flex flex-col p-5 gap-y-10 bg-white">
          <h1 className="text-3xl border-b pb-4 font-semibold">
            {items.length === 0
              ? "Your Amazon Basket is Empty"
              : "Shopping Basket"}
          </h1>

          {items.map(
            (
              { id, title, price, description, category, image, hasPrime },
              i
            ) => (
              <CheckoutProduct
                key={i}
                id={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
                hasPrime={hasPrime}
              />
            )
          )}
        </div>

        {/* Right section */}
      </main>
    </div>
  );
};

export default Checkout;
