import prisma from "../../lib/prisma";
import { GetStaticProps } from "next/types";
import React from "react";
import { FundraiserProps } from "../types";

export const getStaticProps: GetStaticProps = async () => {
  const feed = await prisma.fundraiser.findMany({
    include: {
      products: {
        include: {
          Product: true,
        },
      },
      sellers: {
        include: {
          Seller: {
            include: {
              orders: true,
            },
          },
        },
      },
    },
  });
  return {
    props: { feed },
    revalidate: 10,
  };
};

const submitNewOrder = async (e: React.SyntheticEvent) => {
  e.preventDefault();
  try {
    const body = {
      fundraiserId: "cliq1wqag00006f2ekt21f1el",
      sellerId: "cliq1zjih00066f2exwd641g0",
      supporterName: "Mary",
    };
    await fetch("/api/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }).then((response) => {});
  } catch (error) {
    console.error("this is the error: ", error);
  }
};

const Fundraisers: React.FC<FundraiserProps> = (props) => {
  const { feed } = props;
  return (
    <div>
      <div>
        {props.feed.map((fundraiser) => {
          return (
            <div key={fundraiser.id} className="fundraiser">
              <h1>{fundraiser.name}</h1>
              <h2>Products:</h2>
              <ul>
                {fundraiser.products.map((p) => {
                  const {
                    Product: { id, name },
                  } = p;
                  return <li key={id}>{name}</li>;
                })}
              </ul>
              <h2>Sellers:</h2>
              <ul>
                {fundraiser.sellers.map((s) => {
                  return (
                    <div key={s.Seller.id}>
                      <li>
                        {s.Seller.name} (orders: {s.Seller.orders.length}){" "}
                        <button onClick={submitNewOrder}>Add an Order</button>
                      </li>
                    </div>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Fundraisers;
