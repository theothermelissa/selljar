import prisma from "../../lib/prisma";
import { GetStaticProps } from "next/types";
import React, { useState } from "react";
import { Fundraiser, FundraiserProps } from "../types";
import { useDeleteRecord } from "../../hooks/useDeleteRecord";
import { useCreateRecord } from "../../hooks/useCreateRecord";
import CreateFundraiser from "./createFundraiser";

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
  const [addFundOpen, setAddFundOpen] = useState(false);

  const handleClick = () => setAddFundOpen(true);

  return (
    <div
      style={{ backgroundColor: "white", width: "100vw" }}
      key={id}
      className="fundraiser"
    >
      {addFundOpen ? (
        <CreateFundraiser />
      ) : (
        <button onClick={handleClick}>Add a Fundraiser</button>
      )}
      <h1>
        Name: {name}{" "}
        <button onClick={deleteFundraiser}>Delete this Fundraiser</button>
      </h1>

      <h2>Id: {id}</h2>

      <h3>Products:</h3>
      <ul>
        {products.map((p) => {
          const {
            Product: { id, name },
          } = p;
          return <li key={id}>{name}</li>;
        })}
      </ul>
      <h3>Sellers:</h3>
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
