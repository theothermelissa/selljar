import prisma from "../lib/prisma";
import { GetStaticProps } from "next/types";
import Router from "next/router";
import React from "react";

// type PostProps = {
//   id: string;
//   title: string;
//   author: {
//     name: string;
//     email: string;
//   } | null;
//   content: string;
//   published: boolean;
// };

type Product = {
  Product: {
    id: string;
    name: string;
  };
};

type FundraiserProps = {
  id: string;
  name: string;
  products: Product[];
};

type Props = {
  feed: FundraiserProps[];
};

// const user = await prisma.user.findFirst({
//     include: {
//       posts: {
//         include: {
//           categories: true,
//         },
//       },
//     },
//   })

export const getStaticProps: GetStaticProps = async () => {
  console.log(">>>>>>>>>>>>>>>>>>  getting fundraisers <<<<<<<<<<<<<<<<<<<<");
  const feed = await prisma.fundraiser.findMany({
    include: {
      products: {
        include: {
          Product: true,
        },
      },
    },
  });
  return {
    props: { feed },
    revalidate: 10,
  };
};

const Fundraisers: React.FC<Props> = (props) => {
  const { feed } = props;
  return (
    <div>
      <div>
        {props.feed.map((fundraiser) => {
          return (
            <div key={fundraiser.id} className="fundraiser">
              <h1>{fundraiser.name}</h1>
              <ul>
                {fundraiser.products.map((p) => {
                  console.log("p: ", JSON.stringify(p));
                  return <li key={p.Product.id}>{p.Product.name}</li>;
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
