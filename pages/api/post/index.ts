import prisma from "@/lib/prisma";

// POST /api/post
// Required fields in body: title
// Optional fields in body: content
export default async function handle(req: any, res: any) {
  const { title, content } = req.body;

  console.log("got it; creating post.");

  const result = await prisma.post.create({
    data: {
      title: title,
      content: content,
    },
  });
  console.log("post created (I hope)");
  res.json(result);
}
