import CheckoutProduct from "components/Product/CheckoutProduct";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import CurrencyFormat from "react-currency-format";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "slices/basketSlice";

const Checkout = () => {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const { data: session } = useSession();

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
        <div className="flex flex-col bg-white p-10 shadow-md">
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                Subtotal ({items.length}) items:{" "}
                <span className="font-bold">
                  <CurrencyFormat
                    value={total}
                    thousandSeparator={true}
                    prefix={"$"}
                    displayType={"text"}
                  />
                </span>
              </h2>

              <button
                disabled={!session}
                className={`button mt-2 ${
                  !session &&
                  "from-gray-300 to-gray-500 border-gray-300 text-gray-300 cursor-not-allowed"
                }`}>
                {!session ? "Sign in to checkout" : "Proceed to checkout"}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Checkout;
