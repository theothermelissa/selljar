import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

// POST /api/fundraiser
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { productIds, name } = req.body;
  const productsToConnect = productIds.map((productId: string) => {
    return {
      Product: {
        connect: {
          id: productId,
        },
      },
    };
  });

  const result = await prisma.fundraiser.create({
    data: {
      products: {
        create: productsToConnect,
      },
      name: name,
    },
  });
  res.json(result);
}
