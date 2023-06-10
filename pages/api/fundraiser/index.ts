import prisma from "@/lib/prisma";

// POST /api/fundraiser
export default async function handle(req: any, res: any) {
  //   const { fundraiserId, sellerId } = req.body;

  console.log("here is your request: ", JSON.stringify(req));
  //   const result = await prisma.fundraiser.create({
  //     data: {
  //       fundraiserId: fundraiserId,
  //       sellerId: sellerId,
  //     },
  //   });
  //   console.log("post created (I hope)");
  //   res.json(result);
}
