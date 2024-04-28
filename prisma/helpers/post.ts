import prisma from "../../lib/prisma";

export const fetchPosts = async () => {
  return await prisma.post.findMany({
    include: { author: true },
  });
};

export const findPost = async (id: string) => {
  return await prisma.post.findUnique({
    where: { id: Number(id) },
    include: { author: true },
  });
};
