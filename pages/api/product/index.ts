import prisma from "@/lib/prisma";

// POST /api/product
// Required fields in body: name
export default async function handle(req: any, res: any) {
  const { name } = req.body;

  const result = await prisma.product.create({
    data: {
      name: name,
    },
  });
  res.json(result);
}
