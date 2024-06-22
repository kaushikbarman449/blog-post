import prisma from "@/lib/db";
import { notFound } from "next/navigation";

const page = async ({ params }: { params: { id: string } }) => {
  const posts = await prisma.post.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!posts) {
    notFound();
  }

  return (
    <main className="px-7 pt-24 text-center">
      {posts && (
        <>
          <h1 className="text-5xl font-semibold mb-7">{posts.title}</h1>
          <p className="max-w-[700px] mx-auto">{posts.body}</p>
        </>
      )}
    </main>
  );
};

export default page;
