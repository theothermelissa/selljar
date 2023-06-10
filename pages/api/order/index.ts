import prisma from "@/lib/prisma";

// POST /api/order
export default async function handle(req: any, res: any) {
  const { fundraiserId, sellerId, supporterName } = req.body;

  const result = await prisma.order.create({
    data: {
      fundraiser: {
        connect: {
          id: fundraiserId,
        },
      },
      seller: {
        connect: {
          id: sellerId,
        },
      },
      supporter: {
        create: {
          name: supporterName,
        },
      },
    },
  });
  res.json(result);
}
