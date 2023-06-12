import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

// DELETE /api/fundraiser/:id
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const fundraiserId = req;
  if (req.method === "DELETE") {
    const { fundraiserId } = req.body;
    const fundraiser = await prisma.fundraiser.delete({
      where: { id: fundraiserId },
    });
    res.json(fundraiser);
  } else if (req.method === "GET") {
    if (!req.query.id) {
      return;
    }
    const fund = await prisma.fundraiser.findUnique({
      where: {
        id: req.query.id.toString(),
      },
    });
    res.json(fund);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}
