/* eslint-disable import/no-anonymous-default-export */
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
  const { items, email } = req.body;

  const transformItems = items.map((item) => ({
    price_data: {
      currency: "usd",
      product_data: {
        name: item.title,
        images: [item.image],
        description: item.description,
      },
      unit_amount: item.price * 100,
    },
    quantity: 1,
  }));

  try {
    console.log("Iniciando la llamada al api del checkout");
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      success_url: `${process.env.HOST}/success`,
      cancel_url: `${process.env.HOST}/checkout`,
      // customer_email: email,
      line_items: transformItems,
      metadata: {
        email,
        images: JSON.stringify(items.map((item) => item.image)),
      },
      allow_promotion_codes: true,
      shipping_address_collection: {
        allowed_countries: ["GB", "US", "CA"],
      },
      // discounts: {
      //   coupon: ["ksAXQ3JR"],
      //   promotion_code: ["promo_1MI4juHWXnUyHhdPD6kyBxRy"],
      // },
    });

    res.status(200).json({ id: session.id });
  } catch (err) {
    res.status(err.statusCode || 500).json(err.message);
  }

  // if (req.method === "POST") {
  //   try {
  //     const session = await stripe.checkout.sessions.create({
  //       items: [
  //         {
  //           price: "{{PRICE}}",
  //         },
  //       ],
  //       mode: "payment",
  //       success_url: `${req.headers.origin}/?success=true`,
  //       cancel_url: `${req.headers.origin}/?canceled=true`,
  //     });
  //   } catch (error) {
  //     res.status(err.statusCode || 500).json(err.message);
  //   }
  // } else {
  //   res.setHeader("Allow", "POST");
  //   res.status(405).end("Method Not Allowed");
  // }
};
