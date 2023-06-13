import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const fundraiserId = req.query.id?.toString();
  if (!fundraiserId) {
    return;
  }
  if (req.method === "DELETE") {
    const fundraiser = await prisma.fundraiser.delete({
      where: { id: fundraiserId },
    });
    res.json(fundraiser);
  } else if (req.method === "GET") {
    const fund = await prisma.fundraiser.findUnique({
      where: {
        id: fundraiserId,
      },
    });
    res.json(fund);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}
