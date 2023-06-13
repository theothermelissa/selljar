import prisma from "../lib/prisma";
import { GetStaticProps } from "next/types";
import React from "react";
import { ProductProps } from "./types";

export const getStaticProps: GetStaticProps = async () => {
  const feed = await prisma.product.findMany();
  return {
    props: { feed },
    revalidate: 10,
  };
};

const Products: React.FC<ProductProps> = (props) => {
  const { feed } = props;
  console.log("feed: ", feed);

  return (
    <div>
      <div>
        {props.feed.map((product) => {
          return (
            <div key={product.id} className="product">
              <h1>{product.name}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
