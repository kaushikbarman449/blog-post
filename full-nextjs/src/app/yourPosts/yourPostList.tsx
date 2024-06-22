import prisma from "@/lib/db";
import Link from "next/link";

const YourPostList = async () => {
  const posts = await prisma.post.findMany();

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id} className="mb-3">
          <Link href={`/yourPosts/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default YourPostList;
