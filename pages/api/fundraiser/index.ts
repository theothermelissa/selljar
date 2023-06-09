import prisma from "@/lib/prisma";

// POST /api/fundraiser
export default async function handle(req: any, res: any) {
  const { title, content } = req.body;

  console.log("here is your request: ", JSON.stringify(req));
  //   const result = await prisma.fundraiser.create({
  //     data: {},
  //   });
  //   console.log("post created (I hope)");
  //   res.json(result);
}
