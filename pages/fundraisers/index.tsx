import prisma from "../../lib/prisma";
import { GetStaticProps } from "next/types";
import React from "react";
import { Fundraiser, FundraiserProps } from "../types";
import { useDeleteRecord } from "../../hooks/useDeleteRecord";

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

type FundraiserRecordProps = {
  key: string;
  fundraiser: Fundraiser;
};

const FundraiserRecord = (props: FundraiserRecordProps) => {
  const { id, name, sellers, products } = props.fundraiser;
  const deleteFundraiser = useDeleteRecord({ table: "fundraisers", id: id });

  return (
    <div
      style={{ backgroundColor: "pink", width: "100vw" }}
      key={id}
      className="fundraiser"
    >
      <h1>{name}</h1>
      <h2>Products:</h2>
      <ul>
        {products.map((p) => {
          const {
            Product: { id, name },
          } = p;
          return <li key={id}>{name}</li>;
        })}
      </ul>
      <h2>Sellers:</h2>
      <ul>
        {sellers.map((s) => {
          const {
            Seller: { id, name, orders },
          } = s;
          return (
            <div key={id}>
              <li>
                {name} (orders: {orders.length}){" "}
                <button onClick={submitNewOrder}>Add an Order</button>
              </li>
            </div>
          );
        })}
      </ul>
      <button onClick={deleteFundraiser}>Delete</button>
    </div>
  );
};

const Fundraisers: React.FC<FundraiserProps> = (props) => {
  const { feed } = props;
  return (
    <div>
      {feed.map((fundraiser) => (
        <FundraiserRecord
          key={`record-${fundraiser.id}`}
          fundraiser={fundraiser}
        />
      ))}
    </div>
  );
};

export default Fundraisers;
